import Login from "@/components/login";
import ResetPassword from "@/components/resetPassword";
import Signup from "@/components/signup";
import { authModalState } from "@/recoil/authModalAtom";
import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

type Props = {};

const AuthModal = (props: Props) => {
  const [modal, setModal] = useRecoilState(authModalState);
  const modalHandler = () => {
    setModal((prev) => ({
        ...prev,
        open : false
    }))
  }
  return (
    <>
     
      <Modal show={modal.open} onClose={modalHandler} popup size="md">
        <Modal.Header>
        {modal.view === "login" && "Login"}
          {modal.view === "signup" && "Signup"}
          {modal.view === "resetPassword" && "Reset Password"}
        </Modal.Header>
        <Modal.Body>
          {modal.view === "login" && <Login />}
          {modal.view === "signup" && <Signup />}
          {modal.view === "resetPassword" && <ResetPassword />}
        </Modal.Body>
       
      </Modal>
    </>
  );
};

export default AuthModal;
