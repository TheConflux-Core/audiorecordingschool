import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          900: '#0f172a',
          950: '#020617',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
        },
        violet: {
          500: '#8b5cf6',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-up': 'fade-up 0.6s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(34, 211, 238, 0.25)' },
        },
      },
      typography: ({ theme }: { theme: any }) => ({
        lg: {
          css: {
            '--tw-prose-body': theme('colors.slate[300]'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.slate[400]'),
            '--tw-prose-links': theme('colors.cyan[400]'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.slate[400]'),
            '--tw-prose-bullets': theme('colors.slate[500]'),
            '--tw-prose-hr': theme('colors.slate[900]'),
            '--tw-prose-quotes': theme('colors.slate[300]'),
            '--tw-prose-quote-borders': theme('colors.cyan[400]'),
            '--tw-prose-captions': theme('colors.slate[400]'),
            '--tw-prose-code': theme('colors.cyan[300]'),
            '--tw-prose-pre-code': theme('colors.slate[300]'),
            '--tw-prose-pre-bg': theme('colors.slate[900]'),
            '--tw-prose-th-borders': theme('colors.slate[500]'),
            '--tw-prose-td-borders': theme('colors.slate[900]'),
            color: theme('colors.slate[300]'),
            a: {
              color: theme('colors.cyan[400]'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.cyan[300]'),
              },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            h5: { color: theme('colors.white') },
            h6: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            blockquote: {
              borderLeftColor: theme('colors.cyan[400]'),
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(8px)',
              borderRadius: '0.5rem',
              padding: '1rem 1.5rem',
            },
            code: {
              color: theme('colors.cyan[300]'),
              backgroundColor: theme('colors.slate[900]'),
              borderRadius: '0.25rem',
              padding: '0.125rem 0.375rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: theme('colors.slate[900]'),
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
