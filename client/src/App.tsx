import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// routes
import PrivateRoute from './Routes/PrivateRoute';
//pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={Home} />
        <Route path="/login" component={Login} exact />
        <Redirect to="/" />
        <Login />
      </Switch>
    </Router>
  );
}

export default App;
