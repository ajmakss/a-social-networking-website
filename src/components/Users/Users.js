import React from "react";
import { NavLink } from "react-router-dom";
import s from './Users.module.css';
import * as axios from "axios";

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
                    <NavLink to={`/profile/${u.id}`}>
                        <div className={s.avatar}>
                            <img src={u.photos.small !== null ? u.photos.small
                                : 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'}
                                alt="user avatar" />
                        </div>
                    </NavLink>
                    <span>{u.name}</span>
                    <span>{u.status}</span>
                    {/* <span>{u.location.city}</span>
            <span>{u.location.country}</span> */}
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: { 'API-KEY': 'ae6ff877-a5d0-472b-b274-4c76cefc9933' }
                                    })
                                    .then(resp => {
                                        if (resp.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }
                            }> Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: { 'API-KEY': 'ae6ff877-a5d0-472b-b274-4c76cefc9933' }
                                    })
                                    .then(resp => {
                                        if (resp.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }
                            }> Follow</button>
                        }
                    </div>
                </div>)
            }
        </div>
    )
}
export default Users;