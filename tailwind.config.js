/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './pages/_app.tsx',

    './components/navbar/navbar.tsx',
    './components/navbar/search.tsx',
    './components/navbar/rightContnet.tsx',
    './components/navbar/icons.tsx',
    './components/navbar/userMenu.tsx',

    './components/modal/authModal.tsx',
    './components/modal/login.tsx',
    './components/modal/signup.tsx',
    './components/modal/signup.tsx',
    './components/modal/resetPassword.tsx',
    './components/modal/resetTitle.tsx',
    
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
