import React from "react"
import {maxLengthCreator, required} from "../../../../../utils/validators/validators";
import {reduxForm, InjectedFormProps} from "redux-form";
import {createField, Textarea} from "../../../FormsControls/FormsControls";
import {NewMassageFormValuesType} from "../Dialogs";

const maxLength50 = maxLengthCreator(50)

type NewMassageFormValuesKeysType = Extract<keyof NewMassageFormValuesType, string>
type PropsType = {}


const AddMessageForm:  React.FC<InjectedFormProps<NewMassageFormValuesType & PropsType> & PropsType>
    = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMassageFormValuesKeysType>("Enter your message", "newMessageBody" , [required, maxLength50], Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMassageFormValuesType>({form: 'dialog-add-message-form'})(AddMessageForm)