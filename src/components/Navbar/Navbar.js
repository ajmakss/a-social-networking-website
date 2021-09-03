import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__links}>
        <li>
          <NavLink to="/profile" className={s.nav__link} activeClassName={s.active}> Profile</NavLink>
        </li>
        <li><NavLink to="/dialogs" className={s.nav__link} activeClassName={s.active}>Messages</NavLink></li>
        <li><NavLink to="/news" className={s.nav__link} activeClassName={s.active} >News</NavLink></li>
        <li><NavLink to="/music" className={s.nav__link} activeClassName={s.active} >Music</NavLink></li>
        <li><NavLink to="/setting" className={s.nav__link} activeClassName={s.active} >Setting</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;