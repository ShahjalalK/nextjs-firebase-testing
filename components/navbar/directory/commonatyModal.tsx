import React, { useState } from 'react'
import CreateComonityModal from './createComonityModal'
import { Dropdown } from 'flowbite-react'
import {AiOutlinePlus} from 'react-icons/ai'
 
type Props = {}

const CommonatyModal = (props: Props) => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <CreateComonityModal open={open} handleClose={() => setOpen(false)} />
        <Dropdown.Item onClick={() => setOpen(true)}>
            <div className="flex items-center space-x-1">
                <AiOutlinePlus />
                <p>Create Community</p>
            </div>
        </Dropdown.Item>
    </>
  )
}

export default CommonatyModal