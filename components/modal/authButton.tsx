import React, { useEffect } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import Link from 'next/link'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth, fireStore } from '@/firebase/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { useSetRecoilState } from 'recoil'
import { useAuthModalState } from '@/atoms/useAuthModalState'

type Props = {}

type User = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
  phoneNumber: string | null;
};

const AuthButton = (props: Props) => {
  const [signInWithGoogle, userCred, loading, error] = useSignInWithGoogle(auth);
  const setModalState = useSetRecoilState(useAuthModalState)
 

  const  googleHandler = async () => {
    const res = await signInWithGoogle()
    if (res) {
      setModalState((prev) => ({
        ...prev,
        open: false,
      }));
    }
  }

  const createUserDocument = async (user : User) => {
    const userDocRef = doc(fireStore, "users", user.uid)
    await setDoc(userDocRef, user) 
  }
  
  useEffect(() => {
    if(userCred){
      createUserDocument({
        displayName: userCred.user.displayName,
        email: userCred.user.email,
        photoURL: userCred.user.photoURL,
        uid: userCred.user.uid,
        phoneNumber: userCred.user.phoneNumber,
      });
    }
  }, [userCred])



  return (
    <div className="flex flex-col space-y-2">
        <button onClick={googleHandler} className="flex items-center w-full p-2 rounded-full border hover:bg-blue-50/75 hover:shadow  "><FcGoogle className="text-2xl" /> <span className=" flex-grow justify-center text-base ">Continue with Google</span></button>

        <Link href="https://www.fiverr.com/shahjalalk" target='_blank' className="flex items-center w-full p-2 rounded-full border hover:bg-blue-50/75 hover:shadow "><AiOutlineDoubleRight className="text-2xl" /> <span className=" flex-grow justify-center text-base text-center ">Continue with Other</span></Link>
    </div>
  )
}

export default AuthButton