import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer'


class HeaderContainer extends React.Component {

  componentDidMount() {
   login();
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({ 
  login: state.auth.login,
  isLogin: state.auth.isLogin

});

export default connect(mapStateToProps, {login})(HeaderContainer);