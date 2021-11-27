import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './์NavBar'
import Users from './Users'

export default function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        
        <Switch>
          <Route path="/">
            <Users  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


