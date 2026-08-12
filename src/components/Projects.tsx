import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown, Cpu } from 'lucide-react'
import Reveal from './ui/Reveal'
import StorePreview from './ui/StorePreview'
import { projects, type Project } from '../data/portfolio'

const accentMap: Record<Project['accent'], string> = {
  cyan: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
  amber: 'text-amber-glow border-amber-500/30 bg-amber-500/10',
  violet: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
  emerald: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1
  const accent = accentMap[project.accent]
  const [showDeepDive, setShowDeepDive] = useState(false)

  return (
    <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
      {/* Live store preview */}
      <div className={flip ? 'md:order-2' : ''}>
        <StorePreview project={project} />
      </div>

      {/* Details */}
      <Reveal delay={0.1} className={flip ? 'md:order-1' : ''}>
        <div className="rounded-2xl glass p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`grid h-12 w-12 place-items-center rounded-2xl border ${accent}`}
            >
              <project.icon size={22} />
            </span>
            <div>
              <p className={`font-mono text-[11px] uppercase tracking-wider ${accent.split(' ')[0]}`}>
                {project.category}
              </p>
              <p className="font-mono text-[11px] text-slate-400">{project.period}</p>
            </div>
          </div>

          <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-slate-300">
            {project.summary}
          </p>

          <h4 className="mt-6 font-mono text-xs uppercase tracking-wider text-slate-400">
            Key Architecture &amp; Delivery:
          </h4>
          <ul className="mt-3 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <Check size={16} className={`mt-0.5 shrink-0 ${accent.split(' ')[0]}`} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Deep Dive Accordion */}
          {project.technicalDeepDive && (
            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => setShowDeepDive((v) => !v)}
                className={`flex items-center gap-2 font-mono text-xs font-semibold ${accent.split(' ')[0]} hover:text-white transition-colors`}
              >
                <Cpu size={14} />
                <span>{showDeepDive ? 'Hide Deep Dive Tech Specs' : 'View Deep Dive Tech Specs'}</span>
                <motion.span animate={{ rotate: showDeepDive ? 180 : 0 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {showDeepDive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 rounded-xl border border-white/10 bg-base-950/70 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-2">
                        Native &amp; Engineering Highlights:
                      </p>
                      <ul className="space-y-2">
                        {project.technicalDeepDive.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                            <span className="text-neon">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300 transition-colors hover:border-white/30"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="relative pt-12 pb-12 md:pt-16 md:pb-16">
      <div className="section-pad">
        <Reveal>
          <span className="eyebrow">Featured Production Apps</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Shipped to production — <span className="text-gradient">tap to inspect &amp; test live</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-slate-300">
            Real production cross-platform apps built from scratch and live on the Apple App Store and Google Play Store. Hover or tap to interact.
          </p>
        </Reveal>

        <div className="mt-20 space-y-28">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.6 }}
            >
              <ProjectRow project={p} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

