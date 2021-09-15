import React from "react";
import { NavLink } from "react-router-dom";
import s from './Users.module.css';

const Users = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.user__nav}>
                {pages.map(p => {
                    return <span className={`${s.user__navlink} ${props.currentPage === p ? s.user__navlink_active : '' }`}
                        onClick={() => props.onPageChange(p)}> {p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.user}>
                    <div className={s.user__content}>
                        <NavLink to={`/profile/${u.id}`}>
                            <div className={s.avatar}>
                                <img src={u.photos.small !== null ? u.photos.small
                                    : 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'}
                                    alt="user avatar" />
                            </div>
                        </NavLink>
                        <div className={s.user__text}>
                            <span className={s.user__name}>{u.name}</span>
                            <span>{u.status}</span>
                        </div>
                    </div>
                    <div>
                        {u.followed ? <button disabled={props.isFollowingProcess.some(id => id === u.id)}
                             className={s.btn__unfollow} onClick={() => props.userUnFollow(u.id)}
                            > Unfollow</button>
                            : <button disabled={props.isFollowingProcess.some(id => id === u.id)} 
                            className={s.btn__follow} onClick={() => props.userFollow(u.id)}
                            > Follow</button>
                        }
                    </div>
                </div>)
            }
        </div>
    )
}
export default Users;