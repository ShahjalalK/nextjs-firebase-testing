import { authModalState } from '@/recoil/authModalAtom'
import { Button, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import GoogleProvider from './googleProvider'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebaseConfig'

type Props = {}

const Login = (props: Props) => {   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const setModalState = useSetRecoilState(authModalState)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const submitHandler = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const success = await signInWithEmailAndPassword(email, password)
        if(success){
          setEmail("")  
          setPassword("")
          setModalState((prev) => ({
            ...prev,
            open : false
          }))
        }
    }

  return (    
   <form onSubmit={submitHandler} className="flex flex-col gap-4">
    <GoogleProvider />
     <TextInput
      id="email"
      placeholder="name@flowbite.com"
      required
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <TextInput
        id="password"
      placeholder="Password"
      required
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    {error && <p className="text-red-600">{error.message}</p>}

    <p className="text-sm">Forgot your <span className="text-blue-600 cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "resetPassword"}))}>password</span>?</p>
    <Button type='submit'>{loading ? <Spinner /> : "Submit"}</Button>

    <p className="text-sm">Already a redditor? <span className="text-blue-700 cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "signup"}))}>Sign Up</span></p>
   </form>
  )
}

export default Login