import EditModal from '@/modal/editModal'
import { EditModalState } from '@/recoil/editModalAtom'
import { UserType, userInfo } from '@/recoil/userAtom'
import Image from 'next/image'
import React from 'react'

import {FiSettings} from 'react-icons/fi'
import { useSetRecoilState } from 'recoil'

type Props = {
    profileData : UserType
}

const UserInfo = ({profileData}: Props) => {
    const setEditModal = useSetRecoilState(EditModalState)
    const setUserAdd = useSetRecoilState(userInfo) 
    const settingHandler = () => {
        setUserAdd((prev) => ({
          ...prev,
          email : profileData.email,
          displayName : profileData.displayName,
          uid : profileData.uid,
          photoURL : profileData.photoURL         
        }) )
      setEditModal((prev) => ({
        ...prev,
        open : true
       }))
    }

  return (
    <div>
        <div>
        <Image src="/bg.jpg" alt='bg' width={380} height={380} />
        </div>
        <div className="px-3 flex justify-between items-center">
           <div className="flex flex-col">
           <div>
           <div className="rounded -mt-10 inline-flex overflow-hidden">
           <Image className="bg-white shadow" src={profileData.photoURL || "/me.jpg"} alt='me' width={80} height={80} />           
           </div>
           </div>
           <p className="text-sm">u/{profileData.displayName || profileData.email?.split("@")[0]}</p>
           </div>
           <span className="cursor-pointer" onClick={settingHandler }><FiSettings className="text-2xl text-blue-600" /></span>
           
        </div>
    </div>
  )
}

export default UserInfo