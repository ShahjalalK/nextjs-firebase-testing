import { useAuthModalState } from '@/atoms/useAuthModalState'
import { Avatar, Dropdown } from 'flowbite-react'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import {BiLogIn} from 'react-icons/bi'

type Props = {}

const LoginMenu = (props: Props) => {
  const setAuthModal = useSetRecoilState(useAuthModalState)
  const modalHandler = () => {
    setAuthModal((prev) => ({
      ...prev,
      open : true,
      view : "login"      
    }))
  }
  return (
    <div className="flex items-center space-x-6">
      <button type="button" onClick={modalHandler} className="text-white bg-reddit-orangered hover:bg-reddit-orange focus:ring-4 focus:ring-red-300 font-medium rounded-full px-8 py-1 text-base  dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Log In</button>
      <Dropdown
  label={
    <Avatar size="sm" />
  }
  dismissOnClick={false}
  inline={true}
  
>
  <Dropdown.Item icon={BiLogIn} className="font-bold" onClick={modalHandler}>
    Log In / Sign Up 
  </Dropdown.Item>
 
</Dropdown>
    </div>
  )
}

export default LoginMenu