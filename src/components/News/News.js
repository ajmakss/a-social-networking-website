import React from 'react';
import s from './News.module.css';
import ErrorPage from '../common/ErrorPage/ErrorPage';
import { compose } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


const News = () => {
    return (
        <div>
           <ErrorPage/>
        </div>
    )
}

export default compose( withAuthRedirect)(News);