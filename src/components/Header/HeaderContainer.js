import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {authUser, logout} from '../../redux/auth-reducer'


class HeaderContainer extends React.Component {

  componentDidMount() {
   this.props.authUser();
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({ 
  login: state.auth.login,
  isLogin: state.auth.isLogin

});

export default connect(mapStateToProps, {authUser, logout})(HeaderContainer);