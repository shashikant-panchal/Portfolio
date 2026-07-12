import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal from './ui/Reveal'
import StorePreview from './ui/StorePreview'
import { projects, type Project } from '../data/portfolio'

const accentMap: Record<Project['accent'], string> = {
  cyan: 'text-cyan-400',
  amber: 'text-amber-glow',
  violet: 'text-violet-400',
  emerald: 'text-emerald-400',
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1
  const accent = accentMap[project.accent]

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      {/* Live store preview */}
      <div className={flip ? 'md:order-2' : ''}>
        <StorePreview project={project} />
      </div>

      {/* Details */}
      <Reveal delay={0.1} className={flip ? 'md:order-1' : ''}>
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-base-900 ${accent}`}
            >
              <project.icon size={22} />
            </span>
            <div>
              <p className={`font-mono text-[11px] uppercase tracking-wider ${accent}`}>
                {project.category}
              </p>
              <p className="font-mono text-[11px] text-slate-500">{project.period}</p>
            </div>
          </div>

          <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-slate-400">
            {project.summary}
          </p>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                <Check size={16} className={`mt-0.5 shrink-0 ${accent}`} />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-400"
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
    <section id="work" className="relative">
      <div className="section-pad">
        <Reveal>
          <span className="eyebrow">Featured Projects</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Shipped to the stores — <span className="text-gradient">tap to try them live</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-slate-400">
            Real production apps, built end-to-end and live on Google Play and the
            App Store. Hover a device to bring it to life.
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
