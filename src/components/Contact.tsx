import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, Loader2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Reveal from './ui/Reveal'
import Magnetic from './ui/Magnetic'
import { profile, socials, contactChannels } from '../data/portfolio'

// EmailJS config — pulled from env, with your service ID as the default.
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wnks15x',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}
const emailjsReady = Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey)

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const resetLater = () => window.setTimeout(() => setStatus('idle'), 4500)

  const sendViaMailto = () => {
    // Fallback so the form always works, even before EmailJS keys are set.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    resetLater()
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return

    if (!emailjsReady) {
      sendViaMailto()
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          // These keys must match the variables in your EmailJS template.
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          to_name: profile.firstName,
          message: form.message,
        },
        { publicKey: EMAILJS.publicKey },
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      resetLater()
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
      resetLater()
    }
  }

  const field =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-colors focus:border-neon/60 focus:bg-white/[0.05] disabled:opacity-60'

  return (
    <section id="contact" className="relative">
      <div className="section-pad">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left — pitch + links */}
          <div>
            <Reveal>
              <span className="eyebrow">Contact</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Let&apos;s build something
                <br />
                <span className="text-gradient">worth shipping.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400">
                Have a mobile product in mind, or a tricky native problem to
                solve? I&apos;m open to collaborations and freelance work.
              </p>
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
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                          {c.label}
                        </span>
                        <span className="block text-sm text-slate-200">{c.value}</span>
                      </span>
                    </>
                  )
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-center gap-3 rounded-xl glass px-3 py-2.5 transition-colors hover:border-neon/40"
                      data-cursor="hover"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={c.label}
                      className="flex items-center gap-3 rounded-xl glass px-3 py-2.5"
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
              <fieldset
                disabled={status === 'sending'}
                className="space-y-4"
              >
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
                    Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your project…"
                    className={`${field} resize-none`}
                  />
                </div>
              </fieldset>

              <Magnetic className="mt-6" strength={12}>
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon to-neon-deep py-3.5 font-semibold text-base-950 shadow-glow disabled:opacity-70"
                  data-cursor="hover"
                >
                  {status === 'sending' && (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending…
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <Check size={18} />{' '}
                      {emailjsReady ? 'Message sent — thank you!' : 'Opening your mail app…'}
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle size={18} /> Something went wrong — retry
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      Send message <Send size={18} />
                    </>
                  )}
                </motion.button>
              </Magnetic>

              {status === 'error' && (
                <p className="mt-3 text-center text-xs text-rose-400">
                  Couldn&apos;t send just now. You can also email me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="underline">
                    {profile.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
