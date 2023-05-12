import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebaseConfig'
import { FIREBASE_ERRORS } from '@/firebase/errors'
import { useSetRecoilState } from 'recoil'
import { AuthModalState } from '@/atoms/authModalAtoms'

type Props = {}

const ProviderButton = (props: Props) => {
  const setAuthModalState = useSetRecoilState(AuthModalState)
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const signInHandler = async () => {
        let sucess = await signInWithGoogle()
        if(sucess){
          setAuthModalState((prev) => ({
            ...prev,
            open : false
          }))
        }
    }
  return (
    <div className="flex flex-col space-y-2 justify-center items-center">
    <button className="flex items-center space-x-3 border p-2 rounded-full w-full justify-center font-bold bg-gray-50 focus:bg-gray-100  hover:ring-1 focus:ring-1 transition-all duration-100" onClick={signInHandler} ><FcGoogle className=" self-start text-2xl mr-2" /> Continue with Google</button>
   {error && <p className="text-left self-start text-red-500 text-sm ml-5">{FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}</p>}
    <button className="border p-2 rounded-full w-full font-bold bg-gray-50 focus:bg-gray-100 hover:ring-1 focus:ring-1 transition-all duration-100 ">Other Provider</button>
    </div>
  )
}

export default ProviderButton