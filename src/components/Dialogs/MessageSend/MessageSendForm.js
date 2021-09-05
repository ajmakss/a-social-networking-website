import React from "react";
import s from './MessageSendForm.module.css';

const MessageSendForm = () => {
    return (
        <div className={s.messages__send}>
            <textarea type="text" placeholder="Your message" />
            <button type="submit">Send</button>
        </div>
    )
}

export default MessageSendForm;