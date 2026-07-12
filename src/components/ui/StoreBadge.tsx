import type { StoreLink } from '../../data/portfolio'

/** Google Play triangle in its signature four-color scheme. */
function GooglePlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <defs>
        <linearGradient id="gp-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00d3ff" />
          <stop offset="1" stopColor="#00b0ff" />
        </linearGradient>
      </defs>
      <path d="M3.6 2.1c-.3.2-.5.6-.5 1.1v17.6c0 .5.2.9.5 1.1l.1.1L13 12.1v-.2L3.7 2z" fill="url(#gp-a)" />
      <path d="M16.2 15.3 13 12.1v-.2l3.2-3.2.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2z" fill="#ffce00" />
      <path d="M16.3 15.2 13 12 3.6 21.9c.4.4 1 .4 1.7 0z" fill="#ff3d47" />
      <path d="M16.3 8.8 5.3 2.1c-.7-.4-1.3-.4-1.7 0L13 12z" fill="#00e676" />
    </svg>
  )
}

/** Apple logo mark. */
function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

export default function StoreBadge({ link }: { link: StoreLink }) {
  const isPlay = link.store === 'play'
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      data-cursor="hover"
      className="group flex items-center gap-2.5 rounded-xl border border-white/15 bg-black/50 px-4 py-2 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-black/70"
    >
      <span className={isPlay ? '' : 'text-white'}>
        {isPlay ? <GooglePlayGlyph /> : <AppleGlyph />}
      </span>
      <span className="text-left leading-tight">
        <span className="block text-[9px] uppercase tracking-wide text-slate-400">
          {isPlay ? 'Get it on' : 'Download on the'}
        </span>
        <span className="block text-sm font-semibold text-white">
          {isPlay ? 'Google Play' : 'App Store'}
        </span>
      </span>
    </a>
  )
}
