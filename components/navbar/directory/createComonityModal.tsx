import { Button, Checkbox, Label, Modal, Radio, TextInput } from "flowbite-react";
import React, { useState } from "react";
import {IoMdPerson} from  'react-icons/io'
import {VscEye} from 'react-icons/vsc'
import {HiLockClosed} from 'react-icons/hi'
 
type Props = {
  open: boolean;
  handleClose: () => void;
};

const CreateComonityModal = ({ open, handleClose }: Props) => {
    const [community, setCommunity] = useState<string>("")
    const [communityLength, setCommunityLenght] = useState(21)
    const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 21) return
       setCommunity(e.target.value)
        setCommunityLenght(21 - e.target.value.length )
    }
    const createCummunnityHandler = async () => {
      alert(community)
    }
  return (
    <>
      <Modal show={open} onClose={handleClose}>
        <Modal.Header>Create a Community</Modal.Header>
        <Modal.Body>
          <div className=" flex flex-col">
            <p className=" font-medium">Name</p>
            <p className="text-sm text-gray-500">
                Community names including capitalization cannot be changed
            </p>
          </div>
          <div className="my-5">
          <TextInput     
      type="text"
      name="communityName"
      placeholder="r/"
      required={true}
      value={community}
      onChange={changeHandler}
      
    />
    <p className={`text-sm ${communityLength === 0 ? "text-red-600" : "text-gray-500"}`}>{communityLength} Characters remaining
</p>
          </div>

          <div className="my-5">
            <h2 className="text-xl font-medium">Community type</h2>
            <div className="flex items-center gap-2 my-3">
    <Radio id="remember"
      name="community"
      value="Public"
      defaultChecked={true} />
    <Label htmlFor="remember" className="flex items-center">
       <IoMdPerson className="text-xl text-gray-500 mr-2" /> Public
    </Label>
    <p className="text-sm text-gray-500">Anyone can view, post, and comment to this community</p>
  </div>

  <div className="flex items-center gap-2 my-3">
    <Radio id="remember2" name="community"
      value="Restricted" />
    <Label htmlFor="remember2" className="flex items-center">
       <VscEye className="text-xl text-gray-500 mr-2" /> Restricted
    </Label>
    <p className="text-sm text-gray-500">Anyone can view this community, but only approved users can post</p>
  </div>

  <div className="flex items-center gap-2 my-3">
    <Radio id="remember3" name="community"
      value="Private" />
    <Label htmlFor="remember3" className="flex items-center">
       <HiLockClosed className="text-xl text-gray-500 mr-2" /> Private
    </Label>
    <p className="text-sm text-gray-500">Only approved users can view and submit to this community</p>
  </div>
          </div>
        </Modal.Body>

       <div className="bg-gray-100">
       <Modal.Footer>
          <div className=" flex items-center justify-self-end flex-grow justify-end gap-3">
          <Button onClick={handleClose} color="gray" >Cancel</Button>
          <Button onClick={createCummunnityHandler} className="self-end">
            Create Community
          </Button>
          </div>
        </Modal.Footer>
       </div>
      </Modal>
    </>
  );

};

export default CreateComonityModal;
