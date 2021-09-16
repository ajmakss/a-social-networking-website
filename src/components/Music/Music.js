import React from 'react';
import { compose } from 'redux';
import ErrorPage from '../common/ErrorPage/ErrorPage';
import s from './Music.module.css';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const Music = () => {
    return (
        <div>
            <ErrorPage />
        </div>
    )
}

export default compose( withAuthRedirect)(Music);
