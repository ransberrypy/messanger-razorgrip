// import Dashboard from './components/Dashboard'
// import ChatScreen from './components/ChatScreen'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ChatRoom from './components/ChatRoom';
import ChatIndex from './Screens/ChatIndex';

function App() {
  return (
    <Router>
      <Route path='/' component={LoginScreen} exact/>
      <Route path='/register' component={RegisterScreen} />
      <Route path='/chat/:id' component={ChatRoom} />
      <Route path='/dashboard' component={ChatRoom} exact/>
      {/* <Route path='/dashboard' component={ChatIndex} exact/> */}

    </Router>
  );
}

export default App;
