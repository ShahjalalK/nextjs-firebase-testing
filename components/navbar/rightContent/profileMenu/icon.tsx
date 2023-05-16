import React from 'react'
import {BsCoin, BsChatDots, BsArrowUpRightCircle} from 'react-icons/bs'
import {FiVideo} from 'react-icons/fi'
import {RiNotificationLine} from 'react-icons/ri'
import {BsPlusLg} from 'react-icons/bs'

type Props = {}

const Icon = (props: Props) => {
  return (
    <div className="flex items-center space-x-2">
        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200">
        <BsArrowUpRightCircle />
        </div>

        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200">
        <BsCoin />
        </div>

        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200">
        <FiVideo />
        </div>

        <div className="w-[2px] h-full bg-gray-300 text-transparent">.</div>

        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200">
        <BsChatDots />
        </div>

        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200">
        <RiNotificationLine />
        </div>

        <div className="text-2xl text-gray-600 cursor-pointer p-1 hover:bg-gray-200">
        <BsPlusLg />
        </div>
        
    </div>
  )
}

export default Icon