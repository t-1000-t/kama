import React, {FC} from "react"
import {InjectedFormProps, reduxForm} from "redux-form"
import {createField, Input} from "../../../FormsControls/FormsControls";
import {required} from "../../../../../utils/validators/validators";
import {GetStringKeys} from "../../../../../types/types";


type PropsType = {}

export type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddPostForm: FC<InjectedFormProps<AddPostFormValuesType & PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<AddPostFormValuesTypeKeys>("Your post", "newPostText" , [required], Input)}
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType & PropsType>({form: "profile-add-post"})(AddPostForm)