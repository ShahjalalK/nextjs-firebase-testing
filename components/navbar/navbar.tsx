import Image from 'next/image'
import React from 'react'
import Search from './search'
import RightContnet from './rightContnet'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center flex-grow py-1  fixed w-full">        
        <div className="flex items-center space-x-1 mx-2 md:mx-6 lg:mr-32">
            <Image src="/logo.png" width={35} height={35} alt='reddit' className="rounded-full" />
            <h4 className="hidden md:inline-flex text-2xl font-semibold">Reddit</h4>
        </div>
        <div className="flex-grow mx-auto">
            <Search />
        </div>
        <div className=" mx-1 md:mx-6 lg:ml-32 whitespace-nowrap">
            <RightContnet />
        </div>
    </div>
  )
}

export default Navbar