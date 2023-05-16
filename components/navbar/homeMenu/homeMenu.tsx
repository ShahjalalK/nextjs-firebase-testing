import { Dropdown } from 'flowbite-react'
import React, {useState} from 'react'

import {TiHome} from 'react-icons/ti'
import {AiOutlinePlus} from 'react-icons/ai'
import CommunitiModal from './community/communitiModal'

type Props = {}

const HomeMenu = (props: Props) => { 
  const [modal, setModal] = useState(false) 
  const modalHandler = () => {
     setModal(false)
  } 
  return (
   <div className="border hover:border-gray-300 rounded-md p-1">
    <Dropdown label={
      <div className="flex items-center space-x-1 md:mr-32">
        <TiHome className="text-2xl" />
       <span className="hidden md:inline-flex"> Home</span>
      </div>
    }
    inline={true}
    >
      <Dropdown.Header className="text-gray-500 text-xs">
      YOUR COMMUNITIES
      </Dropdown.Header>
  
  <Dropdown.Item icon={AiOutlinePlus} onClick={() => setModal(true)}>
    Create Community
  </Dropdown.Item>
  
</Dropdown>
    <CommunitiModal modal={modal} modalHandler={modalHandler} />
   </div> 
  )
}

export default HomeMenu