import { Avatar, Dropdown, Spinner } from 'flowbite-react'
import React from 'react'
import {GiCloverSpiked} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineLogout} from 'react-icons/hi'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebaseConfig'

type Props = {}

const UserMenu = (props: Props) => {
  const [signOut, loading, error] = useSignOut(auth);
  const [user] = useAuthState(auth);
  return (
    <div>
        <Dropdown label={
            <div className="flex items-center space-x-2">
                 <Avatar size="sm" className="filter grayscale w-7 md:w-8 object-contain scale-95 md:scale-100" img="/logo.png" />
                 <div className="hidden md:block text-sm">
                    <p className="font-medium">{user?.displayName || user?.email?.split("@")[0]}</p>
                    <p className="text-gray-400 flex items-center font-medium"> <GiCloverSpiked className="text-reddit-red mr-1" /> 1 karma</p>

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
   {loading ? <Spinner /> : "Sign Out"}
  </Dropdown.Item>
  
  
</Dropdown>
    </div>
  )
}

export default UserMenu