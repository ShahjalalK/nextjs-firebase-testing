import Image from 'next/image'
import React from 'react'

type Props = {}

const ResetTitle = (props: Props) => {
   
  return (
    <div className="flex flex-col justify-start ">
        <Image src="/logo.png" alt='reddit' width={35} height={35} className="rounded-full mb-2" />
        <h1 className="self-start">Reset your password</h1>
        <p className="text-sm capitalize font-normal self-start text-left">Tell us the username and email address associated with your Reddit account, and we’ll send you an email with a link to reset your password.</p>
    </div>
  )
}

export default ResetTitle