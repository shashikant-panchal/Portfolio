import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, FileText, Download } from 'lucide-react'
import Magnetic from './ui/Magnetic'
import ErrorBoundary from './ui/ErrorBoundary'
import { profile } from '../data/portfolio'
import { downloadResume } from '../utils/downloadResume'

// The 3D scene is code-split so the hero copy paints instantly.
const ThreeCanvas = lazy(() => import('./three/ThreeCanvas'))

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

interface HeroProps {
  onOpenResume?: () => void
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex items-center overflow-hidden pb-6 md:pb-8"
    >
      {/* Ambient grid + glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

      <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-12 sm:px-8 md:pt-24 md:pb-16 relative z-10 grid items-center gap-8 md:grid-cols-2">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="eyebrow"
            data-cursor="hover"
          >
            <Sparkles size={14} />
            {profile.experienceYears}+ years of software engineering
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {profile.firstName}
            <br />
            <span className="text-gradient">Panchal</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-slate-300"
          >
            Senior{' '}
            <span className="font-medium text-neon">
              React Native &amp; Native Build
            </span>{' '}
            Engineer. {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon to-neon-deep px-5 py-3 font-semibold text-base-950 shadow-glow transition-transform"
              >
                View production work
                <ArrowDown
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </Magnetic>
            {onOpenResume && (
              <Magnetic>
                <button
                  onClick={onOpenResume}
                  data-cursor="hover"
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-neon/40 bg-neon/10 px-4 py-3 font-semibold text-neon transition-colors hover:bg-neon hover:text-base-950"
                >
                  <FileText size={18} />
                  <span>View Resume</span>
                </button>
              </Magnetic>
            )}
            <Magnetic>
              <a
                href="/Shashikant_Panchal_Resume.pdf"
                download="Shashikant_Panchal_Resume.pdf"
                onClick={downloadResume}
                data-cursor="hover"
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/[0.05] px-4 py-3 font-semibold text-slate-200 transition-colors hover:border-neon/50 hover:bg-neon/10 hover:text-neon"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-4 py-3 font-semibold text-white transition-colors hover:border-neon/50 hover:text-neon"
              >
                Get in touch
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right — 3D + portrait */}
        <div className="relative h-[320px] sm:h-[400px] md:h-[480px]">
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-40 w-40 animate-pulse rounded-full bg-neon/10 blur-2xl" />
                </div>
              }
            >
              <ThreeCanvas />
            </Suspense>
          </ErrorBoundary>

          {/* Large floating portrait layered over the scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-2 left-2 z-20 sm:bottom-4 sm:left-4"
            data-cursor="hover"
          >
            <div className="relative">
              {/* Glow ring behind the portrait */}
              <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-br from-neon/40 via-transparent to-amber-glow/35 blur-xl" />
              <div className="relative overflow-hidden rounded-[1.85rem] border border-white/20 bg-base-900/70 p-2 backdrop-blur-xl shadow-card">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-48 w-38 rounded-[1.5rem] object-cover object-top ring-2 ring-white/15 sm:h-52 sm:w-40 md:h-56 md:w-44"
                  loading="eager"
                />
                {/* Name plate */}
                <div className="absolute inset-x-2 bottom-2 rounded-b-[1.5rem] rounded-t-lg bg-gradient-to-t from-base-950/95 via-base-950/80 to-transparent px-3 pb-3 pt-6">
                  <p className="text-sm font-bold leading-tight text-white sm:text-base">
                    {profile.name}
                  </p>
                  <p className="font-mono text-[11px] font-semibold text-neon mt-0.5">{profile.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-8 w-px bg-gradient-to-b from-neon to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
