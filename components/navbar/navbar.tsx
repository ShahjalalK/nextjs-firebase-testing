import Image from 'next/image'
import React from 'react'
import Search from './search'
import RightContnet from './rightContnet'
import Directory from './directory/directory'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebaseConfig'


type Props = {}

const Navbar = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="flex items-center flex-grow py-1  fixed w-full bg-white">        
        <div className="flex items-center space-x-1 mx-2 md:mx-6">
            <Image src="/logo.png" width={35} height={35} alt='reddit' className="rounded-full" />
            <h4 className="hidden md:inline-flex text-2xl font-semibold">Reddit</h4>
        </div>
        {user && <Directory />}
        <Search />
        <div className=" mx-1 md:mx-6 whitespace-nowrap">
            <RightContnet />
        </div>
    </div>
  )
}

export default Navbar