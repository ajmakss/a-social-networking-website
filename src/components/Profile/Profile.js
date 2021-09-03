import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={s.user__profile}>
                <div className={s.profiles_banner}>
                    <img
                        src="https://www.riotgames.com/darkroom/1440/b71ace4a13f127d6c79f6f3872589416:702844724d49733d39518eda627a3bd6/london.jpg" alt="profile backgroudnd" />
                </div>

                <div className={s.profiles_content}>
                    <div className={s.profiles_avatar}>
                        <img src="https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png" alt="profile icon" />
                    </div>
                    <div className={s.profile_info}>
                        <h1>Josephine Williams</h1>
                    </div>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;