/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    './components/navbar.tsx',   
    './components/loginMenu.tsx',   
    './components/googleProvider.tsx',   
    './components/pageNotFound.tsx',
    './components/userInfo.tsx',
    './components/post.tsx',
    './components/editProfile.tsx',

    './pages/index.tsx',
    './pages/[pid].tsx',
    
    './modal/authModal.tsx',

    
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
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
