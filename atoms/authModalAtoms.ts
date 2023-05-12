import { atom } from "recoil"

export interface AuthModalAtomsType {
    open : boolean;
    view : 'login' | 'signup' | 'resetPassword'
}

const defaultModalState : AuthModalAtomsType = {
    open : false,
    view : 'login'
}


export const AuthModalState = atom <AuthModalAtomsType> ({
    key : 'modalAuthState',
    default : defaultModalState
})