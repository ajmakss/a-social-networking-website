import React from 'react';
import ErrorPage from '../common/ErrorPage/ErrorPage';
import s from './Setting.module.css';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const Setting = () => {
    return (
        <div>
            <ErrorPage/>
        </div>
    )
}

export default compose( withAuthRedirect)(Setting);