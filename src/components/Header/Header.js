import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
    return (
        <header className={s.header}>
        <img src="http://demo.foxthemes.net/socialitev2.1/assets/images/logo.png" />
        <div className={s.header__text}>
          {props.isLogin ? `Hello, ${props.login}`
          : <NavLink to="/login">
          Login
       </NavLink>}
        </div>
      </header>
    )
}

export default Header;