import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// routes
import PrivateRoute from './Routes/PrivateRoute';
import LoginRoute from './Routes/LoginRoute';
//pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <LoginRoute path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} />
        <Redirect to="/" />
        <Login />
      </Switch>
    </Router>
  );
}

export default App;
