import { atom } from "recoil"

interface EditType{
    open : boolean
}

const defaultModal : EditType = {
    open : false
}

export const EditModalState = atom<EditType>({
    key : "editModalState",
    default : defaultModal
})