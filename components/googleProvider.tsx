import React from 'react'
import {FcGoogle} from 'react-icons/fc'

type Props = {}

const GoogleProvider = (props: Props) => {

  return (
    <button className="border my-5 flex items-center p-2 rounded-md flex-grow"><FcGoogle className="text-2xl" /> <span className="flex-grow text-center font-medium text-[#333]">Continue with Google</span></button>
  )
}

export default GoogleProvider