import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { profile, categorizedSkills, experience, projects, education } from '../data/portfolio'
import { downloadResume } from '../utils/downloadResume'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md print:p-0 print:bg-white print:static">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/20 bg-base-950 p-6 sm:p-10 shadow-2xl print:max-h-none print:w-full print:border-none print:bg-white print:text-black print:p-0"
        >
          {/* Header Controls (Hidden on Print) */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 print:hidden">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-white text-lg sm:text-xl">
                Shashikant Panchal — Resume
              </span>
              <span className="rounded-full bg-neon/10 px-2.5 py-0.5 font-mono text-xs text-neon border border-neon/30">
                Official PDF Format
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/Shashikant-P.pdf"
                download="Shashikant-P.pdf"
                onClick={downloadResume}
                data-cursor="hover"
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-neon to-neon-deep px-4 py-2 text-xs font-bold text-base-950 shadow-glow transition-transform hover:scale-105"
              >
                <Download size={15} />
                <span>Download PDF</span>
              </a>
              <button
                onClick={onClose}
                data-cursor="hover"
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-xl bg-white/10 text-slate-300 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Container */}
          <div className="mt-6 text-slate-200 print:text-black print:mt-0 font-sans leading-relaxed">
            {/* Header */}
            <div className="border-b border-white/15 pb-6 text-center print:border-black print:pb-4">
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl print:text-black uppercase">
                {profile.name}
              </h1>
              <p className="mt-1 font-mono text-sm font-semibold text-neon print:text-slate-800 uppercase tracking-widest">
                {profile.role}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 font-mono text-xs text-slate-300 print:text-black">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-neon print:hidden" />
                  {profile.location}
                </span>
                <span>|</span>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-1 hover:text-neon">
                  <Phone size={12} className="text-neon print:hidden" />
                  {profile.phone}
                </a>
                <span>|</span>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-neon">
                  <Mail size={12} className="text-neon print:hidden" />
                  {profile.email}
                </a>
                <span>|</span>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neon">
                  <Linkedin size={12} className="text-neon print:hidden" />
                  LinkedIn
                </a>
                <span>|</span>
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-neon">
                  <Github size={12} className="text-neon print:hidden" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mt-6">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neon print:text-black border-b border-white/10 print:border-black pb-1 mb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-black">
                {profile.summary}
              </p>
            </div>

            {/* Core Skills */}
            <div className="mt-6">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neon print:text-black border-b border-white/10 print:border-black pb-1 mb-2">
                CORE SKILLS
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm print:text-black">
                {categorizedSkills.map((cat) => (
                  <div key={cat.categoryName} className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="font-bold text-white print:text-black sm:w-56 shrink-0">
                      {cat.categoryName}:
                    </span>
                    <span className="text-slate-300 print:text-black">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="mt-6">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neon print:text-black border-b border-white/10 print:border-black pb-1 mb-2">
                WORK EXPERIENCE
              </h2>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.company}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-white print:text-black text-xs sm:text-sm">
                      <div>
                        <span>{exp.role}</span>
                        <span className="font-normal italic text-slate-300 print:text-black">
                          {' '}| {exp.company}
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-neon print:text-black">
                        {exp.period}
                      </div>
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 print:text-black mb-1.5">
                      {exp.location}
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-black">
                      {exp.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div className="mt-6">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neon print:text-black border-b border-white/10 print:border-black pb-1 mb-2">
                KEY PROJECTS
              </h2>
              <div className="space-y-5">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-white print:text-black text-xs sm:text-sm">
                      <div>
                        <span>{proj.name}</span>
                        <span className="font-normal italic text-slate-300 print:text-black">
                          {' '}— {proj.category}
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-neon print:text-black">
                        {proj.period}
                      </div>
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 print:text-black mb-1.5 flex gap-2">
                      {proj.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline text-cyan-400 print:text-black"
                        >
                          {link.store === 'play' ? 'Play Store' : 'App Store'}
                        </a>
                      ))}
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-black">
                      {proj.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                    <div className="mt-1 font-mono text-[11px] text-slate-400 print:text-black">
                      <span className="font-bold text-slate-200 print:text-black">Tech stack: </span>
                      {proj.stack.join(', ')}.
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-6">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neon print:text-black border-b border-white/10 print:border-black pb-1 mb-2">
                EDUCATION
              </h2>
              {education.map((edu) => (
                <div key={edu.degree}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-white print:text-black text-xs sm:text-sm">
                    <div>{edu.degree}</div>
                    <div className="font-mono text-[11px] text-neon print:text-black">{edu.period}</div>
                  </div>
                  <div className="text-xs text-slate-300 print:text-black font-medium">
                    {edu.institution}, {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
