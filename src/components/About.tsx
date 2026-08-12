import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './ui/Reveal'
import {
  profile,
  competencies,
  categorizedSkills,
  skills,
  toolchain,
  stats,
} from '../data/portfolio'

const gridStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
}

const chip = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', ...categorizedSkills.map((c) => c.categoryName)]

  const displayedSkills =
    activeCategory === 'All'
      ? skills
      : categorizedSkills.find((c) => c.categoryName === activeCategory)?.skills || []

  return (
    <section id="about" className="relative pt-10 pb-4 md:pt-12 md:pb-6">
      <div className="section-pad">
        {/* Intro */}
        <Reveal>
          <span className="eyebrow">About &amp; Core Competencies</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Four years of mobile mastery, obsessed with the details that make an
            app feel <span className="text-gradient">native &amp; enterprise-ready</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            {profile.summary}
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl glass p-5 text-center transition-transform hover:scale-105"
                data-cursor="hover"
              >
                <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-slate-400 font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Competency cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {competencies.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-6 sm:p-8"
                data-cursor="hover"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-neon/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon transition-transform duration-300 group-hover:scale-110">
                  <c.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {c.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Categorized Skills Section */}
        <div id="skills" className="mt-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-neon">
                  Technical Arsenal
                </h4>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  Categorized Core Skills &amp; Stack
                </h3>
              </div>
            </div>
          </Reveal>

          {/* Category Filter Tabs */}
          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-mono font-medium transition-all ${
                      isActive
                        ? 'bg-neon text-base-950 shadow-glow font-bold scale-105'
                        : 'border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={gridStagger}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            >
              {displayedSkills.map((s) => (
                <motion.div
                  key={s.name}
                  variants={chip}
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 transition-colors hover:border-neon/40 hover:bg-white/[0.06]"
                  data-cursor="hover"
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.04] ${s.color} transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110`}
                  >
                    <s.icon size={18} />
                  </span>
                  <span className="truncate text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                    {s.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Daily workflow */}
        <div className="mt-8">
          <Reveal>
            <div className="rounded-2xl glass p-6 sm:p-8">
              <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-amber-glow">
                Native Tooling &amp; Build Environments
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {toolchain.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-amber-glow/40"
                    data-cursor="hover"
                  >
                    <span className="font-medium text-white text-sm sm:text-base">{t.name}</span>
                    <span className="font-mono text-xs text-slate-400">{t.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

