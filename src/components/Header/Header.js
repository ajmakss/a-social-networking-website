import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Logout = (props) => {

  const onLogout = () => {
    props.logout();
  }
  return (
    <div className={s.logout__wrapper}>
      Hello, <span className={s.login}>{props.login}</span>
      <button className={s.log__btn} onClick={onLogout}>Logout</button>
    </div>
  )
}

const Login = (props) => {

  return (
    <>
      <NavLink to="login">
        <button className={s.log__btn}> Login</button>
      </NavLink>
    </>
  )
}
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="http://demo.foxthemes.net/socialitev2.1/assets/images/logo.png" />
      <div className={s.header__text}>
        {props.isLogin ? <Logout {...props} />
          : <Login {...props} />}
      </div>
    </header>
  )
}

export default Header;