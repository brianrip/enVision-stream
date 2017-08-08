import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/container.js';

export default (
  <Router>
    <Route path="/" component={ App } />
  </Router>
);
