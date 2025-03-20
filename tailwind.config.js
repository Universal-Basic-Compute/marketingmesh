/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#f8f8f8',
        primary: {
          DEFAULT: '#3dd5c8',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#e94e87',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#f5a76c',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#1a2234',
          foreground: '#a0aec0',
        },
        card: {
          DEFAULT: '#111111',
          foreground: '#f8f8f8',
        },
        border: 'rgba(255, 255, 255, 0.15)',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f8f8f8',
            a: {
              color: '#3dd5c8',
              '&:hover': {
                color: 'rgba(61, 213, 200, 0.8)',
              },
            },
            h1: {
              color: '#f8f8f8',
            },
            h2: {
              color: '#f8f8f8',
            },
            h3: {
              color: '#f8f8f8',
            },
            h4: {
              color: '#f8f8f8',
            },
            strong: {
              color: '#f8f8f8',
            },
            code: {
              color: '#f8f8f8',
            },
            blockquote: {
              color: 'rgba(248, 248, 248, 0.8)',
              borderLeftColor: 'rgba(61, 213, 200, 0.2)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
