import { rootReducer } from "../redux/redux-store"
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";

export type DataMeGetAuthApiType = {
    id: number
    email: string
    login: string
}

export type DataLoginGetAuthApiType = {
    id: number
    email: string
    login: string
}


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    Vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotoType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotoType

}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotoType
    followed: boolean
}

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export type BaseThunkType<A extends Action = Action, R= Promise<void>> = ThunkAction<R, AppStateType, unknown, A>