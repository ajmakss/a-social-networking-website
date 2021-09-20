import React from "react";
import s from './Paginator.module.css';

const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.user__nav}>
            {pages.map(p => {
                return <span className={`${s.user__navlink} ${props.currentPage === p ? s.user__navlink_active : ''}`}
                    onClick={() => props.onPageChange(p)}> {p}</span>
            })}
        </div>
    )
}
export default Paginator;