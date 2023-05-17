/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './pages/_app.tsx',

    './components/navbar/navbar.tsx',
    './components/navbar/logo/logo.tsx',
    './components/navbar/searchInput/searchInput.tsx',

    './components/navbar/rightContent/rightContent.tsx',
    './components/navbar/rightContent/profileMenu/icon.tsx',
    './components/navbar/rightContent/profileMenu/profileMenu.tsx',
    './components/navbar/rightContent/profileMenu/userMenu.tsx',

    './components/navbar/rightContent/loginMenu/loginMenu.tsx',

    './components/community/notFound.tsx',
    './components/community/header.tsx',


    './components/navbar/homeMenu/homeMenu.tsx',
    './components/navbar/homeMenu/community/communitiModal.tsx',
    './components/navbar/homeMenu/community/communityInput.tsx',
    './components/navbar/homeMenu/community/createCommunity.tsx',


    './components/modal/authModal.tsx',
    './components/modal/login.tsx',
    './components/modal/signup.tsx',    
    './components/modal/resetPassword.tsx',
    './components/modal/headerModal.tsx',
    './components/modal/authButton.tsx',
    
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
      reddit : {
        red : "#ED001C",
        orangered : "#FF4300",
        orange	: "#FF8700",
      }    
    }
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
