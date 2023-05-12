import React, { useState } from 'react'
import {Label, TextInput, Button, Spinner} from 'flowbite-react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebaseConfig';

type Props = {}

const ResetPassword = (props: Props) => {
    const [email, setEmail] = useState("")
    const [sucess, setSuccess] = useState(false)
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
      const submitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       await sendPasswordResetEmail(email)
       setSuccess(true)
      }
  return (
    <div>
        {
            sucess ?
            (
                <p className="text-center bg-gray-300 p-2 font-medium text-lg text-black/80 rounded-lg">Check Your Email :)</p>
            )
            :
            (
                <form className="flex flex-col gap-4" onSubmit={submitHandler}>
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
      placeholder="name@email.com"
      required={true}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
   
  <Button type="submit" className="uppercase !bg-[#ff4500]">
    {sending ? <Spinner aria-label="Left-aligned spinner example" /> : "RESET PASSWORD"}
  
  
  </Button>
</form>
            )
            
        }
    </div>
  )
}

export default ResetPassword