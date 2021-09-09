import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'



const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    }
};



let DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer;