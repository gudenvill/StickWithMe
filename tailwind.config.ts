import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // Example of an extra small screen breakpoint
        'sm': '640px', // Default Tailwind breakpoint
        'md': '768px', // Default Tailwind breakpoint
        'lg': '1024px', // Default Tailwind breakpoint
        'xl': '1280px', // Default Tailwind breakpoint
        '2xl': '1536px', // Default Tailwind breakpoint
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
