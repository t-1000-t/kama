import React, {ComponentType} from "react"
import {actions} from "../../../../redux/dialogs-reducer"
import {connect} from "react-redux"
import {compose} from "redux"
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {AppStateType} from "../../../../types/types";
import Dialogs from "./Dialogs";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        sendMessage: actions.sendMessages
    }), withAuthRedirect)(Dialogs);