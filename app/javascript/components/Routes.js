import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/home' exact component={HomePage} />
          <Route path='/contact' exact component={ContactPage} />
          <Route path='/profile' exact component={ProfilePage} />
          <Route path='/' exact component={ProfilePage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;