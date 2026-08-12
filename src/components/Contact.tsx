import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, Loader2, AlertCircle, Copy, Mail } from 'lucide-react'
import Reveal from './ui/Reveal'
import Magnetic from './ui/Magnetic'
import { profile, socials, contactChannels } from '../data/portfolio'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)

  const resetLater = () => window.setTimeout(() => setStatus('idle'), 5000)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2500)
  }

  const sendViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, '_blank')
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    resetLater()
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    try {
      // Use FormSubmit AJAX endpoint directly to shashikantpanchal499@gmail.com
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Enquiry from ${form.name}`,
          _template: 'table',
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        resetLater()
      } else {
        // Fallback to mailto
        sendViaMailto()
      }
    } catch (err) {
      console.warn('FormSubmit failed, falling back to mailto:', err)
      sendViaMailto()
    }
  }

  const field =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-colors focus:border-neon/60 focus:bg-white/[0.05] disabled:opacity-60'

  return (
    <section id="contact" className="relative pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="section-pad">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left — pitch + links */}
          <div>
            <Reveal>
              <span className="eyebrow">Get in Touch</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Let&apos;s build something
                <br />
                <span className="text-gradient">worth shipping.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-300">
                Have a mobile product in mind, or a native engineering problem to
                solve? Send a message directly to{' '}
                <button
                  onClick={copyEmail}
                  className="font-mono text-sm font-semibold text-neon underline hover:text-white transition-colors"
                  title="Click to copy email"
                  data-cursor="hover"
                >
                  {profile.email}
                </button>
                .
              </p>
            </Reveal>

            {/* Quick Email Copy Chip */}
            <Reveal delay={0.12}>
              <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-neon/30 bg-neon/10 px-4 py-2.5">
                <Mail size={16} className="text-neon" />
                <span className="font-mono text-xs text-white">{profile.email}</span>
                <button
                  onClick={copyEmail}
                  data-cursor="hover"
                  className="flex items-center gap-1 rounded-lg bg-neon/20 px-2.5 py-1 font-mono text-[11px] font-semibold text-neon hover:bg-neon hover:text-base-950 transition-all"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3">
                {contactChannels.map((c) => {
                  const inner = (
                    <>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-neon/10 text-neon">
                        <c.icon size={16} />
                      </span>
                      <span className="leading-tight">
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
                          {c.label}
                        </span>
                        <span className="block text-sm font-medium text-slate-200">{c.value}</span>
                      </span>
                    </>
                  )
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-center gap-3 rounded-xl glass px-3.5 py-2.5 transition-colors hover:border-neon/40"
                      data-cursor="hover"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={c.label}
                      className="flex items-center gap-3 rounded-xl glass px-3.5 py-2.5"
                    >
                      {inner}
                    </div>
                  )
                })}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex gap-3">
                {socials.map((s) => (
                  <Magnetic key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      aria-label={s.label}
                      data-cursor="hover"
                      className="grid h-12 w-12 place-items-center rounded-xl glass text-slate-300 transition-colors hover:border-neon/50 hover:text-neon"
                    >
                      <s.icon size={20} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — glass form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl glass-strong p-6 shadow-card sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Send Direct Email Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Messages deliver directly to {profile.email}
              </p>

              <fieldset
                disabled={status === 'sending'}
                className="space-y-4"
              >
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
                    Your Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
                    Your Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Hi Shashikant, I'd like to discuss a mobile project..."
                    className={`${field} resize-none`}
                  />
                </div>
              </fieldset>

              <Magnetic className="mt-6" strength={12}>
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon to-neon-deep py-3.5 font-semibold text-base-950 shadow-glow disabled:opacity-70"
                  data-cursor="hover"
                >
                  {status === 'sending' && (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending to {profile.email}…
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <Check size={18} /> Message sent to {profile.email}!
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle size={18} /> Opening Mail App…
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      Send Message to {profile.firstName} <Send size={18} />
                    </>
                  )}
                </motion.button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

