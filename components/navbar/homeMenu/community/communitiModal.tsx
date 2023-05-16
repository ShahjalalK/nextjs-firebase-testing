import { Button, Modal } from "flowbite-react"
import { useState } from "react"
import CreateCommunity from "./createCommunity"



type Props = {
   modal : boolean;
   modalHandler : () => void 
}

const CommunitiModal = ({modal, modalHandler}: Props) => {
   
  return (
    <> 
  <Modal
    show={modal}
    onClose={modalHandler}
   size="xl"
  >
    <Modal.Header>
    Create a community
    </Modal.Header>
    <CreateCommunity modal={modal} modalHandler={modalHandler} />
    
  </Modal>
</>
  )
}

export default CommunitiModal