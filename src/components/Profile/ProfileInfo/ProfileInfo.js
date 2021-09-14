import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    return (
        <div className={s.user__profile}>
            <div className={s.profile_banner}>
                <img
                    src="https://www.riotgames.com/darkroom/1440/b71ace4a13f127d6c79f6f3872589416:702844724d49733d39518eda627a3bd6/london.jpg" alt="profile backgroudnd" />
            </div>

            <div className={s.profile_content}>
                <div className={s.profile_avatar}>
                    <img src={props.profile.photos.large === null ? props.profile.photos.large
                        : 'https:// .ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'} alt="profile icon" />
                </div>
                <div className={s.profile_info}>
                    <h1>{props.profile.fullName}</h1>
                    <span>{props.profile.aboutMe}</span>
                    <ProfileStatus status={props.status}  updateProfileStatus={props.updateProfileStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;