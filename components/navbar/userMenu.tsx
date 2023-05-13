import { Avatar, Dropdown, Spinner } from 'flowbite-react'
import React from 'react'
import {User} from 'firebase/auth'
import { auth } from '@/firebase/firebaseConfig'
import {FiLogIn} from 'react-icons/fi'
import { useSetRecoilState } from 'recoil'
import { AuthModalState } from '@/atoms/authModalAtoms'
import { useSignOut } from 'react-firebase-hooks/auth'
import {GiCloverSpiked} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineLogout} from 'react-icons/hi'
import Image from 'next/image'


type Props = {
    user? : User | null
}

const UserMenu = ({user}: Props) => {
  const setModalState = useSetRecoilState(AuthModalState)
  const [signOut, loading, error] = useSignOut(auth);
  return (
   <>
   {user ? (
    <div className="!relative">
      
       <Dropdown
       placement='bottom'
       label ={
        <div className="flex items-center md:space-x-2 cursor-pointer">
        <Avatar size="sm" img="/logo.png" alt="reddit"  className="filter grayscale w-8" />
         <div className="hidden md:inline-flex flex-col">
          <p className="font-medium text-sm">{user.displayName || user.email?.split("@")[0]}</p>
          <div className="flex items-center space-x-1">
            <GiCloverSpiked className="text-[#ED001C]" />
          <p className="text-sm text-gray-400">1 Karma</p>
          </div>
         </div>
      </div>
       }
    
     inline={true}    
   >
    
     <Dropdown.Item icon={CgProfile}>
      <span>Profile</span>
     </Dropdown.Item>
     <Dropdown.Divider />
     <Dropdown.Item icon={HiOutlineLogout} onClick={() => signOut()}>
       {loading ? <Spinner /> : "Sign out"}
     </Dropdown.Item>
   </Dropdown>
    </div>
   ) : (
    <div className="relative">
      <Dropdown
     label={        
         <Avatar
         
         size="sm"
         
         statusPosition="bottom-right"
         
       />
     }
     inline={true}    
   >     
     <Dropdown.Item className="text-lg font-bold" onClick={() => {setModalState({open : true, view : 'login'})}}>
       <FiLogIn className="text-xl mr-2" /> Log In / Sign Up
     </Dropdown.Item>    
   </Dropdown>
    </div>
   )}
   
   </>
  
  )
}

export default UserMenu