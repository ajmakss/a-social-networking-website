import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserData} from '../../redux/auth-reducer'


class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    .then(resp => {
        if (resp.data.resultCode === 0) {
          let {id, email, login} = resp.data.data;
          this.props.setUserData(id, email, login);

        }
    })
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({ 
  login: state.auth.login,
  isLogin: state.auth.isLogin

});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);