import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import banner from '../../../photo/banner.jpg'

const ProfileInfo = (props) => {
    return (
        <div className={s.user__profile}>
            <div className={s.profile_banner}>
                <img
                    src={banner} alt="profile backgroudnd" />
            </div>

            <div className={s.profile_content}>
                <div className={s.profile_avatar}>
                    <img src={props.profile.photos.large  ? props.profile.photos.large
                        : 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'} alt="profile icon" />
                </div>
                <div className={s.profile_info}>
                    <h1>{props.profile.fullName}</h1>
                    <span>{props.profile.aboutMe}</span>
                    <ProfileStatusWithHooks status={props.status}  updateProfileStatus={props.updateProfileStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;