/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './components/navbar/navbar.tsx',
    './components/login.tsx',
    './components/navbar/authButton.tsx',
    './components/modal/login.tsx',
    './components/modal/signup.tsx',
    './components/modal/authModalInputs.tsx',
    './components/modal/authModal.tsx',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily : {
        body : ['Open Sans', 'sans-serif']
      },
    colors : {
      brand : {
        100 : "#f7fafc",
        900 : "#1a202c"
      },      
    }
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
