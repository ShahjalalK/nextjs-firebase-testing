import { authModalState } from '@/atoms/authModalAtom'
import React from 'react'
import { useSetRecoilState } from 'recoil'

type Props = {}

const AuthButton = (props: Props) => {
    const setAuthModalState = useSetRecoilState(authModalState)
  return (
    <>
        <button type="button" className="border border-blue-700 text-blue-700 text-lg font-medium px-7 py-1 rounded-full " onClick={() => setAuthModalState({open : true, view : "login"})}>Log In</button>
        <button type="button" className="border bg-blue-700 text-white font-semibold text-lg px-7 py-1 rounded-full" onClick={() => setAuthModalState({open : true, view : "signup"})}>Sign Up</button>
    </>
  )
}

export default AuthButton