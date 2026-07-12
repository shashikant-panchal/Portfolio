/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Rich deep slate base
        base: {
          950: '#050608',
          900: '#0a0c10',
          800: '#0f131a',
          700: '#161b24',
          600: '#1e2430',
        },
        // Neon cyan primary accent
        neon: {
          DEFAULT: '#22d3ee',
          soft: '#67e8f9',
          deep: '#0891b2',
        },
        // Dark amber secondary accent
        amber: {
          glow: '#f59e0b',
          soft: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, #050608 90%), repeating-linear-gradient(0deg, rgba(34,211,238,0.05) 0 1px, transparent 1px 64px), repeating-linear-gradient(90deg, rgba(34,211,238,0.05) 0 1px, transparent 1px 64px)',
        'radial-glow':
          'radial-gradient(60% 60% at 50% 40%, rgba(34,211,238,0.14), transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(34,211,238,0.45)',
        'glow-amber': '0 0 40px -8px rgba(245,158,11,0.4)',
        card: '0 20px 60px -20px rgba(0,0,0,0.7)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
      },
    },
  },
  plugins: [],
}
