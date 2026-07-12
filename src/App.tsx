import { motion, useScroll, useSpring } from 'framer-motion'
import Cursor from './components/ui/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  })

  return (
    <>
      {/* Custom cursor (auto-disables on touch) */}
      <Cursor />

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-neon via-neon-soft to-amber-glow"
      />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
