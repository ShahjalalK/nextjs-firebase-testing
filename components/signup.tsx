import { authModalState } from '@/recoil/authModalAtom'
import { Button, Spinner, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import GoogleProvider from './googleProvider'
import {useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification} from 'react-firebase-hooks/auth'
import { auth, fireStore } from '@/firebase/firebaseConfig'
import { toast } from 'react-toastify'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'

type Props = {}

type User = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
  phoneNumber: string | null;
};

const Signup = (props: Props) => {
  const [userInfo] = useAuthState(auth)
  console.log("userInfo", userInfo)
   
      const [
  createUserWithEmailAndPassword, userCred, loading, userError
] = useCreateUserWithEmailAndPassword(auth);

    const setModalState = useSetRecoilState(authModalState)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [loader, SetLader] = useState<boolean>(false)
   

    const submitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(password !== confirmPassword){
            setError("Password Don't match!")
            return
        }

        SetLader(true)
       
       const res = await createUserWithEmailAndPassword(email, password)
       if(res){
        setModalState((prev) => ({
          ...prev,
          open : false
        }))
        setEmail("")
        setPassword("")
        setConfirmPassword("")
       }

        SetLader(false)
       
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

<TextInput
      id="confirmPassword"
      placeholder="Confirm Password"
      required
      type="password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />

   <div className="text-red-600 text-sm">{error || userError && <p>{error || userError.message}</p> }</div>
    <Button type='submit'>{loading ? <Spinner /> : "Submit"}</Button>

    <p className="text-sm">Already a redditor? <span className="text-blue-700 cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "login"}))}>Log In</span></p>
   </form>
  )
}

export default Signup