import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './MessageSendForm.module.css';
import {TextArea} from '../../common/FormsControl/FormsControl'
import {requiredField, maxLengthCreator} from '../../../validators/validators';

const MessageSendForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.messages__send}>
            <Field component={TextArea} name="messageText" 
            type="text"  placeholder="Enter your message" />
            <button type="submit">Send</button>
        </form>
    )
}

let ReduxMessageSendForm = reduxForm ({
    form: 'message'
})(MessageSendForm)

export default ReduxMessageSendForm;