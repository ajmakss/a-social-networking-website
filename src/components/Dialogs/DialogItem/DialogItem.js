import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const { name, id } = props;
    return (<>
         <NavLink to={`/dialogs/${id}`} activeClassName={s.active__dialog} className={s.dialog__item}>
            <div className={s.dialog__avatar}>
                <img src="https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png" alt="dialog avatar" />
            </div>
            <div className={s.dialog__descr}>
                <div className={s.dialog__headline}>
                    <h5>{name}</h5>
                    <span>4 hours ago</span>
                </div>
                <p>last message....</p>
            </div>
        </NavLink>
    </>
    )
}


export default DialogItem;