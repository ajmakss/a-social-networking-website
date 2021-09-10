import React from "react";
import s from './Users.module.css';

const Users = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.active}
                    onClick={() => props.onPageChange(p)}> {p}</span>
            })}
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