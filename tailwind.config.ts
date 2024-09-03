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
    
        '25': '#fcfcfd',
        '50': '#f4f7fa',
        '100': '#e5ebf4',
        '200': '#d2deeb',
        '300': '#b3c8dd',
        '400': '#8eabcc',
        '500': '#7391be',
        '600': '#607bb0',
        '700': '#53689d',
        '800': '#495884',
        '900': '#3e4a6a',
        '950': '#293042',
    
    },
    
    
    }
    
  },
  plugins: [],
 

}

