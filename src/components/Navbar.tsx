import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, FileText, Download } from 'lucide-react'
import Magnetic from './ui/Magnetic'
import { profile } from '../data/portfolio'
import { downloadResume } from '../utils/downloadResume'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: profile.socials.github, icon: Github },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

interface NavbarProps {
  onOpenResume?: () => void
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? 'glass-strong shadow-card' : 'border border-transparent'
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative block h-10 w-10 shrink-0">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-neon to-amber-glow opacity-80 blur-[3px] transition-opacity group-hover:opacity-100" />
            <img
              src={profile.image}
              alt={profile.name}
              className="relative h-10 w-10 rounded-full border-2 border-neon/70 object-cover object-top shadow-glow"
            />
          </span>
          <div className="hidden flex-col sm:flex">
            <span className="font-display text-sm font-semibold tracking-wide text-white">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] text-neon">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-xs font-mono text-slate-300 transition-colors hover:text-neon"
            >
              {l.label}
            </a>
          ))}

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              data-cursor="hover"
              className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-lg border border-neon/40 bg-neon/10 px-3 py-1.5 font-mono text-xs font-semibold text-neon transition-all hover:bg-neon hover:text-base-950"
            >
              <FileText size={13} />
              <span>View Resume</span>
            </button>
          )}

          <a
            href="/Shashikant-P.pdf"
            download="Shashikant-P.pdf"
            onClick={downloadResume}
            data-cursor="hover"
            className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/20 bg-white/[0.05] px-3 py-1.5 font-mono text-xs font-semibold text-slate-200 transition-all hover:border-neon/50 hover:bg-neon/10 hover:text-neon"
          >
            <Download size={13} />
            <span>Download</span>
          </a>

          {/* Easily accessible social links */}
          <span className="mx-2 h-5 w-px bg-white/10" />
          <div className="flex items-center gap-1.5">
            {socialLinks.map((s) => (
              <Magnetic key={s.label} strength={14}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-neon/50 hover:bg-neon/10 hover:text-neon"
                >
                  <s.icon size={16} />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Mobile toggle & Resume button */}
        <div className="flex items-center gap-2 lg:hidden">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 rounded-xl border border-neon/40 bg-neon/10 px-3 py-2 font-mono text-xs font-semibold text-neon"
            >
              <FileText size={14} />
              <span>View</span>
            </button>
          )}

          <a
            href="/Shashikant-P.pdf"
            download="Shashikant-P.pdf"
            onClick={downloadResume}
            className="flex items-center gap-1 rounded-xl border border-white/20 bg-white/10 px-2.5 py-2 font-mono text-xs font-semibold text-white"
          >
            <Download size={14} />
          </a>

          <button
            className="grid h-10 w-10 place-items-center rounded-xl glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute left-4 right-4 top-20 z-50 rounded-2xl glass-strong p-4 lg:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-2.5 font-mono text-sm text-slate-200 hover:bg-white/5 hover:text-neon"
              >
                {l.label}
              </a>
            ))}

            {/* Social links */}
            <div className="mt-2 flex gap-2 border-t border-white/10 px-2 pt-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  onClick={() => setOpen(false)}
                  className="grid h-11 flex-1 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-neon/50 hover:text-neon"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

