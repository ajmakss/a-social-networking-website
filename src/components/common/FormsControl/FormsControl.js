import React, {useState} from "react";
import s from './FormsControl.module.css';
import warning from '../../../photo/warning.svg'





export const TextArea = ({ meta, input, ...props }) => {
   
    const [isWarning, showWarning] = useState(false);

    let isError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${isError ? s.error : ''}`}>
            <textarea {...input} {...props} />
             { isError &&  <img onMouseEnter={() => showWarning(true)} onMouseLeave={() => showWarning(false)} className={s.warningIcon} src={warning} alt="warning icon" />}
            {isWarning && <span className={s.warningText}>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ meta, input, ...props }) => {
    let isError = meta.touched && meta.error;
    const [isWarning, showWarning] = useState(false);
    return (
        <div className={`${s.formControl} ${isError ? s.error : ''}`}>
            <input {...input} {...props} />
            { isError &&  <img onMouseEnter={() => showWarning(true)} onMouseLeave={() => showWarning(false)} className={s.warningIcon} src={warning} alt="warning icon" />}
            {isWarning && <span className={s.warningText}>{meta.error}</span>}
        </div>
    )
}