import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './MessageSendForm.module.css';

const MessageSendForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.messages__send}>
            <Field component="textarea" name="messageText" type="text"  placeholder="Enter your message" />
            <button type="submit">Send</button>
        </form>
    )
}

let ReduxMessageSendForm = reduxForm ({
    form: 'message'
})(MessageSendForm)

export default ReduxMessageSendForm;