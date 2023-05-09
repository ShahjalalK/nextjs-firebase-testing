import Image from 'next/image'
import React from 'react'
import SearchInput from './searchInput'
import RightContent from './rightContent'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex flex-grow bg-white h-[44px] py-8 items-center">
      <div className="flex flex-grow md:flex-grow-0 items-center mx-1 md:mx-6">
        <Image src="/logo.png" alt="raddit" width={35} height={35} className="rounded-full" />
        <h3 className="hidden md:inline-flex text-2xl font-black">Reddit</h3>
      </div>
      <SearchInput />
      <RightContent />
    </div>
  )
}

export default Navbar