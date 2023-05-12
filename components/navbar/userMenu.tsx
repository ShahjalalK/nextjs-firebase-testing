import { Avatar, Dropdown } from 'flowbite-react'
import React from 'react'
import {User, signOut} from 'firebase/auth'
import { auth } from '@/firebase/firebaseConfig'
import {FiLogIn} from 'react-icons/fi'
import { useSetRecoilState } from 'recoil'
import { AuthModalState } from '@/atoms/authModalAtoms'

type Props = {
    user? : User | null
}

const UserMenu = ({user}: Props) => {
  const setModalState = useSetRecoilState(AuthModalState)
  return (
   <>
   {user ? (
    <div className="relative">
       <Dropdown
     label={        
         <Avatar
         
         size="sm"
         status="online"
         statusPosition="bottom-right"
         
       />
     }
     inline={true}    
   >
     <Dropdown.Header>
       <span className="block text-sm">
         {user?.displayName}
       </span>
       <span className="block truncate text-sm font-medium">
         {user?.email}
       </span>
     </Dropdown.Header>
     <Dropdown.Item>
       Dashboard
     </Dropdown.Item>
     <Dropdown.Item>
       Settings
     </Dropdown.Item>
     <Dropdown.Item>
       Earnings
     </Dropdown.Item>
     <Dropdown.Divider />
     <Dropdown.Item onClick={() => signOut(auth)}>
       Sign out
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