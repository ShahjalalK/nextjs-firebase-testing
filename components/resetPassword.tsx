import { authModalState } from '@/recoil/authModalAtom'
import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import { useSetRecoilState } from 'recoil'

type Props = {}

const ResetPassword = (props: Props) => {
    const setModalState = useSetRecoilState(authModalState)
  return (
    <form className="flex flex-col gap-4">
    <TextInput
     id="email"
     placeholder="name@flowbite.com"
     required
     type="email"
   />
   
   <Button type='submit'>Submit</Button>
   <p className="text-sm"><span className="text-blue-700 cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "login"}))}>Log In</span> . <span className="text-blue-700 cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "signup"}))}>Sign Up</span></p>
  </form>
  )
}

export default ResetPassword