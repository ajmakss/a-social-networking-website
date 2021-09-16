import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import NavBarItem from './NavBarItem/NavBarItem';
import profileIcon from '../../photo/NavBarIcons/profile.svg';
import dialogs from '../../photo/NavBarIcons/dialogs.svg';
import news from '../../photo/NavBarIcons/news.svg';
import setting from '../../photo/NavBarIcons/setting.svg';
import users from '../../photo/NavBarIcons/users.svg';
import videos from '../../photo/NavBarIcons/videos.svg';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__links}>
        <NavBarItem to={"/profile"} icon={profileIcon} text={"Profile"}/>
        <NavBarItem to={"/users"} icon={users} text={"Users"}/>
        <NavBarItem to={"/dialogs"} icon={dialogs} text={"Messages"}/>
        <NavBarItem to={"/news"} icon={news} text={"News"}/>
        <NavBarItem to={"/videos"} icon={videos} text={"Music"}/>
        <NavBarItem to={"/setting"} icon={setting} text={"Setting"}/>
      </ul>
    </nav>
  )
}

export default Navbar;