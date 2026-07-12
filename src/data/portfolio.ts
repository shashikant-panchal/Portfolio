import {
  Smartphone,
  GitBranch,
  ShieldCheck,
  Server,
  Sparkles as SparklesIcon,
  GraduationCap,
  ShoppingBag,
  Github,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Atom,
  Rocket,
  Braces,
  FileCode2,
  Layers,
  Compass,
  Wand2,
  Boxes,
  Link2,
  KeyRound,
  Database,
  Flame,
  Leaf,
  Hexagon,
  Share2,
  Workflow,
  Zap,
  Languages,
  Webhook,
  type LucideIcon,
} from 'lucide-react'

// Bundled app icons — imported so Vite hashes & serves them reliably.
import upasanaIcon from '../assets/previews/upasana-icon.png'
import sakshamIcon from '../assets/previews/saksham-icon.png'
import finecartIcon from '../assets/previews/finecart-icon.png'

export const profile = {
  name: 'Shashikant Panchal',
  firstName: 'Shashikant',
  lastName: 'Panchal',
  role: 'Senior Software Engineer',
  subRole: 'React Native & Expo Specialist',
  tagline: 'I ship production mobile apps from zero to the App Store — fast, secure, and delightful.',
  location: 'Mysuru, India',
  phone: '+91 93532 86353',
  experienceYears: 4,
  email: 'shashikantpanchal499@gmail.com',
  image: '/myImage.jpeg',
  summary:
    'React Native Developer with 4+ years architecting, shipping, and scaling cross-platform apps for iOS and Android. Proven track record taking production apps from zero to App Store / Play Store — integrating REST APIs, SSO, deep linking, and secure auth, and standing up CI/CD pipelines with Bitrise and GitHub Actions. Deep command of the native build layer (Android Studio, Xcode) and a relentless focus on performance, clean architecture, and delightful UX.',
  socials: {
    github: 'https://github.com/shashikant-panchal',
    linkedin: 'https://linkedin.com/in/shashikant-panchal-15a494271',
  },
}

export type Social = {
  label: string
  href: string
  icon: LucideIcon
}

export const socials: Social[] = [
  { label: 'GitHub', href: profile.socials.github, icon: Github },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
]

export const contactChannels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Call', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'Location', value: profile.location, href: undefined, icon: MapPin },
]

export type Competency = {
  title: string
  description: string
  icon: LucideIcon
}

export const competencies: Competency[] = [
  {
    title: 'Cross-Platform Mobile',
    description:
      'React Native & Expo apps that feel native — React Navigation, Reanimated, native modules, push notifications, and i18n at scale.',
    icon: Smartphone,
  },
  {
    title: 'CI/CD & Release Ops',
    description:
      'Automated pipelines with Bitrise, GitHub Actions & Fastlane — code signing, testing, and one-tap deploys to both stores.',
    icon: GitBranch,
  },
  {
    title: 'Enterprise & Security',
    description:
      'SSO, deep linking, encrypted storage, and secure auth flows built for large organizational clients and live exam modules.',
    icon: ShieldCheck,
  },
  {
    title: 'Backend & Data',
    description:
      'Node.js, Firebase, Supabase, MongoDB, and REST / GraphQL — realtime data, auth, analytics, and offline-ready sync.',
    icon: Server,
  },
]

export type Skill = {
  name: string
  icon: LucideIcon
  /** Tailwind text-color class for the icon accent. */
  color: string
}

export const skills: Skill[] = [
  { name: 'React Native', icon: Atom, color: 'text-cyan-400' },
  { name: 'React.js', icon: Atom, color: 'text-sky-400' },
  { name: 'Expo', icon: Rocket, color: 'text-violet-300' },
  { name: 'TypeScript', icon: FileCode2, color: 'text-blue-400' },
  { name: 'JavaScript (ES6+)', icon: Braces, color: 'text-yellow-400' },
  { name: 'Redux Toolkit', icon: Layers, color: 'text-purple-400' },
  { name: 'React Navigation', icon: Compass, color: 'text-teal-400' },
  { name: 'Reanimated', icon: Wand2, color: 'text-fuchsia-400' },
  { name: 'Native Modules', icon: Boxes, color: 'text-orange-400' },
  { name: 'Deep Linking', icon: Link2, color: 'text-cyan-300' },
  { name: 'SSO', icon: KeyRound, color: 'text-amber-glow' },
  { name: 'Supabase', icon: Database, color: 'text-emerald-400' },
  { name: 'Firebase', icon: Flame, color: 'text-amber-400' },
  { name: 'MongoDB', icon: Leaf, color: 'text-green-400' },
  { name: 'Node.js', icon: Hexagon, color: 'text-lime-400' },
  { name: 'GraphQL', icon: Share2, color: 'text-pink-400' },
  { name: 'REST APIs', icon: Webhook, color: 'text-cyan-400' },
  { name: 'Bitrise', icon: Workflow, color: 'text-indigo-400' },
  { name: 'GitHub Actions', icon: Github, color: 'text-slate-200' },
  { name: 'Fastlane', icon: Zap, color: 'text-rose-400' },
  { name: 'i18n', icon: Languages, color: 'text-sky-300' },
]

/** Names only — used for the compact hero chips. */
export const techStack: string[] = skills.map((s) => s.name)

export const toolchain = [
  { name: 'VS Code', role: 'JS / TS core' },
  { name: 'Xcode', role: 'iOS native & builds' },
  { name: 'Android Studio', role: 'Android native & emulation' },
  { name: 'Bitrise + Fastlane', role: 'CI/CD & code signing' },
]

export type StoreLink = {
  store: 'play' | 'appstore'
  href: string
}

export type Project = {
  id: string
  name: string
  category: string
  period: string
  summary: string
  highlights: string[]
  stack: string[]
  icon: LucideIcon
  accent: 'cyan' | 'amber' | 'violet' | 'emerald'
  /** Real store metadata for the live listing card. */
  preview: {
    /** Real app icon pulled from the store listing. */
    icon: string
    /** Store name shown on the listing (og:title). */
    storeTitle: string
    /** Store tagline (og:description). */
    tagline: string
    rating: string
    glow: string
  }
  links: StoreLink[]
}

export const projects: Project[] = [
  {
    id: 'upasana',
    name: 'Upāsanā',
    category: 'Spiritual Companion · Cross-Platform',
    period: 'Dec 2025 – Feb 2026',
    summary:
      'A cross-platform spiritual companion app with complex Panchang / Ekadashi computation, offline-ready data sync, and background scheduling — wrapped in a performance-optimized, accessible UI.',
    highlights: [
      'Panchang / Ekadashi computation with offline sync & background scheduling',
      'Modular Redux state, Supabase for structured data + auth, Firebase for push & analytics',
      'Advanced animations, multilingual i18n, and accessibility across native pipelines',
    ],
    stack: ['React Native', 'Redux', 'Supabase', 'Firebase', 'i18n'],
    icon: SparklesIcon,
    accent: 'amber',
    preview: {
      icon: upasanaIcon,
      storeTitle: 'Upasana - Find Inner Peace',
      tagline:
        'Your daily companion for Ekadashi tracking, spiritual wisdom & Japa meditation',
      rating: '5.0',
      glow: 'from-amber-500/60 via-orange-600/40 to-rose-600/40',
    },
    links: [
      {
        store: 'play',
        href: 'https://play.google.com/store/apps/details?id=com.EkadashiDin.app',
      },
    ],
  },
  {
    id: 'saksham-pro',
    name: 'Saksham Pro',
    category: 'Enterprise LXP · E-Learning',
    period: 'Jan 2025 – Present',
    summary:
      'A comprehensive Learning Experience Platform serving a large user base — content repository, course management, leaderboards, and a social learning module, with enterprise SSO and a live exam engine.',
    highlights: [
      'Content repository, course management, leaderboards & social learning modules',
      'Seamless SSO integration for organizational clients',
      'Highly scalable live exam module for large user groups',
    ],
    stack: ['React Native', 'SSO', 'React Navigation', 'REST APIs'],
    icon: GraduationCap,
    accent: 'cyan',
    preview: {
      icon: sakshamIcon,
      storeTitle: 'Saksham Pro.',
      tagline:
        'An LXP platform offering courses, learning content and guided learning paths.',
      rating: '4.6',
      glow: 'from-cyan-500/60 via-sky-600/40 to-indigo-700/40',
    },
    links: [
      {
        store: 'play',
        href: 'https://play.google.com/store/apps/details?id=com.excel.icicipru',
      },
      {
        store: 'appstore',
        href: 'https://apps.apple.com/in/app/saksham-pro/id6749613839',
      },
    ],
  },
  {
    id: 'finecart',
    name: 'Finecart',
    category: 'E-Commerce · Mobile',
    period: 'Apr 2023 – Aug 2023',
    summary:
      'A polished e-commerce app owned end-to-end — refined UI/UX, complex REST API integrations, product pagination, and category management, shipped to both the App Store and Play Store.',
    highlights: [
      'Full ownership of a polished, responsive UI/UX',
      'Complex REST API integrations with product pagination & category management',
      'Deployed to both the App Store and Google Play Store',
    ],
    stack: ['React Native', 'Redux', 'REST APIs'],
    icon: ShoppingBag,
    accent: 'emerald',
    preview: {
      icon: finecartIcon,
      storeTitle: 'Finecart - Shopping & Calling',
      tagline: 'Shop from local stores near you. Calling & online payments.',
      rating: '4.5',
      glow: 'from-emerald-500/60 via-teal-600/40 to-cyan-700/40',
    },
    links: [
      {
        store: 'play',
        href: 'https://play.google.com/store/apps/details?id=com.retail.center.io',
      },
      {
        store: 'appstore',
        href: 'https://apps.apple.com/in/app/finecart/id6462674750',
      },
    ],
  },
]

export const experience = [
  {
    company: 'Excelsoft Technologies Pvt Ltd',
    role: 'Software Engineer',
    period: 'Oct 2023 – Present',
    location: 'Mysuru, Karnataka',
    points: [
      'Owned the full SDLC for cross-platform apps — specs to deployment on both stores.',
      'Engineered SSO, deep linking, and a live exam module for large organizational clients.',
      'Built CI/CD pipelines with Bitrise & GitHub Actions to automate builds, signing, and deploys.',
      'Hardened security with encrypted storage and secure auth across sensitive flows.',
    ],
  },
  {
    company: 'Mufeed Products and Services Pvt Ltd',
    role: 'React Native Developer',
    period: 'Dec 2022 – Oct 2023',
    location: 'Bidar, Karnataka',
    points: [
      'Architected and launched a full SaaS e-commerce app from scratch on a Firebase backend.',
      'Integrated secure payment gateways and multiple RESTful APIs and third-party services.',
      'Managed state with Redux / Redux Toolkit for predictable behavior across the app.',
      'Optimized performance via native modules and fine-tuned rendering.',
    ],
  },
]

export const stats = [
  { value: '4+', label: 'Years shipping mobile' },
  { value: '5+', label: 'Apps live on stores' },
  { value: '2', label: 'Companies, senior roles' },
  { value: '2', label: 'Platforms, one codebase' },
]
