import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { UserReducer } from './types/userReducer';

// routes
import PrivateRoute from './Routes/PrivateRoute';
import LoginRoute from './Routes/LoginRoute';

import NavBar from './shared/components/NavBar';
//pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  const { user } = useSelector(
    (state: { userState: UserReducer }) => state.userState
  );

  return (
    <Router>
      {user && <NavBar />}
      <Switch>
        <LoginRoute path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
