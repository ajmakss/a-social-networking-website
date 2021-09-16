import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBarItem.module.css';

const NavBarItem = (props) => {
    return (
        <li>
            <NavLink to={props.to} className={s.nav__link} activeClassName={s.active}>
                <img src={props.icon} alt="icon" className={s.icon} />
                {props.text}
            </NavLink>
        </li>

    )
}
export default NavBarItem;