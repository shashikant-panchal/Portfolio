import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-600">
          Crafted with React, Three.js &amp; Framer Motion.
        </p>
      </div>
    </footer>
  )
}
