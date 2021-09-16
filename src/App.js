import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route , withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component{
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.isInitialized) return <Preloader/>
    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-content">
            <Route path="/login" render={() => <Login />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/news" component={News} />
            <Route path="/videos" component={Music} />
            <Route path="/setting" component={Setting} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
})
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)
