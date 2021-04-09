import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from './screens/landingPage/LandingPage';
import ActivityLogs from './screens/activityLogs/ActivityLogs';

const App = () => {

  return (
    <Router>
      <Switch>
        {/* --START-- */}
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/logs' component={ActivityLogs} />

        {/* 404 Page  */}
        <Route component={() => '404: Page Not Found'} />
      </Switch>
    </Router>
  );
};

export default App;
