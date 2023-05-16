
import AuthModal from '@/components/modal/authModal'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const Home = (props: Props) => {

  return (
   <div>
    <AuthModal />
   </div>
  )
}

export default Home