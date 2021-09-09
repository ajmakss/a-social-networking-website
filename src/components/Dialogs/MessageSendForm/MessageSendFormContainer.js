import React from "react";
import { sendNewMessageActionCreactor, updateMessageTextActionCreactor } from '../../../redux/dialogs-reducer';
import MessageSendForm from "./MessageSendForm";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: () => {
            dispatch(sendNewMessageActionCreactor());
        },
        updateMessageText: (message) => {
            dispatch(updateMessageTextActionCreactor(message));
        }
    }
}


const MessageSendFormContainer = connect(mapStateToProps, mapDispatchToProps)(MessageSendForm)

export default MessageSendFormContainer;