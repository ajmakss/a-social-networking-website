import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(resp => {
            props.setUsers(resp.data.items)
        })
    }
    return ( <div>
        {
            props.users.map(u => <div key={u.id}> 
            
            <div className={s.avatar}>
                <img src={u.photos.small !== null ? u.photos.small 
                    : 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'}
                     alt="user avatar" />
            </div>
            <span>{u.name}</span>
            <span>{u.status}</span>
            {/* <span>{u.location.city}</span>
            <span>{u.location.country}</span> */}
            <div>
                {u.followed 
                ? <button onClick={() => props.unfollow(u.id)}> Unfollow</button> 
                : <button onClick={() => props.follow(u.id)}> Follow</button>
            }
            </div>
            </div>)
        }
    </div>
    )
}
export default Users;