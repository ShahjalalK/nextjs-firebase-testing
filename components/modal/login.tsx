import React, { useState } from 'react'
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/firebase/clientApp'
import { FIREBASE_ERRORS } from '@/firebase/errors'

type Props = {}

const Login = (props: Props) => {
    const [loginForm, setLoginForm] = useState({
        email : "",
        password : "",
    })
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signInWithEmailAndPassword(loginForm.email, loginForm.password)
        console.log(loginForm.email, loginForm.password)
        console.log(auth)

    }
    const Onchange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }
    
  return (
    <form className="flex-grow w-full" onSubmit={onSubmit}>
 
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
   {error && <p className="text-red-500">{FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS]}</p>}
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Login Your Account
  </button>
</form>

  )
}

export default Login