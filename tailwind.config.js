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
        darkBlack: '#1c1c1a',
        lightBlack: '#3a3b3f',
        customBlue: '#1F4AD2',
        darkText: '#74757a',
        whiteText: '#edeff0',
      }, 
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
