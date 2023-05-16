import { useAuthModalState } from '@/atoms/useAuthModalState'
import { Button, Modal } from 'flowbite-react'
import React from 'react'
import { useRecoilState } from 'recoil'
import Signup from './signup'
import Login from './login'
import ResetPassword from './resetPassword'

type Props = {}

const AuthModal = (props: Props) => {  
    const [modalState, setModalState] = useRecoilState(useAuthModalState)
    const modalHandler = () => {
       setModalState((prev) => ({
            ...prev,
            open : false
       }))
    }
  return (
    <Modal
      dismissible={true}
      show={modalState.open}
      onClose={modalHandler}
      size="md"
    >
      <Modal.Header className="border-none">      
      </Modal.Header>
      <Modal.Body>
       {modalState.view === "signup" && <Signup />}
       {modalState.view === "login" && <Login />}
       {modalState.view === "resetPassword" && <ResetPassword />}
      </Modal.Body>
     
    </Modal>
  )
}

export default AuthModal