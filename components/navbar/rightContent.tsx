import React from 'react'
import AuthButton from './authButton'
import AuthModal from '../modal/authModal'

type Props = {}

const RightContent = (props: Props) => {
  return (
    <div className="flex items-center space-x-3 mx-1 md:mx-6">
        <AuthModal />
        <AuthButton />
    </div>
  )
}

export default RightContent