import { AuthModalState } from '@/atoms/authModalAtoms'
import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import Login from './login'
import Link from 'next/link'
import Signup from './signup'
import ProviderButton from './providerButton'
import ResetPassword from './resetPassword'
import ResetTitle from './resetTitle'

type Props = {}

const AuthModal = (props: Props) => {
    const [modalState, setModalState] = useRecoilState(AuthModalState)
    const modalHandler = () => {
        setModalState((prev) => ({
            ...prev,
            open : false
        }))
    }
  return (
    <>  
  <Modal
    show={modalState.open}
    onClose={modalHandler}
    size="md"
   
  >
    <Modal.Header className="border-none">
    <span className="text-xl uppercase font-medium text-center">{modalState.view === 'login' && "Log in"}
    {modalState.view === 'signup' && "Signup"}
    {modalState.view === 'resetPassword' && <ResetTitle />}
    </span>    
    </Modal.Header>
    {modalState.view === 'login' || modalState.view === 'signup' ? (
      <>
       <Modal.Body> 
    <ProviderButton />
    <div className="flex items-center justify-center my-3 font-bold text-gray-600 text-sm text-center">OR</div>
        {modalState.view === 'login' && <Login />}
        {modalState.view === 'signup' && <Signup />}
    </Modal.Body>

    
      </>
    ) : (
      <Modal.Body>
        <ResetPassword />
      </Modal.Body>
     
    )}
   
   <Modal.Footer className="border-none">
        {modalState.view === 'login' && <p>New to Reddit? <span className="text-gray-400">|</span> <button className="text-blue-700 font-medium" onClick={() => {
            setModalState((prev) => ({
                ...prev,
                view : 'signup'
            }))
        }}>Signup</button></p>}
        {modalState.view === 'signup' && <p>Already a redditor? <span className="text-gray-400">|</span> <button className="text-blue-700 font-medium"  onClick={() => {
            setModalState((prev) => ({
                ...prev,
                view : 'login'
            }))
        }}>Log In</button></p>}
        {modalState.view === "resetPassword" && <p className=" text-blue-700 uppercase"><button className="uppercase text-sm" onClick={() => {
           setModalState((prev) => ({
            ...prev,
            view : 'login'
        }))
        }}>Log IN</button> . <button className="uppercase text-sm" onClick={() => {
          setModalState((prev) => ({
            ...prev,
            view : "signup"
        }))
        }}>SIGN UP</button></p>}
    </Modal.Footer>
  </Modal>
</>
  )
}

export default AuthModal