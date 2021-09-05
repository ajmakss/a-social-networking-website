import React from 'react';
import s from './MessageItem.module.css';

const MessageItem = (props) => {
    return (
        <div className={s.messageItem}>
            <div className={s.message__avatar}>
                <img src="https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png" alt="dialog avatar" />
            </div>
            <div className={s.message__text}>{props.message}</div>
        </div>
    )
}

export default MessageItem;