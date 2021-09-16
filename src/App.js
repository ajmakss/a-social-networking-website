
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-content">
          <Route path="/login" render={() => <Login/>}/>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" component={News} />
          <Route path="/videos" component={Music} />
          <Route path="/setting" component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
