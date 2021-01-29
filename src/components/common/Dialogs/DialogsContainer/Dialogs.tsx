import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import AddMessageForm from "./AddMessageForm/AddMessageForm"
import {InitialStateType} from "../../../../redux/dialogs-reducer";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMassageFormValuesType = {
    newMessageBody: string
}


const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values: NewMassageFormValuesType) => {
        props.sendMessage(values.newMessageBody)
    }
    // if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {dialogsElements}
                </div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs;