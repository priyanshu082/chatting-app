/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlack: '#272a36',
        lightBlack: '#3a3b3f',
        customBlue: '#1d91f6',
        darkText: '#8f9096',
        whiteText: '#edeff0',
      }, 
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        audiowide:['Michroma', 'sans-serif'],
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
