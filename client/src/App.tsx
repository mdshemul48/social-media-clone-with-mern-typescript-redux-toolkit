import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"

//pages
import Home from "./pages/Home/Home"
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        <Redirect to="/"/>
      <Login />

      </Switch>
    </Router>
  );
}

export default App;
