import { spawn } from 'node:child_process'
import fs from 'node:fs/promises'
import path from 'node:path'

async function run() {
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  const userDataDir = '/tmp/chrome-screenshot-profile-' + Date.now()
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1440,900',
  ])

  try {
    for (let i = 0; i < 20; i++) {
      try {
        const res = await fetch('http://127.0.0.1:9222/json/version')
        if (res.ok) break
      } catch (e) {}
      await new Promise((r) => setTimeout(r, 200))
    }

    const newPageRes = await fetch('http://127.0.0.1:9222/json/new?http://localhost:4173', {
      method: 'PUT',
    })
    const pageData = await newPageRes.json()
    const ws = new WebSocket(pageData.webSocketDebuggerUrl)
    let id = 1
    const pending = new Map()

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data)
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id)
        pending.delete(msg.id)
        if (msg.error) reject(msg.error)
        else resolve(msg.result)
      }
    }

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++
        pending.set(msgId, { resolve, reject })
        ws.send(JSON.stringify({ id: msgId, method, params }))
      })
    }

    await new Promise((r) => (ws.onopen = r))
    await send('Page.enable')
    await send('Runtime.enable')
    await send('DOM.enable')
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false,
    })

    await new Promise((r) => setTimeout(r, 3500))

    // Disable smooth scroll so jumps happen immediately
    await send('Runtime.evaluate', {
      expression: `document.documentElement.classList.remove('scroll-smooth'); document.body.classList.remove('scroll-smooth');`,
    })

    // Inspect section positions
    const posRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const ids = ['about', 'skills', 'experience', 'work', 'education', 'contact'];
          return JSON.stringify(ids.map(id => {
            const el = document.getElementById(id);
            if (!el) return { id, found: false };
            const rect = el.getBoundingClientRect();
            return { id, found: true, top: rect.top + window.scrollY, height: rect.height };
          }));
        })()
      `,
      returnByValue: true,
    })

    console.log('Section positions:', posRes.result.value)

    async function captureAt(filename, scrollY, extraAction = '') {
      await send('Runtime.evaluate', {
        expression: `
          window.scrollTo(0, ${scrollY});
          ${extraAction}
        `,
      })
      await new Promise((r) => setTimeout(r, 1200))
      const { data } = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: false,
      })
      const buffer = Buffer.from(data, 'base64')
      const target = path.join(process.cwd(), '.github/assets', filename)
      await fs.writeFile(target, buffer)
      console.log(`Wrote ${filename}: ${buffer.length} bytes (scrolled to ${scrollY})`)
    }

    // Positions:
    const positions = JSON.parse(posRes.result.value)
    const getTop = (id) => {
      const found = positions.find((p) => p.id === id)
      return found && found.found ? Math.max(0, found.top - 70) : 0
    }

    // 1. Hero
    await captureAt('hero-section.png', 0)

    // 2. Skills & Tech Arsenal
    await captureAt('skills-matrix.png', getTop('skills'))

    // 3. Experience & Leadership Timeline
    await captureAt('experience-timeline.png', getTop('experience'))

    // 4. Featured Production Apps (Work)
    await captureAt('featured-projects.png', getTop('work'))

    // 5. Contact Section
    await captureAt('contact-section.png', getTop('contact'))

    // 6. Resume Modal
    await send('Runtime.evaluate', {
      expression: `
        const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('View Resume'));
        if (btn) btn.click();
      `,
    })
    await new Promise((r) => setTimeout(r, 1000))
    const { data: modalData } = await send('Page.captureScreenshot', { format: 'png' })
    await fs.writeFile(
      path.join(process.cwd(), '.github/assets/resume-modal.png'),
      Buffer.from(modalData, 'base64')
    )
    console.log('Wrote resume-modal.png')

    ws.close()
  } finally {
    chromeProc.kill('SIGKILL')
  }
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
