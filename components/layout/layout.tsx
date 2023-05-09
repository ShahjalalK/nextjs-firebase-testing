import React from 'react'
import Navbar from '../navbar/navbar'

type Props = {
    children : React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
   <>  
      <Navbar />
    <main className="font-body z-10">     
        {children}
    </main>
   </>
  )
}

export default Layout