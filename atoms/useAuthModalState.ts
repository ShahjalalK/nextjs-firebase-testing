import { atom } from "recoil";

export interface AuthModalInterface  {
    open : boolean;
    view : "login" | "signup" | "resetPassword"
}

const defaultModalState : AuthModalInterface = {
    open : false,
    view : 'login'
}

export const useAuthModalState = atom <AuthModalInterface>({
    key : "useAuthModalState",
    default : defaultModalState
})