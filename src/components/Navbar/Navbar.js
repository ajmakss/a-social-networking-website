import React from 'react';
import s from'./Navbar.module.css';


const Navbar = () => {
    return (
      <nav className={s.nav}>
      <ul className={s.nav__links}>
        <li><a href="" className={s.nav__link}> Profile</a></li>
        <li><a href="" className={s.nav__link}>Messages</a></li>
        <li><a href="" className={s.nav__link}>News</a></li>
        <li><a href="" className={s.nav__link}>Music</a></li>
        <li><a href="" className={s.nav__link}>Setting</a></li>
      </ul>
    </nav>
    )
}

export default Navbar;