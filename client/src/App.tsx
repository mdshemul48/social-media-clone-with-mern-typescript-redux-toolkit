import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

// routes
import PrivateRoute from './Routes/PrivateRoute';
import LoginRoute from './Routes/LoginRoute';

import NavBar from './shared/components/NavBar';
//pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <LoginRoute path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
