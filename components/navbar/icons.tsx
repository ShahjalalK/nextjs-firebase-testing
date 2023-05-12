import React from 'react'
import {BsArrowUpRightCircle, BsFilterCircle, BsChatDots, BsPlusLg} from 'react-icons/bs'
import {FiVideo} from 'react-icons/fi'
import {RiNotification3Line} from 'react-icons/ri'



type Props = {}

const Icons = (props: Props) => {
  return (
    <div className="flex items-center space-x-1 md:space-x-3">
       <div className=" hidden md:inline-flex hover:bg-gray-200 p-1 cursor-pointer">
         <BsArrowUpRightCircle className="text-2xl text-gray-600" />  
        </div>      
        <div className=" hidden md:inline-flex hover:bg-gray-200 p-1 cursor-pointer">
        <BsFilterCircle className="text-2xl text-gray-600" />
        </div>
        <div className=" hidden md:inline-flex hover:bg-gray-200 p-1 cursor-pointer">
        <FiVideo className="text-2xl text-gray-600" />
        </div>
        <div className="w-[2px] h-full bg-gray-100 hidden md:inline-flex text-transparent">.</div>
        <>
        <div className="hover:bg-gray-200 p-1 cursor-pointer">
        <BsChatDots className="text-2xl text-gray-600" />
        </div>
        <div className="hover:bg-gray-200 p-1 cursor-pointer">
        <RiNotification3Line className="text-2xl text-gray-600" />
        </div>
        <div className="hover:bg-gray-200 p-1 cursor-pointer">
        <BsPlusLg className="text-2xl text-gray-600" />
        </div>
      </>
    </div>
  )
}

export default Icons