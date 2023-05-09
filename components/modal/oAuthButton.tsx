import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import  {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import {auth} from '@/firebase/clientApp'

type Props = {}

const OAuthButton = (props: Props) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(auth)
  return (
    <div className="flex flex-col space-y-2 w-full">
      <button onClick={() => signInWithGoogle()} className="px-7 w-full py-2 rounded-sm flex items-center border justify-center font-medium"> <FcGoogle className="text-2xl mr-2" /> Continew With Google</button>
    <button className="px-7 w-full py-2 rounded-sm flex items-center border justify-center font-medium"> Same Other Provider</button>
    {error && <p>{error.message}</p>}
    </div>
  )
}

export default OAuthButton