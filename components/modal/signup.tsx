import React, { ReactNode, useState } from 'react'
import {Label, TextInput, Button, Spinner} from 'flowbite-react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebaseConfig'
import { FIREBASE_ERRORS } from '@/firebase/errors'
import { useSetRecoilState } from 'recoil'
import { AuthModalState } from '@/atoms/authModalAtoms'

type Props = {
    
}




const Signup = (props: Props) => {
  const [signupForm, setSignupForm] = useState({
    email : '',
    password : '',
    confirmPassword : ''
  })
  const setAuthModalState = useSetRecoilState(AuthModalState)
  const [error, setError] = useState("")
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
      setSignupForm((prev) => ({
        ...prev,
        [e.target.name] : e.target.value
      }))
  }

  const SubmitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    if(signupForm.password !== signupForm.confirmPassword){
      setError("Password Don't Match")
      return;
    }
   
    const success = await createUserWithEmailAndPassword(signupForm.email, signupForm.password)

    if(success){
      setAuthModalState((prev) => ({
        ...prev,
        open : false
      }))

      signupForm.email = ""
      signupForm.password = ""
      signupForm.confirmPassword = ""
    }
    
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
      name='email'
      placeholder="name@yourmail.com"
      required={true}
      onChange={changeHandler}
      
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
      name='password'
      required={true}
      onChange={changeHandler}
      
          
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password2"
        value="Confirm password"
      />
    </div>
    <TextInput
    
      id="password2"
      type="password"
      name='confirmPassword'
      required={true}
      onChange={changeHandler}
      
          
    />
  </div>
  <div className="text-red-500">
   {error || userError &&  <p>{error || FIREBASE_ERRORS[userError.message as keyof typeof FIREBASE_ERRORS]}</p>}
  </div>
  <Button type='submit' className=" !bg-[#ff4500]">
   {loading ? <Spinner aria-label="Left-aligned spinner example" /> : "Create A New Account"}
  </Button>
</form>
  )
}

export default Signup