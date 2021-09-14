import React from "react";
import s from './SmallAvatar.module.css'

const SmallAvatar = (props) => {
    return (
        <div className={s.avatar}>
            <img src={props.photo ? props.photo
                        : 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'}  alt="profile icon" />
          </div>
    )
}

export default SmallAvatar;