import React, { useState } from "react";
import HeaderModal from "./headerModal";
import AuthButton from "./authButton";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Spinner } from "flowbite-react";
import { useSetRecoilState } from "recoil";
import { useAuthModalState } from "@/atoms/useAuthModalState";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig";

type Props = {};

const ResetPassword = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );
  const setModalState = useSetRecoilState(useAuthModalState)
  const [email, setEmail] = useState("")
  const [sucess, setSucess] = useState(false)
  const SubmitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await sendPasswordResetEmail(email)
    if(res){
      setSucess(true)
    }
  }
  return (
    <div className="p-5">
      <div>
        <HeaderModal title="Reset your password" para="Tell us the username and email address associated with your Reddit account, and we’ll send you an email with a link to reset your password." />
      </div>
      
      <form className="flex flex-col space-y-5 mt-5" onSubmit={SubmitHandler}>
        {sucess ? ( <div className="p-2 flex-grow bg-gray-400 rounded-lg font-medium text-center">
          Check Your Email :{`)`}
          </div>) : (
              <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdEmail className="text-xl text-gray-500" />
              </div>
              <input
                type="text"
                id="email-address-icon"
                value={email}
                required
                onChange={(e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>       

          )}
            
          <div className="text-red-600 text-sm">
           {error &&  <p>{error?.message}</p>}
          </div>
         <div className=" w-full">            
         {!sucess && <button
            type="submit"
            className="text-white w-full bg-reddit-orangered hover:bg-reddit-orange focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {sending ? <Spinner /> : "Reset password"}
          </button>}
          <p className="my-5 text-sm">Don't have an email or need assistance logging in? <span className="text-blue-700 cursor-pointer">Get Help</span></p>
          <p className="text-sm  text-blue-700"><span onClick={() => setModalState((prev) => ({...prev, view : "signup"}))} className="cursor-pointer">Sign Up</span> . <span className="cursor-pointer" onClick={() => setModalState((prev) => ({...prev, view : "login"}))}>Log In</span></p>
         </div>
        </form>
    </div>
  );
};

export default ResetPassword;
