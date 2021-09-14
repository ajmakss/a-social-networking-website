import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import SmallAvatar from '../../common/SmallAvatar/SmallAvatar';

const DialogItem = (props) => {
    const { name, id } = props;
    return (<>
         <NavLink to={`/dialogs/${id}`} activeClassName={s.active__dialog} className={s.dialog__item}>
            <SmallAvatar />
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