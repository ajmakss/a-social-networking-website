import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from'./Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
        <img className={s.photo} src="https://www.riotgames.com/darkroom/1440/b71ace4a13f127d6c79f6f3872589416:702844724d49733d39518eda627a3bd6/london.jpg" />
        </div>
         <div>
           avat + desrc
         </div>
         <MyPosts/>
      </div>
    )
}

export default Profile;