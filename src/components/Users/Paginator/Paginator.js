import React, { useState } from "react";
import s from './Paginator.module.css';

const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let postionCount = Math.ceil(pageCount / 10);
    let [portionNumber, setPortionNumber] = useState(0);
    let leftPortionpageNumber = (portionNumber - 1) * 10 + 1;
    let rightPortionpageNumber = portionNumber * 10;

    return (
        <div className={s.user__nav}>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
            {pages.filter(p => p >= leftPortionpageNumber && p <= rightPortionpageNumber)
                .map(p => {
                    return <span className={`${s.user__navlink} ${props.currentPage === p ? s.user__navlink_active : ''}`}
                        onClick={() => props.onPageChange(p)}> {p}</span>
                })}
                            {postionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    )
}
export default Paginator;