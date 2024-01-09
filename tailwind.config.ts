import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, #84a98c 0%, #4d7c58 100%)',
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
