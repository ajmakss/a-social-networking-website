
import React from "react";
import s from './ErrorPage.module.css'
import errorImage from '../../../photo/something-lost.png'
const ErrorPage = () => {
    return (
        <div>
            <div className={s.errorImage}>
                <img src={errorImage} alt="error image" />
            </div>
            <h1 className={s.errorTitle}>Oops, looks like the page is comming soon.</h1>
            <h2 className={s.errorSubtitle} > This is not a fault, I am  still working on it.</h2>
        </div>
    )
}
export default ErrorPage;