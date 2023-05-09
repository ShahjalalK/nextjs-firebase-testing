import { authModalState } from '@/atoms/authModalAtom'
import { Button, Modal } from 'flowbite-react'
import { useRecoilState } from 'recoil'
import AuthModalInputs from './authModalInputs'
import Link from 'next/link'
import OAuthButton from './oAuthButton'

type Props = {}

const AuthModal = (props: Props) => {
   const [modalState, setModalState] = useRecoilState(authModalState)
   const handleClose = () => {  
   setModalState((prev) => ({
    ...prev,
    open : false
   }))
   }
  return (
    <>  
  <Modal
    show={modalState.open}
    size="md"
    onClose={handleClose}
    
  >
    <Modal.Header className="border-none ">
      {modalState.view === 'login' && "Log In"}
      {modalState.view === 'signup' && "Sign Up"}
      {modalState.view === 'resetPassword' && "Reset Password"}
    </Modal.Header>
    <Modal.Body>
    <div className="flex items-center space-x-2 mb-5">
        <OAuthButton />        
      </div>
      <div className="my-5 text-black font-semibold text-center">
        OR
      </div>
     <div className="flex items-center flex-col justify-center w-full">
        <AuthModalInputs />
     </div>
    </Modal.Body>
    <Modal.Footer>
      {modalState.view === 'login' &&  <p>Create Your Account <span className="cursor-pointer text-blue-700 font-medium uppercase" onClick={() => 
        setModalState((prev) => ({
          ...prev,
          view : 'signup'
        }))
      } >Sign up</span></p>}

      {modalState.view === 'signup' &&  <p>Login Your Account <span className="cursor-pointer text-blue-700 font-medium uppercase" onClick={() => 
        setModalState((prev) => ({
          ...prev,
          view : 'login'
        }))
      } >Login</span></p>}
     
    </Modal.Footer>
  </Modal>
</>
  )
}

export default AuthModal