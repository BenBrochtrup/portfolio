import type { Config } from 'tailwindcss'

function withOpacity(variableName: string): string {
  return ({ opacityValue }: { opacityValue: number | undefined }): string => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          'base': withOpacity('--color-text-base'),
          'muted': withOpacity('--color-text-muted'),
          'inverted': withOpacity('--color-text-inverted'),
        }
      },
      backgroundColor: {
        skin: {
          'fill': withOpacity('--color-fill'),
          'fill-accent': withOpacity('--color-fill-accent'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted')
        }
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, #84a98c 0%, #4d7c58 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1'},
        },
        fadeDown: {
          '0%': { transform: 'translateY(0%)', opacity: '1' },
          '100%': { transform: 'translateY(50%)', opacity: '0'},
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        },
        equalize: {
          '0%': { height: '20%' },
          '20%': { height: '32%' },
          '40%': { height: '45%' },
          '60%': { height: '75%' },
          '80%': { height: '50%' },
          '100%': { height: '20%' },
        },
        slideIn: {
          from: {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.5s',
        fadeDown: 'fadeDown 0.5s forwards',
        fadeIn: 'fadeIn 0.5s forwards',
        equalize: 'equalize 1.0s linear infinite',
        slideIn: 'slideIn 750ms ease var(--delay, 0) forwards'
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bay-leaf': {
        '50': '#f2f7f3',
        '100': '#e0ebe0',
        '200': '#c3d7c6',
        '300': '#9abba0',
        '400': '#84a98c',
        '500': '#4d7c58',
        '600': '#3a6145',
        '700': '#2e4e38',
        '800': '#263f2e',
        '900': '#203427',
        '950': '#111d15',
      },
    }
  },
  plugins: [],
}
export default config
