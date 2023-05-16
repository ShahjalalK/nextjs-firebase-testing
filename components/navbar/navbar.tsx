import React from 'react'
import Logo from './logo/logo'
import HomeMenu from './homeMenu/homeMenu'

import RightContent from './rightContent/rightContent'
import SearchInput from './serchInput/searchInput'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebaseConfig'

type Props = {}

const Navbar = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className={`bg-white py-1 flex items-center ${user ? "space-x-6" : "space-x-3 md:space-x-32"} px-6 flex-grow w-full`}>
        <div>
            <Logo />             
        </div>
        {user && <div>
          <HomeMenu />  
        </div>}
        <div className="flex-grow">
            <SearchInput />
        </div>
        <div>
            <RightContent />
        </div>
    </header>
  )
}

export default Navbar