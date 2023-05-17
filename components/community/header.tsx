import { Community } from '@/atoms/communityAtom'
import { Button } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'
import { FaReddit } from 'react-icons/fa'

type Props = {
    communityData : Community
}

const Header = ({communityData}: Props) => {
  const joind = false
  return (
    <div className="flex flex-col w-full h-[200px]">
        <div className="bg-blue-400 w-full h-[50%] bg-[url('/reddit-banner.png')] bg-cover bg-center bg-no-repeat" />
        <div className="justify-center flex bg-white flex-grow">            
        <div className="w-[95%] max-w-[860px] flex">
           {communityData.imageURL ? (
            //  <Image src="/"  />
            <span>Photo </span>
           ) : (
            <FaReddit  className="text-7xl relative -top-3 text-blue-500 border-2 border-white rounded-full"/>
           )
           }
            <div className="p-2">
          <h4 className=" text-2xl font-bold capitalize">{communityData.id}</h4>
          <p>r/{communityData.id}</p>
        </div>
       <div className="px-5 py-2">
       <button type='button' className="px-8 py-1 rounded-full bg-blue-700 inline-flex hover:bg-blue-800 focus:border-blue-400 focus:ring-blue-400 focus:ring-2 text-white text-lg font-medium capitalize">{joind ? "Joined" : "join"}</button>
       </div>
        </div>
       
        </div>

        
        
    </div>
  )
}

export default Header