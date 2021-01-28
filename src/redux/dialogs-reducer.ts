import {InferActionsTypes} from "../types/types";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>


let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Viktor' },
        { id: 5, name: 'Valera' }
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'HI' },
        { id: 2, message: 'Hello! How are you?' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Wow' }
    ] as Array<MessageType>
};


const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state
    }
}

export const actions = {
    sendMessagesCreator: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody } as const )
}

export default dialogsReducer;
