import EditProfile from '@/components/editProfile'
import { EditModalState } from '@/recoil/editModalAtom'
import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

const EditModal = (props: Props) => {
    const [modal, setModal] = useRecoilState(EditModalState)
    const modalHandler = () => {
        setModal((prev) => ({
          ...prev,
          open : false
        }))
    }
  return (
    <Modal
show={modal.open}
  onClose={modalHandler}
>
  <Modal.Header>
    Edit your profile
  </Modal.Header>
  <Modal.Body>
    <EditProfile />
  </Modal.Body>
  
</Modal>
  )
}

export default EditModal