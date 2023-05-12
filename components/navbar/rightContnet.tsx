import React from 'react'
import AuthModal from '../modal/authModal'
import { useSetRecoilState } from 'recoil'
import { AuthModalState } from '@/atoms/authModalAtoms'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebaseConfig';
import Icons from './icons';
import UserMenu from './userMenu';

type Props = {}

const RightContnet = (props: Props) => {
    const setModalState = useSetRecoilState(AuthModalState)
    const modalHandler = () => {
        setModalState((prev) => ({
            ...prev,
            open : true,
            view : "login"
        }))
    }
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
   
  return (
    <div className="flex items-center space-x-5">
        {user ? <Icons />: <button type="button" onClick={modalHandler} className="text-white bg-[#ff4500] hover:bg-[#ff4400d3] focus:ring-4 focus:ring-[#fd8154] font-bold rounded-full text-lg px-8 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hidden sm:inline-flex">Log In</button>}
        <AuthModal />
        <UserMenu user={user} />
    </div>

  )
}

export default RightContnet