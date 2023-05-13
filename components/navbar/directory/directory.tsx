import { Dropdown } from 'flowbite-react'
import React from 'react'
import {MdHomeFilled} from 'react-icons/md'
import CommonatyModal from './commonatyModal'
type Props = {}

const Directory = (props: Props) => {
  return (
    <div className=" border border-transparent p-1 hover:border-gray-100  px-3 rounded mr-3">
        <Dropdown    
  label={
    <div className="flex items-center space-x-1 pr-0 md:pr-32">
        <MdHomeFilled className=" text-3xl/3" />
        <span>Home</span>
    </div>
  }
  inline={true}
  
  
>
<CommonatyModal />
  
</Dropdown>
    </div>
  )
}

export default Directory