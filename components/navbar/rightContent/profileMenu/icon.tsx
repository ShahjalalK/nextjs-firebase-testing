import React from 'react'
import {BsCoin, BsChatDots, BsArrowUpRightCircle} from 'react-icons/bs'
import {FiVideo} from 'react-icons/fi'
import {RiNotificationLine} from 'react-icons/ri'
import {BsPlusLg} from 'react-icons/bs'

type Props = {}

const Icon = (props: Props) => {
  return (
    <div className="flex items-center space-x-1 md:space-x-2">
        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200 hidden md:inline-flex">
        <BsArrowUpRightCircle />
        </div>

        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200 hidden md:inline-flex">
        <BsCoin />
        </div>

        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200 hidden md:inline-flex">
        <FiVideo />
        </div>

        <div className="w-[2px] h-full bg-gray-300 text-transparent hidden md:inline-flex">.</div>

        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200">
        <BsChatDots />
        </div>

        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200">
        <RiNotificationLine />
        </div>

        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200 hidden md:inline-flex">
        <BsPlusLg />
        </div>
        
    </div>
  )
}

export default Icon