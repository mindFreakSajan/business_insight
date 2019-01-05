import React from 'react';
import { Router, Route, IndexRoute, browserHistory, } from 'react-router';
import App from './containers/App';
//import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';

export default (
  <Router history={browserHistory}>
   <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
    </Route>
  </Router>
);
