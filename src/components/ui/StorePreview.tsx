import { motion } from 'framer-motion'
import { Star, ExternalLink, Download } from 'lucide-react'
import type { Project } from '../../data/portfolio'
import StoreBadge from './StoreBadge'

/**
 * A clean store-listing card built purely from the real app icon, title,
 * tagline, rating and live store links — modelled on a Google Play / App Store
 * listing header. No screenshots.
 */
export default function StorePreview({ project }: { project: Project }) {
  const p = project.preview
  const primary = project.links[0]
  const domain = primary.store === 'play' ? 'play.google.com' : 'apps.apple.com'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="relative"
      data-cursor="hover"
    >
      {/* Ambient glow */}
      <div
        className={`absolute -inset-6 rounded-[3rem] bg-gradient-to-br ${p.glow} opacity-50 blur-3xl`}
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-base-900/70 p-6 shadow-card backdrop-blur-xl sm:p-8">
        {/* Header: icon + title */}
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <div
              className={`absolute -inset-1.5 rounded-3xl bg-gradient-to-br ${p.glow} opacity-70 blur-lg`}
            />
            <img
              src={p.icon}
              alt={`${project.name} app icon`}
              className="relative h-20 w-20 rounded-2xl ring-1 ring-white/15 sm:h-24 sm:w-24"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
              {p.storeTitle}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={
                      i < Math.round(Number(p.rating))
                        ? 'fill-amber-glow text-amber-glow'
                        : 'text-slate-600'
                    }
                  />
                ))}
              </span>
              <span className="text-sm font-semibold text-white">{p.rating}</span>
              <span className="h-3.5 w-px bg-white/15" />
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <ExternalLink size={11} />
                {domain}
              </span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-5 text-sm leading-relaxed text-slate-300">
          {p.tagline}
        </p>

        {/* Availability line */}
        <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
          <Download size={13} className="text-emerald-400" />
          Live now — available to download
        </div>

        {/* Store badges */}
        <div className="mt-5 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <StoreBadge key={l.href} link={l} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
