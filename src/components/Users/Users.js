import React from "react";
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
             [
                {id: 1,  avatar: 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png', followed: true, name: 'Maksym', status: 'Its my status', location: {city: 'Tlumach', country: 'Ukraine'}},
                {id: 2,  avatar: 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png', followed: false, name: 'Olga', status: 'Its my status', location: {city: 'New Yourk', country: 'USA'}},
                {id: 3,  avatar: 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png', followed: true, name: 'Anne', status: 'Its my status', location: {city: 'Berlin', country: 'Germany'}},
                {id: 4,  avatar: 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png', followed: false, name: 'Vania', status: 'Its my status', location: {city: 'Lviv', country: 'Ukraine'}},
                {id: 5,  avatar: 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png', followed: false, name: 'Sasha', status: 'Its my status', location: {city: 'Paris', country: 'France'}},
            
            ]
        )
    }
    return ( <div>
        {
            props.users.map(u => <div key={u.id}> 
            
            <div className={s.avatar}>
                <img src={u.avatar} alt="user avatar" />
            </div>
            <span>{u.name}</span>
            <span>{u.status}</span>
            <span>{u.location.city}</span>
            <span>{u.location.country}</span>
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