import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href="/" className="flex items-center gap-x-1">
        <Image src="/reddit.svg" alt="reddit" width={35} height={35} />
        <Image src="/reddit-text.svg" alt="reddit" width={60} height={60} />
    </Link>
  )
}

export default Logo