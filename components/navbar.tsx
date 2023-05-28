import { auth, fireStore } from "@/firebase/firebaseConfig";
import AuthModal from "@/modal/authModal";
import { authModalState } from "@/recoil/authModalAtom";
import { signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Avatar, Dropdown, Spinner, Toast } from "flowbite-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useSetRecoilState } from "recoil";

type Props = {};

const Navbar = (props: Props) => {
  const setModalState = useSetRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const docRef = doc(fireStore, `users/${user?.uid}`);
      setDoc(docRef, {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        phoneNumber: user.phoneNumber,
      });
    }
  }, [user]);

  console.log(user)

  return (
    <header className="flex items-center justify-between px-6 py-2 bg-gray-700 text-white">
      <Link href="/" className="font-semibold text-2xl">
        LOGO.
      </Link>
      {loading ? (
        <Spinner />
      ) : user ? (
        <div>
          <Dropdown label={<Avatar size="sm" />} inline={true}>
            <Dropdown.Item>
              <Link href="/[pid]" as={`/${user.uid}`} className="flex flex-col space-y-2 text-left">
                {user?.displayName}shahjalalk
                <p className="block font-medium">{user.email}</p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item onClick={() => signOut(auth)}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <button
            onClick={() =>
              setModalState((prev) => ({ ...prev, view: "login", open: true }))
            }
            className="font-medium px-7 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Login
          </button>
          <button
            onClick={() =>
              setModalState((prev) => ({ ...prev, view: "signup", open: true }))
            }
            className="font-medium px-7 py-2 rounded-md border border-white"
          >
            Signup
          </button>
          <AuthModal />
        </div>
      )}
    </header>
  );
};

export default Navbar;
