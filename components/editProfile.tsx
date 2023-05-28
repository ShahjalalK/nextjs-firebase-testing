import { fireStore, storage } from "@/firebase/firebaseConfig";
import { userInfo } from "@/recoil/userAtom";
import { doc, setDoc } from "firebase/firestore";
import { Button, Spinner } from "flowbite-react";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useDownloadURL, useUploadFile } from "react-firebase-hooks/storage";
import { uuid } from "uuidv4";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { resolveObjectURL } from "buffer";
import { EditModalState } from "@/recoil/editModalAtom";

type Props = {};

const EditProfile = (props: Props) => {
  const [userValue, setUserValue] = useRecoilState(userInfo);
  const rounter = useRouter()
const setEditModal = useSetRecoilState(EditModalState)
  const [profileImage, setProfileImage] = useState<File>();
  const [privewImage, setPrivewImage] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const docRef = doc(fireStore, `users/${userValue.uid}`)

  const changePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files as FileList;
    setProfileImage(selectedFile?.[0]);
    setPrivewImage(URL.createObjectURL(selectedFile?.[0]));
  };

  const storageRef = ref(storage, `images/${uuid()}`);

  const uploadTask = uploadBytesResumable(storageRef, profileImage);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    if (profileImage) {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
         
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL);
          });
        }
      );
    }

    setLoading(false);
  };

  useEffect(() => {
    setDoc(docRef, {
      email : userValue.email,
      displayName : userValue.displayName,
      uid : userValue.uid,
      photoURL : imageUrl
    }).then(() => {
      toast("Profile Update")
      setEditModal((prev) => ({
        ...prev,
        open : false
      }))
      rounter.push(`/${userValue.uid}`)      
    })

  }, [imageUrl])

  return (
    <form
      onSubmit={submitHandler}
      className="flex-grow flex flex-col space-y-4"
    >
      <div>
        <label
          htmlFor="me"
          className="cursor-pointer w-48 h-48 inline-block overflow-hidden"
        >
          <Image
            src={privewImage ? privewImage : "/me.jpg"}
            width={70}
            height={70}
            alt="me"
            className=" w-full h-full object-cover rounded border"
          />
        </label>
        <input
          type="file"
          onChange={changePhoto}
          accept="image/*"
          id="me"
          className="hidden"
        />
      </div>
      <input
        type="text"
        placeholder="Display Name"
        className="flex-grow border p-1 rounded w-full"
        onChange={(e) =>
          setUserValue((prev) => ({
            ...prev,
            displayName: e.target.value,
          }))
        }
        value={userValue?.displayName as string}
      />
      <Button type="submit">{loading ? <Spinner /> : "Update Version"} </Button>
    </form>
  );
};

export default EditProfile;
