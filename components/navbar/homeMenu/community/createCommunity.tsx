import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { VscEye } from "react-icons/vsc";
import { HiLockClosed } from "react-icons/hi";
import {
  Label,
  TextInput,
  Button,
  Spinner,
  Modal,
  Radio,
  Checkbox,
} from "flowbite-react";
import {
  doc,
  getDoc,
  getDocs,
  runTransaction,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, fireStore } from "@/firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {
  modal: boolean;
  modalHandler: () => void;
};

const CreateCommunity = ({ modal, modalHandler }: Props) => {
  const [user] = useAuthState(auth);
  const [communityName, setCommunityName] = useState("");
  const [communityNumber, setCommunityNumber] = useState(21);
  const [error, setError] = useState("");
  const [communityType, setCommunityType] = useState("public");
  const [adult, setAdult] = useState(false);
  const [loading, setLoading] = useState(false);

  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 21) return;   
    setCommunityName(e.target.value);
    setCommunityNumber(21 - e.target.value.length);
  };

 

  const onCommunityTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommunityType(e.target.name);
  };

  
 

  const SubmitHandler = async () => {    
    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(communityName) || communityName.length < 3) {
      setError(
        "Community names must be between 3-21 charecters, and can only contain letters, numbers, or underscored"
      );
      return;
    }

    setLoading(true);

    try {
      const communityDocRef = doc(fireStore, "communities", communityName);

      await runTransaction(fireStore, async (transection) => {
        const communityDoc = await transection.get(communityDocRef);
        if (communityDoc.exists()) {
          throw new Error(`Sorry, r/${communityName} is taken, Try another`);
          return;
        }

        await transection.set(communityDocRef, {
          creatorId: user?.uid,
          createAtDate: serverTimestamp(),
          numberOfMembers: 1,
          privacyType: communityType,
          adult,
        });

       await transection.set(doc(fireStore, `users/${user?.uid}/communitySnippets`, communityName), {
          communityId : communityName,
          isModerator : true
        })
      });

     
     
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <>
      <Modal.Body>
        <div className="space-y-6">
          <div>
            <h4 className="font-medium">Name</h4>
            <p className="text-sm text-gray-600">
              Community names including capitalization cannot be changed.
            </p>
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                r/
              </div>
              <input
                type="text"
               
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full pl-7 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={ChangeHandler}
                value={communityName}
              />
            </div>
            <p
              className={`${
                communityName.length == 21 ? "text-red-600" : "text-gray-600"
              } text-sm`}
            >
              {communityNumber} Characters remaining
            </p>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Community type</h2>
            <fieldset className="flex flex-col gap-4" id="radio">
              <div className="flex items-center gap-2">
                <Radio
                  id="public"
                  name="public"
                  value="Public"
                  checked={communityType === "public"}
                  onChange={onCommunityTypeChange}
                />
                <Label htmlFor="public" className="flex items-center">
                  <FaUser className="text-gray-500 mr-2 text-sm" />
                  Public
                </Label>
                <p className="text-sm text-gray-600">
                  Anyone can view, post, and comment to this community
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="restricted"
                  name="restricted"
                  value="Restricted"
                  checked={communityType === "restricted"}
                  onChange={onCommunityTypeChange}
                />
                <Label htmlFor="restricted" className="flex items-center">
                  <VscEye className="text-gray-500 mr-2 text-xl" />
                  Restricted
                </Label>
                <p className="text-sm text-gray-600">
                  Anyone can view, post, and comment to this community
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="private"
                  name="private"
                  value="Private"
                  checked={communityType === "private"}
                  onChange={onCommunityTypeChange}
                />
                <Label htmlFor="private" className="flex items-center">
                  <HiLockClosed className="text-gray-500 mr-2 text-lg" />
                  Private
                </Label>
                <p className="text-sm text-gray-600">
                  Only approved users can view and submit to this community
                </p>
              </div>
            </fieldset>
          </div>

          <div className="pt-5">
            <h2 className=" text-base font-normal mb-1">Adult content</h2>
            <div className="flex flex-col gap-4" id="checkbox">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="accept"
                  value="adult"
                  checked={adult === true}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAdult(!adult)
                  }
                />
                <Label htmlFor="accept" className="flex items-center space-x-1">
                  <span className="px-1 bg-[#ff585b] text-white text-xs">
                    NSFW
                  </span>
                  <span>18+ year old community</span>
                </Label>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg-gray-200">
        <div className="flex items-center gap-2 justify-end flex-grow">
          <button
            onClick={modalHandler}
            type="button"
            className="border border-blue-700 font-bold text-blue-700 rounded-full px-5 py-1"
          >
            Cancel
          </button>
          <button
            onClick={SubmitHandler}
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {loading ? <Spinner /> : " Create Community"}
          </button>
        </div>
      </Modal.Footer>
    </>
  );
};

export default CreateCommunity;
