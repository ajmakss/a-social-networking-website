import React from "react";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator/Paginator";
import s from './Users.module.css';

const Users = (props) => {
    return (
        <div>
          <Paginator totalCount={props.totalCount}  pageSize={props.pageSize} 
           onPageChange={ props.onPageChange} currentPage={props.currentPage}/>
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