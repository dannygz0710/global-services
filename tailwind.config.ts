/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/centralPage/**/*.{js,ts,jsx,tsx,mdx}',
    './src/mainGlobal/**/*.{js,ts,jsx,tsx,mdx}',
   
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'danger': 'rgb(239 68 68)',
      'success': 'rgb(6,124,29)',
      'danger2': 'rgb(185 28 28)',
      'jordy-blue': {
    '50': '#f4f6fb',
    '100': '#e7ecf7',
    '200': '#cad6ed',
    '300': '#9cb4dd',
    '400': '#678dc9',
    '500': '#436eb4',
    '600': '#315494',
    '700': '#29457b',
    '800': '#263c66',
    '900': '#243556',
    '950': '#182239',
    },
    
    
    }
    
  },
  plugins: [],
 

}

