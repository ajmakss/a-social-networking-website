import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import ReduxMessageSendForm from './MessageSendForm/MessageSendForm';
import DialogsHeader from './DialogsHeader/DialogsHeader';
import MessagesHeader from './MessagesHeader/MessagesHeader';
import { reset } from 'redux-form';


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messagesData.map(m => <MessageItem message={m.message} id={m.id} />);

    const onSubmit = (data, dispatch) => {
        props.sendNewMessage(data.messageText);
        dispatch(reset("message"))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__content}>
                <DialogsHeader />
                <div className={s.dialogs__items}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages} >
                <MessagesHeader />
                <div className={s.messages__items}>
                    {messagesElements}
                </div>
                <ReduxMessageSendForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs;