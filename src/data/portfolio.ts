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
  Printer,
  Radio,
  Cpu,
  Terminal,
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
  role: 'Software Engineer',
  subRole: 'React Native & Native Platform Architect',
  tagline: 'Building, scaling, and architecting high-performance cross-platform mobile apps for iOS & Android.',
  location: 'Mysuru, Karnataka, India',
  phone: '+91 93532 86353',
  experienceYears: 4,
  email: 'shashikantpanchal499@gmail.com',
  image: '/myImage.jpeg',
  summary:
    'Software Engineer with 4+ years of experience architecting, building, and scaling cross-platform mobile applications (React Native, TypeScript) for iOS and Android. Proven track record delivering 7+ production apps from zero to App Store and Google Play launch, spanning enterprise LXP, multi-vendor commerce, and real-time/WebRTC systems. Deep expertise in enterprise SSO & payload encryption, serverless cloud architecture (AWS, Supabase, Firebase), and native Android/iOS build engineering. Builder of fully automated CI/CD pipelines with a strong record of solving hard native-layer problems others avoid.',
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
    title: 'Mobile Architecture & Performance',
    description:
      'React Native (New Architecture, Fabric/TurboModules), Expo, React Compiler, 60 FPS fluid UIs with Reanimated, and native Android 15 (16KB page size) ELF alignment.',
    icon: Smartphone,
  },
  {
    title: 'Enterprise SSO & Security',
    description:
      'OAuth 2.0 / SAML, deep-link payload extraction, double-ended AES token decryption, Keychain & EncryptedSharedPreferences hardening.',
    icon: ShieldCheck,
  },
  {
    title: 'CI/CD & Native Build Engineering',
    description:
      'Automated pipelines with Jenkins & GitHub Actions — Xcode (CocoaPods/Swift/Obj-C), Android Studio (Gradle/CMake/C++ Codegen), and one-tap store deploys.',
    icon: GitBranch,
  },
  {
    title: 'Serverless Cloud & Hardware Sync',
    description:
      'AWS Amplify v6, AWS Cognito, Supabase Realtime & Edge Functions, LiveKit WebRTC with Android PiP, and POS thermal printer engine (~1,350 LOC).',
    icon: Server,
  },
]

export type SkillCategory = {
  categoryName: string
  skills: {
    name: string
    icon: LucideIcon
    color: string
  }[]
}

export const categorizedSkills: SkillCategory[] = [
  {
    categoryName: 'Languages',
    skills: [
      { name: 'TypeScript', icon: FileCode2, color: 'text-blue-400' },
      { name: 'JavaScript (ES6+)', icon: Braces, color: 'text-yellow-400' },
      { name: 'HTML5', icon: FileCode2, color: 'text-orange-400' },
      { name: 'CSS3', icon: FileCode2, color: 'text-sky-400' },
    ],
  },
  {
    categoryName: 'Mobile Development',
    skills: [
      { name: 'React Native (New Arch / Fabric)', icon: Atom, color: 'text-cyan-400' },
      { name: 'Expo (Config Plugins)', icon: Rocket, color: 'text-violet-300' },
      { name: 'Native Modules (Swift/Java)', icon: Boxes, color: 'text-orange-400' },
      { name: 'Deep Linking', icon: Link2, color: 'text-cyan-300' },
      { name: 'SSO (OAuth 2.0 / SAML)', icon: KeyRound, color: 'text-amber-400' },
      { name: 'WebSocket & WebRTC (LiveKit)', icon: Radio, color: 'text-rose-400' },
      { name: 'NFC Technology', icon: Cpu, color: 'text-emerald-300' },
      { name: 'Offline-First Sync', icon: Database, color: 'text-teal-400' },
    ],
  },
  {
    categoryName: 'Frontend & State Management',
    skills: [
      { name: 'React.js', icon: Atom, color: 'text-sky-400' },
      { name: 'Redux & Redux Toolkit', icon: Layers, color: 'text-purple-400' },
      { name: 'Redux Persist', icon: Layers, color: 'text-purple-300' },
      { name: 'Context API', icon: Atom, color: 'text-cyan-300' },
      { name: 'React Navigation v7', icon: Compass, color: 'text-teal-400' },
      { name: 'Reanimated v4', icon: Wand2, color: 'text-fuchsia-400' },
    ],
  },
  {
    categoryName: 'Backend / Data & Cloud',
    skills: [
      { name: 'Node.js', icon: Hexagon, color: 'text-lime-400' },
      { name: 'AWS Amplify v6 & Cognito', icon: Server, color: 'text-amber-500' },
      { name: 'AWS API Gateway & S3', icon: Server, color: 'text-amber-400' },
      { name: 'Supabase (Postgres & Edge)', icon: Database, color: 'text-emerald-400' },
      { name: 'Firebase (Auth, Firestore, FCM)', icon: Flame, color: 'text-amber-400' },
      { name: 'MongoDB', icon: Leaf, color: 'text-green-400' },
      { name: 'REST & GraphQL (Apollo)', icon: Share2, color: 'text-pink-400' },
    ],
  },
  {
    categoryName: 'Payments & Hardware',
    skills: [
      { name: 'Razorpay Integration', icon: ShieldCheck, color: 'text-blue-500' },
      { name: 'ESC/POS Thermal Printing', icon: Printer, color: 'text-indigo-400' },
      { name: 'Google Maps API & Geolocation', icon: MapPin, color: 'text-red-400' },
      { name: 'AES Encryption (crypto-js)', icon: KeyRound, color: 'text-yellow-300' },
    ],
  },
  {
    categoryName: 'CI/CD, DevOps & Tooling',
    skills: [
      { name: 'Jenkins CI/CD', icon: GitBranch, color: 'text-rose-400' },
      { name: 'GitHub Actions & Bitrise', icon: Github, color: 'text-slate-200' },
      { name: 'Android Studio (Gradle/CMake)', icon: Terminal, color: 'text-green-400' },
      { name: 'Xcode (CocoaPods/Swift)', icon: Terminal, color: 'text-sky-400' },
      { name: 'App Store & Google Play', icon: Rocket, color: 'text-violet-400' },
      { name: 'Flipper & RN Debugger', icon: Wand2, color: 'text-pink-300' },
      { name: 'i18n Multilingual Support', icon: Share2, color: 'text-teal-300' },
    ],
  },
]

export type Skill = {
  name: string
  icon: LucideIcon
  color: string
}

// Flat list for compact badges
export const skills: Skill[] = categorizedSkills.flatMap((c) => c.skills)

export const techStack: string[] = [
  'React Native',
  'TypeScript',
  'Expo',
  'AWS Cognito',
  'Supabase',
  'Firebase',
  'Redux Toolkit',
  'GraphQL',
  'LiveKit WebRTC',
  'CI/CD Pipelines',
  'Android 15 Native',
  'Xcode & Gradle',
]

export const toolchain = [
  { name: 'VS Code & WebStorm', role: 'JS / TS core & React Native' },
  { name: 'Xcode & CocoaPods', role: 'iOS native builds, Swift & sign' },
  { name: 'Android Studio', role: 'Gradle, CMake, Java/Kotlin & C++' },
  { name: 'Jenkins & GitHub Actions', role: 'Automated CI/CD pipelines' },
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
  technicalDeepDive: string[]
  stack: string[]
  icon: LucideIcon
  accent: 'cyan' | 'amber' | 'violet' | 'emerald'
  preview: {
    icon: string
    storeTitle: string
    tagline: string
    rating: string
    glow: string
  }
  links: StoreLink[]
}

export const projects: Project[] = [
  {
    id: 'saksham-pro',
    name: 'Saksham Pro',
    category: 'Enterprise Learning Experience Platform (LXP)',
    period: 'Jan 2025 – Present',
    summary:
      'Enterprise LMS app built on React Native 0.86 & React 19, serving large organizational client groups with AWS Amplify v6, AWS Cognito multi-tenant auth, custom double-ended AES token decryption, live quiz engine, gamification, and native Android 15 16KB ELF alignment fixes.',
    highlights: [
      'Architected enterprise LMS (React Native 0.86, React 19) with AWS Amplify v6 and AWS Cognito serverless auth.',
      'Engineered custom enterprise SSO with deep-link payload extraction, double-ended AES token decryption (crypto-js), and AWS API Gateway auth.',
      'Built multi-format course player (video, HTML5, PDF) + live e-test/quiz engine with real-time timers, instant grading, and admit-card generation.',
      'Designed gamification engine — coin wallet, rewards marketplace, auto-generated certificates, and company-wide leaderboards.',
      'Resolved critical Android 15 (16KB page size) native crashes via ELF page alignment and authored custom Gradle/CMake build automation.',
    ],
    technicalDeepDive: [
      'React Native 0.86 & React 19 cutting-edge framework integration',
      'AWS Amplify v6 & AWS Cognito multi-tenant architecture',
      'Custom double-ended AES payload decryption (`crypto-js`) for enterprise SSO link resolution',
      'Android 15 (16KB memory page boundary) native ELF library alignment fix',
      'Custom Gradle & CMake automation addressing C++ Codegen/autolinking failures',
      'Offline-first synchronization with Redux Persist & NetInfo',
      'High-performance rendering with FastImage, Lottie, and SVG charts',
    ],
    stack: [
      'React Native 0.86',
      'React 19',
      'Redux Toolkit',
      'Redux Persist',
      'AWS Amplify v6',
      'AWS Cognito',
      'Firebase FCM',
      'React Navigation v7',
      'react-native-pdf',
      'crypto-js',
      'Lottie',
    ],
    icon: GraduationCap,
    accent: 'cyan',
    preview: {
      icon: sakshamIcon,
      storeTitle: 'Saksham Pro.',
      tagline: 'An enterprise LXP platform offering structured courses, learning content, and live exams.',
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
    category: 'Multi-Vendor E-Commerce & Merchant Ecosystem',
    period: 'Apr 2023 – Aug 2023',
    summary:
      'Feature-rich multi-vendor marketplace app featuring an enterprise POS thermal printing engine (~1,350 LOC), LiveKit WebRTC peer-to-peer audio/video calling with native Android Picture-in-Picture (PiP), geolocation marketplace resolution, and Razorpay family wallet payments.',
    highlights: [
      'Engineered multi-vendor commerce app with shopping, store management, calling, and receipt printing.',
      'Built an enterprise POS thermal printing engine (~1,350 LOC) with react-native-esc-pos-printer supporting Bluetooth, USB, and Network printers.',
      'Integrated LiveKit WebRTC for voice/video calling with push notification call routing and native Android Picture-in-Picture (PiP) support.',
      'Architected location-based marketplace resolution (Google Maps API) with dynamic vendor scoping and cart-guard logic.',
      'Implemented hardware-encrypted token storage, NFC tag scanning, and Razorpay family wallet payments.',
    ],
    technicalDeepDive: [
      'Custom POS thermal printing architecture (~1,350 lines of code) with ESC/POS command handling',
      'LiveKit WebRTC peer-to-peer voice & video calling integration',
      'Native Android Picture-in-Picture (PiP) implementation for continuous video calls while navigating',
      'Geospatial vendor scoping using Google Maps API & device geolocation',
      'Stateful multi-store cart protection logic preventing cross-vendor basket corruption',
      'NFC tag scanning integration for instant item / merchant lookups',
      'Firebase Cloud Messaging (FCM) call routing and deep-linked alert engines',
    ],
    stack: [
      'React Native',
      'Redux Toolkit',
      'Redux Persist',
      'Axios',
      'LiveKit WebRTC',
      'react-native-esc-pos-printer',
      'NFC',
      'Razorpay',
      'Google Maps API',
      'Firebase FCM',
    ],
    icon: ShoppingBag,
    accent: 'emerald',
    preview: {
      icon: finecartIcon,
      storeTitle: 'Finecart - Shopping & Calling',
      tagline: 'Shop from local stores near you. Realtime calling, thermal printing & online payments.',
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
  {
    id: 'upasana',
    name: 'Upāsanā',
    category: 'Cross-Platform Spiritual Companion App',
    period: 'Dec 2025 – Feb 2026',
    summary:
      'Next-generation cross-platform app (React Native 0.81, Expo 54, React 19) with New Architecture & React Compiler enabled for zero re-render overhead. Features Supabase Realtime Japa rooms, serverless Panchang computation on Supabase Edge Functions, dual-API fallback architecture, and custom Expo Config Plugins.',
    highlights: [
      'Engineered cross-platform app with New Architecture & React Compiler enabled for zero re-render overhead and fluid 60 FPS UI.',
      'Architected real-time multiplayer Japa chanting rooms using Supabase Realtime WebSockets/Postgres with synced counter states.',
      'Built a serverless Panchang & Muhurta scoring engine (Supabase Edge Functions) computing Tithi/Nakshatra/Yoga/Karana from dynamic GPS location.',
      'Designed a dual-API fallback architecture for scripture content (primary + backup API, in-memory caching, static JSON fallback) for zero downtime.',
      'Authored custom Expo Config Plugins (Node.js) patching build.gradle and AndroidManifest.xml at compile time.',
    ],
    technicalDeepDive: [
      'React Native 0.81, Expo 54, and React 19 with New Architecture (Fabric) & React Compiler',
      'Supabase Realtime WebSockets & Postgres for multiplayer Japa chanting rooms with role-based controls',
      'Serverless Panchang calculation engine powered by Supabase Edge Functions with dynamic GPS computation',
      'Multi-year offline fallback SQLite/JSON databases for offline calculation resilience',
      'Dual-API fault-tolerant fallback engine guaranteeing 99.99% scripture availability',
      'Custom Expo Config Plugins (Node.js AST scripting) patching compile-time Android native files',
      'Hybrid FCM + Expo Notifications token synchronization system',
    ],
    stack: [
      'React Native 0.81',
      'Expo 54',
      'Redux Toolkit',
      'Supabase (Postgres/Realtime/Edge Functions)',
      'Reanimated v4',
      'Firebase FCM',
      'Razorpay',
      'i18next',
    ],
    icon: SparklesIcon,
    accent: 'amber',
    preview: {
      icon: upasanaIcon,
      storeTitle: 'Upasana - Find Inner Peace',
      tagline: 'Your daily companion for Ekadashi tracking, Panchang wisdom & multiplayer Japa meditation.',
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
]

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  summary?: string
  points: string[]
  techHighlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Excelsoft Technologies Pvt Ltd',
    role: 'Software Engineer',
    period: 'Oct 2023 – Present',
    location: 'Mysuru, Karnataka, India',
    summary:
      'Leading mobile development efforts for large enterprise client applications, owning the full SDLC, architecting core modules, and establishing native build & CI/CD standards.',
    points: [
      'Own the full software development lifecycle (SDLC) for cross-platform React Native applications, translating complex business requirements into technical specifications and architecting high-performance apps for iOS and Android using TypeScript and JavaScript (ES6+).',
      'Engineered enterprise-grade features including SSO (OAuth 2.0/SAML), deep linking, and a live exam module for large organizational client groups; hardened sensitive user flows with encrypted storage (Keychain, EncryptedSharedPreferences).',
      'Integrated data layers using GraphQL (Apollo Client) and RESTful APIs (Axios); managed local and global application state with Redux Toolkit and React Context API.',
      'Built automated CI/CD pipelines using Jenkins and GitHub Actions, streamlining automated testing, builds, code signing, and deployments to the Apple App Store (App Store Connect/TestFlight) and Google Play Store.',
      'Diagnosed and resolved complex platform-specific build and linking issues in Xcode (CocoaPods, Swift, Objective-C) and Android Studio (Gradle, Java, Kotlin), demonstrating expertise beyond the JavaScript layer.',
      'Led cross-functional squads of UI/UX designers, backend engineers, and QA testers as technical lead — orchestrating sprint workflows in Jira, conducting code reviews, and establishing engineering standards.',
      'Optimized app performance using React Native Debugger, Flipper, and React Reanimated, consistently delivering smooth 60 FPS user interfaces and secure, user-centric mobile applications.',
    ],
    techHighlights: [
      'React Native',
      'TypeScript',
      'GraphQL (Apollo)',
      'Redux Toolkit',
      'SSO (OAuth/SAML)',
      'Jenkins CI/CD',
      'GitHub Actions',
      'Gradle / CMake',
      'Xcode & CocoaPods',
      'Keychain Security',
      '60 FPS Reanimated',
    ],
  },
  {
    company: 'Mufeed Products and Services Pvt Ltd',
    role: 'React Native Developer',
    period: 'Dec 2022 – Oct 2023',
    location: 'Bidar, Karnataka, India',
    summary:
      'Architected and delivered full-featured SaaS mobile platform from ground up, implementing real-time cataloging, payment processing, FCM push notification engines, and multi-tenant cloud backends.',
    points: [
      'Architected, engineered, and launched a full-featured SaaS e-commerce mobile platform from scratch using React Native and Firebase (Authentication, Firestore, Cloud Functions), delivering a high-availability solution deployed to both the Apple App Store and Google Play Store.',
      'Designed and implemented core product features including real-time product search and dynamic filtering, an intuitive shopping cart and checkout system, order tracking, a personalized user profile dashboard, and Firebase Cloud Messaging (FCM) for automated push notifications on order updates and promotions.',
      'Integrated complex RESTful APIs and third-party services for critical platform workflows, including secure payment processing with Razorpay and inventory synchronization, while managing application state with Redux Toolkit for a seamless, reliable user experience.',
      'Implemented enterprise-grade security protocols, optimized application load times, and resolved native platform issues using Xcode and Android Studio to ensure peak stability and performance.',
      'Collaborated within an Agile framework using Git, Bitbucket, Jira, and CI/CD pipelines (Jenkins, GitHub Actions); conducted thorough code reviews, established robust testing standards, and continuously shipped scalable feature enhancements for a multi-tenant SaaS environment.',
    ],
    techHighlights: [
      'React Native',
      'Firebase Firestore & Functions',
      'FCM Push Notifications',
      'Razorpay Payments',
      'Redux Toolkit',
      'REST APIs',
      'Android Studio & Xcode',
      'Bitrise / Jenkins',
      'Multi-tenant SaaS',
    ],
  },
]

export type EducationItem = {
  degree: string
  institution: string
  location: string
  period: string
  description: string
  highlights: string[]
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Doddappa Appa College of BCA',
    location: 'Basavakalyan, Karnataka, India',
    period: 'Jun 2019 – Aug 2022',
    description:
      'Graduated with a strong foundation in computer science, software engineering principles, data structures, algorithms, object-oriented design, web application development, and database management systems.',
    highlights: [
      'Core focus on Computer Networks, Data Structures, OOP (Java/C++), and Web Development',
      'Built foundational academic projects in mobile application design and web database management',
    ],
  },
]

export const stats = [
  { value: '4+', label: 'Years shipping mobile' },
  { value: '7+', label: 'Production apps live on stores' },
  { value: '60 FPS', label: 'Fluid UI performance' },
  { value: '100%', label: 'Native & CI/CD mastery' },
]

