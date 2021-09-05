import React from "react";
import s from './MessagesHeader.module.css';

const MessagesHeader = () => {
    return (
        <div className={s.messages__header}>
            <h4>Name</h4>
            <span> Delete Conversation</span>
        </div>
    )
}

export default MessagesHeader;