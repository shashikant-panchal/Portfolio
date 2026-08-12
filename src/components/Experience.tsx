import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react'
import Reveal from './ui/Reveal'
import { experience } from '../data/portfolio'

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="experience" className="relative pt-4 pb-10 md:pt-6 md:pb-12">
      <div className="section-pad">
        <Reveal>
          <span className="eyebrow">
            <Briefcase size={14} />
            Work History & Leadership
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Proven track record delivering <span className="text-gradient">high-impact mobile engineering</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base text-slate-400 sm:text-lg">
            4+ years of hands-on experience taking complex client specifications to production, scaling React Native performance, hardening native builds, and setting enterprise standards.
          </p>
        </Reveal>

        {/* Timeline Container */}
        <div className="relative mt-16 space-y-8 before:absolute before:left-4 before:top-3 before:h-[calc(100%-24px)] before:w-0.5 before:bg-gradient-to-b before:from-neon before:via-cyan-500/50 before:to-amber-glow/20 md:before:left-1/2 md:before:-translate-x-1/2">
          {experience.map((item, index) => {
            const isExpanded = expandedIndex === index
            const isEven = index % 2 === 0

            return (
              <Reveal key={item.company} delay={index * 0.1}>
                <div className="relative flex flex-col md:flex-row md:items-start group">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="grid h-8 w-8 place-items-center rounded-full border-2 border-neon bg-base-950 shadow-glow transition-transform duration-300 group-hover:scale-125">
                      <div className="h-2.5 w-2.5 rounded-full bg-neon animate-pulse" />
                    </div>
                  </div>

                  {/* Card wrapper */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:left-1/2 md:pl-12 md:ml-auto'
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="overflow-hidden rounded-2xl glass p-6 sm:p-8 transition-colors hover:border-neon/40 shadow-card"
                    >
                      {/* Company Header */}
                      <div className={`flex flex-col gap-2 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-neon/30 bg-neon/10 px-3 py-1 font-mono text-xs font-semibold text-neon">
                            {item.role}
                          </span>
                        </div>

                        <h3 className="font-display text-2xl font-bold text-white">
                          {item.company}
                        </h3>

                        <div className={`flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 ${isEven ? 'md:justify-end' : ''}`}>
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <Calendar size={14} className="text-neon" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1.5 text-slate-400">
                            <MapPin size={14} className="text-amber-400" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Brief Summary */}
                      {item.summary && (
                        <p className="mt-4 text-sm leading-relaxed text-slate-300">
                          {item.summary}
                        </p>
                      )}

                      {/* Tech Pills */}
                      <div className={`mt-5 flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : ''}`}>
                        {item.techHighlights.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors hover:border-neon/40 hover:text-neon"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expand / Collapse Toggle Button */}
                      <button
                        onClick={() => toggleExpand(index)}
                        className={`mt-6 flex items-center gap-2 text-xs font-mono font-medium text-neon hover:text-white transition-colors ${
                          isEven ? 'md:ml-auto' : ''
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Key Accomplishments' : 'View Key Accomplishments'}</span>
                        <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>

                      {/* Expanded Achievements */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 border-t border-white/10 pt-4">
                              <h4 className={`mb-3 font-mono text-xs uppercase tracking-wider text-slate-400 ${isEven ? 'md:text-right' : ''}`}>
                                Impact &amp; Engineering Details:
                              </h4>
                              <ul className="space-y-3 text-left">
                                {item.points.map((pt, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-neon" />
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
