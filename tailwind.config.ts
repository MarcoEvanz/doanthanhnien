import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',      // Extra small devices (small phones)
        'sm': '640px',      // Small devices (phones)
        'md': '768px',      // Medium devices (tablets)
        'lg': '1024px',     // Large devices (desktops)
        'xl': '1280px',     // Extra large devices
        '2xl': '1536px',    // 2X Extra large devices
        // Custom mobile breakpoints
        'mobile-sm': '320px',     // iPhone SE, small Android phones
        'mobile-md': '375px',     // iPhone 12/13/14
        'mobile-lg': '414px',     // iPhone 12/13/14 Plus
        'mobile-xl': '428px',     // iPhone 14 Pro Max
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1.5s',
      },
    },
  },
  plugins: [],
};

export default config;