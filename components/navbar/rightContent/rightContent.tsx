import React from 'react'
import ProfileMenu from './profileMenu/profileMenu'
import LoginMenu from './loginMenu/loginMenu'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebaseConfig'

type Props = {}

const RightContent = (props: Props) => {
  const [user, loading, error] = useAuthState(auth); 
  return (
    <div className="flex">
      {user ? <ProfileMenu /> :  <LoginMenu />}   
    </div>
  )
}

export default RightContent