# Shashikant Panchal — Immersive 3D Portfolio

A production-ready, single-page creative portfolio for a **React Native & Expo Developer**, built with an interactive 3D hero, magnetic hover interactions, a custom cursor, and scroll-triggered motion.

## Stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** — refined dark-slate theme with neon-cyan + dark-amber accents and `backdrop-blur` glassmorphism
- **Framer Motion** — custom cursor, magnetic elements, scroll-progress bar, `whileInView` reveals
- **Three.js** via **@react-three/fiber** + **@react-three/drei** — mouse-responsive morphing distortion mesh, particle field, sparkles
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├── App.tsx                 # Shell: cursor, scroll bar, section composition
├── data/portfolio.ts       # Single source of truth for all content
├── hooks/useMousePosition.ts
├── components/
│   ├── Navbar.tsx  Hero.tsx  About.tsx  Projects.tsx  Contact.tsx  Footer.tsx
│   ├── three/ThreeCanvas.tsx   # R3F scene (code-split / lazy-loaded)
│   └── ui/
│       ├── Cursor.tsx      # Two-layer custom cursor (auto-off on touch)
│       ├── Magnetic.tsx    # Magnetic hover wrapper
│       └── Reveal.tsx      # Scroll-triggered reveal
```

## Editing content

All copy — profile, competencies, tech stack, and the four featured projects
(Upasana, Advanced Deep Linking Architecture, iQuest Enterprise Integration,
Agratix Offline Engine) — lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).

Update the `github` / `linkedin` URLs in the `profile.socials` object there to
point at your real profiles. Your portrait lives at `public/myImage.jpeg`.

## Notes

- The Three.js bundle is intentionally code-split and lazy-loaded so the hero
  copy paints instantly while the scene streams in.
- The custom cursor and all motion respect `prefers-reduced-motion` and
  disable themselves on touch / coarse-pointer devices.
```
