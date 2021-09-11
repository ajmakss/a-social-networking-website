import React from "react";
import { sendNewMessage, updateMessageText } from '../../../redux/dialogs-reducer';
import MessageSendForm from "./MessageSendForm";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}


const MessageSendFormContainer = connect(mapStateToProps, {sendNewMessage, updateMessageText})(MessageSendForm)

export default MessageSendFormContainer;