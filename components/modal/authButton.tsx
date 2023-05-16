import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import Link from 'next/link'

type Props = {}

const AuthButton = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2">
        <button className="flex items-center w-full p-2 rounded-full border hover:bg-blue-50/75 hover:shadow  "><FcGoogle className="text-2xl" /> <span className=" flex-grow justify-center text-base ">Continue with Google</span></button>

        <Link href="https://www.fiverr.com/shahjalalk" target='_blank' className="flex items-center w-full p-2 rounded-full border hover:bg-blue-50/75 hover:shadow "><AiOutlineDoubleRight className="text-2xl" /> <span className=" flex-grow justify-center text-base text-center ">Continue with Other</span></Link>
    </div>
  )
}

export default AuthButton