import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messagesData.map(m => <MessageItem message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__Items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;