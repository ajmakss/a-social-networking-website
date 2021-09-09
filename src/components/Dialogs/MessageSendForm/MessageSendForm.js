import React from "react";
import s from './MessageSendForm.module.css';

const MessageSendForm = (props) => {
    let newMessage = React.createRef();

    const onSendNewMessage = () => {
        props.sendNewMessage();

    };
    const onChangeMessage = () => {
        let message = newMessage.current.value;
        props.updateMessageText(message)
    }

    return (
        <div className={s.messages__send}>
            <textarea ref={newMessage} type="text" onChange={onChangeMessage} value={props.state.messageText} />
            <button onClick={onSendNewMessage} type="submit">Send</button>
        </div>
    )
}

export default MessageSendForm;