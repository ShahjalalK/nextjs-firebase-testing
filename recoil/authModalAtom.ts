import { atom } from "recoil";

interface authModalType{
    open : boolean;
    view : "login" | "signup" | "resetPassword"    
}

const defaultModalState : authModalType = {
    open : false,
    view : "login"
}

export const authModalState = atom<authModalType>({
    key : "authModalState",
    default : defaultModalState
})