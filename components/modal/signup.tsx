import React, { useState } from 'react'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {FIREBASE_ERRORS} from '@/firebase/errors'

import {auth} from '@/firebase/clientApp'
import { Spinner } from 'flowbite-react'

type Props = {}

const Signup = (props: Props) => {
  const [signupForm, setSignupForm] = useState({
    email : "",
    password : "",
    confirmPassword : ""
  })
  const [error, setError] = useState("Password Don't Match")
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const Onchange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((prev)  => ({
      ...prev,
      [event.target.name] : event.target.value
    }))
  }

  const submitHandler = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(error) setError("")
    if(signupForm.password !== signupForm.confirmPassword){
      setError("Password Don't Match")
      return;
    }
    
    createUserWithEmailAndPassword(signupForm.email, signupForm.password)
    
  }
  return (
    <form className="flex-grow w-full" onSubmit={submitHandler}>
      
  <div className="mb-6">
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-red-white"
    >
      Email address
    </label>
    <input
    onChange={Onchange}
      type="email"
      name='email'
      id="email"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-grow"
      placeholder="john.doe@company.com"
      required
    />
  </div>
  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Password
    </label>
    <input
    onChange={Onchange}
      type="password"
      id="password"
      name='password'
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="•••••••••"
      required
    />
  </div>
  <div className="mb-6">
    <label
      htmlFor="password2"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Confirm Password
    </label>
    <input
    onChange={Onchange}
      type="password"
      id="password2"
      name='confirmPassword'
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="•••••••••"
      required
    />
  </div>
  {(error || userError )&& (<p className="text-red-500">{error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}</p>)}
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {loading ?  <Spinner
    color="purple"
    aria-label="Purple spinner example"
  /> : "Signup New Account"}
    
  </button>
</form>
  )
}

export default Signup