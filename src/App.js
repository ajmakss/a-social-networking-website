
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-content">
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
