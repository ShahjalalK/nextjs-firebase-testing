import React from 'react'
import Login from './login'
import Signup from './signup'
import { useRecoilValue } from 'recoil'
import { authModalState } from '@/atoms/authModalAtom'

type Props = {}

const AuthModalInputs = (props: Props) => {
  const modalState = useRecoilValue(authModalState)
  return (
    <div className="flex items-center flex-col justify-center w-full">
      {modalState.view === 'signup' && <Signup />}
      {modalState.view === 'login' &&  <Login />}
     
    </div>
  )
}

export default AuthModalInputs