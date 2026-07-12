import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import Magnetic from './ui/Magnetic'
import { profile, techStack } from '../data/portfolio'

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

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Ambient grid + glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

      <div className="section-pad relative z-10 grid items-center gap-12 pt-28 md:grid-cols-2 md:pt-24">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="eyebrow"
            data-cursor="hover"
          >
            <Sparkles size={14} />
            {profile.experienceYears}+ years of mobile mastery
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.firstName}
            <br />
            <span className="text-gradient">Panchal</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-slate-400"
          >
            Specialized{' '}
            <span className="font-medium text-neon">
              React Native &amp; Expo
            </span>{' '}
            developer. {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Magnetic>
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon to-neon-deep px-6 py-3.5 font-semibold text-base-950 shadow-glow transition-transform"
              >
                View my work
                <ArrowDown
                  size={18}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition-colors hover:border-neon/50 hover:text-neon"
              >
                Get in touch
              </a>
            </Magnetic>
          </motion.div>

          {/* Marquee of the stack */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-2"
          >
            {techStack.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-400"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — 3D + portrait */}
        <div className="relative h-[380px] sm:h-[460px] md:h-[560px]">
          <Suspense
            fallback={
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-40 w-40 animate-pulse rounded-full bg-neon/10 blur-2xl" />
              </div>
            }
          >
            <ThreeCanvas />
          </Suspense>

          {/* Large floating portrait layered over the scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-2 left-0 z-20 sm:bottom-4 sm:left-2"
            data-cursor="hover"
          >
            <div className="relative">
              {/* Glow ring behind the portrait */}
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-neon/40 via-transparent to-amber-glow/30 blur-xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-base-900/60 p-1.5 backdrop-blur-xl shadow-card">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-40 w-32 rounded-[1.4rem] object-cover object-top ring-1 ring-white/10 sm:h-52 sm:w-40 md:h-60 md:w-48"
                  loading="eager"
                />
                {/* Name plate */}
                <div className="absolute inset-x-1.5 bottom-1.5 rounded-b-[1.4rem] rounded-t-md bg-gradient-to-t from-base-950/95 via-base-950/70 to-transparent px-3 pb-3 pt-6">
                  <p className="text-sm font-bold leading-tight text-white">
                    {profile.name}
                  </p>
                  <p className="font-mono text-[10px] text-neon">{profile.role}</p>
                </div>
              </div>
              {/* Status pill */}
              <div className="absolute -right-3 top-3 flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-[10px] font-medium text-emerald-300">Open to work</span>
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
