import { atom } from "recoil";

export interface UserType {
    uid : string;
    photoURL : null | string;
    email : string | null;
    displayName : string | null;
}

const defaultUser : UserType = {
    uid : "",
    photoURL : "",
    email : "",
    displayName : ""
}

export const userInfo = atom<UserType>({
    key : "userInfo",
    default : defaultUser
})

