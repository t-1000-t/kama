import React, {FC} from "react"
import {createField, Input, Textarea} from "../FormsControls/FormsControls"
import s from "./Profile.module.css"
import {InjectedFormProps, reduxForm} from "redux-form"
import style from "../../common/FormsControls/FormsControls.module.css"
import {GetStringKeys, ProfileType} from "../../../types/types"


type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: FC<InjectedFormProps<ProfileType & PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills</b>: {createField<ProfileTypeKeys>("My professionals skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>About me</b>
            {createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contacts}>
                    {/* todo: create some solution for embedded objects */}
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm