import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react'
import Reveal from './ui/Reveal'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="relative pt-12 pb-12 md:pt-16 md:pb-16">
      <div className="section-pad">
        <Reveal>
          <span className="eyebrow">
            <GraduationCap size={14} />
            Academic Background
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Education &amp; <span className="text-gradient">Foundational Computer Science</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-1">
          {education.map((edu, idx) => (
            <Reveal key={edu.degree} delay={idx * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl glass p-6 sm:p-8 transition-all hover:border-amber-glow/40 shadow-card">
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-glow/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-amber-glow/30 bg-amber-glow/10 text-amber-glow shadow-glow">
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        {edu.degree}
                      </h3>
                      <p className="font-medium text-slate-300">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-amber-glow">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-300">
                  {edu.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Highlights:
                  </span>
                  {edu.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-amber-glow/20 bg-amber-glow/5 px-3 py-1 font-mono text-xs text-amber-200"
                    >
                      <BookOpen size={13} className="text-amber-glow" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
