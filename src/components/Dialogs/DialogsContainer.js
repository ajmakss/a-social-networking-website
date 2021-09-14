import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        isLogin: state.auth.isLogin
    }
};



let DialogsContainer = compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Dialogs)
export default DialogsContainer;