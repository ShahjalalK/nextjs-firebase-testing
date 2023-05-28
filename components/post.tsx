import { UserType } from '@/recoil/userAtom'
import Image from 'next/image'
import React from 'react'

type Props = {
    profileData : UserType
}

const Post = ({profileData}: Props) => {
  return (
    <div className="rounded">
        <div>
            <Image src="/bg.jpg" alt='bg' width={350} height={350} />
        </div>
        <div></div>
    </div>

  )
}

export default Post