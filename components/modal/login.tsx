import React, { ReactNode, useState } from 'react'
import {Label, TextInput, Button, Spinner} from 'flowbite-react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebaseConfig'
import { FIREBASE_ERRORS } from '../../firebase/errors'
import { useSetRecoilState } from 'recoil'
import { AuthModalState } from '@/atoms/authModalAtoms'


type Props = {
    
}

const Login = (props: Props) => {
  const setModalState = useSetRecoilState(AuthModalState)
  const [loginForm, setLoginForm] = useState({
    email : "",
    password : ""
  })
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useSignInWithEmailAndPassword(auth);
  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }
  const SubmitHandler = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword( loginForm.email, loginForm.password);
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={SubmitHandler}>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="name@yourmail.com"
      required={true}
      onChange={ChangeHandler}
      name="email"
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
    
      id="password1"
      type="password"
      required={true}
      onChange={ChangeHandler}
      name="password"   
    />
  </div>
  {userError && <p className=" text-red-500">{FIREBASE_ERRORS[userError.message as keyof typeof FIREBASE_ERRORS]}</p>}
  <Button type='submit' className=" !bg-[#ff4500]" >
    {loading ? <Spinner aria-label="Left-aligned spinner example" /> : "Login your account"}
  </Button>
  <p className="text-sm text-center">Forgot your password ? <button className="text-blue-700" type='button' onClick={() => {
    setModalState((prev) => ({
      ...prev,
      view : "resetPassword"
    }))
  }}>Reset</button></p>
</form>
  )
}

export default Login