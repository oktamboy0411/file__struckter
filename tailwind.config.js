/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#4C6FFF',
          1: '#3059EA',
          2: '#E1E8FF',
          3: '#EBEDF4',
          4: '#EBF4FA',
          5: '#EDF2F7',
          6: '#F7FAFC',
          7: '#F4F6FF',
          8: '#A596FF',
          9: '#CBECF8',
          10: '#01749B',
          11: '#DAE8F1',
        },
        sky: {
          DEFAULT: '#26B5F3',
        },
        red: {
          DEFAULT: '#EE0707',
          1: '#F31616',
          2: '#B7140A',
          '2-hovered': '#c5433b',
          3: '#f16063',
          4: '#ffe6e4',
        },
        black: {
          DEFAULT: '#27272E',
          1: '#1F2D3D',
          2: '#16192C',
          3: '#425466',
          4: '#A0AEC0',
          5: '#718096',
          6: '#8492A6',
          7: '#FAFAFB',
          8: '#E6E9F9',
          9: '#D8E2EC',
          10: '#B3C0CC',
          11: '#DCE0F1',
          12: '#D2DAE4',
        },
        green: {
          DEFAULT: '#00D622',
          1: '#0ACB12',
          2: '#66CB9F',
          3: '#DEFFEE',
          4: '#54A552',
          5: '#0AB711',
          '5-hovered': '#3bc541',
          6: '#1ACA0B',
          7: '#09C673',
          8: '#1CCA00',
        },
        yellow: {
          DEFAULT: '#F88C0E',
          1: '#FF951A',
          2: '#DEA001',
          '2-hovered': '#e5b334',
        },
        orange: {
          DEFAULT: '#E5A506',
        },
        purple: {
          DEFAULT: '#970ADA',
          hovered: '#ac3be1',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      fontSize: {
        xxs: '8px',
        xs: '10px',
        sm: '12px',
        base: '14px',
        'base-lg': '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        label: '12.8px',
      },
      lineHeight: {
        1: '1em',
        4: '16px',
        5: '20px',
        6: '24px',
        12: '48px',
      },
      boxShadow: {
        box: '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
        border: '0px -1px 0px 0px #EDF2F7 inset',
      },
      transitionDuration: {
        default: '150ms',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {height: 0},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: 0},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      padding: {
        '7px': '7px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
