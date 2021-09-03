import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__Items}>
                <div className={s.dialog}>
                   <NavLink to="/dialogs/1"> Ivan </NavLink>
                    </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/2"> Olesia </NavLink>
                    </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/3"> Diana </NavLink>
                    </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/4"> Maryan </NavLink>
                    </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/5"> Valentyn </NavLink>
                    </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi, how are you?</div>
                <div className={s.message}>What are you doing?</div>
                <div className={s.message}>Have you seen this film?</div>
            </div>
        </div>
    )
}

export default Dialogs;