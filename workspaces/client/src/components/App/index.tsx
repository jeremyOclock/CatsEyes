import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MatchsCats from '../MatchsCats';
import ResultsCats from '../ResultsCats';

import './app.scss';

const App: React.FC = () => (
  <div className="cats">
    <h1 className="cats__title">Cat's Eyes</h1>
    <Switch>
      <Route exact path="/" component={MatchsCats} />
      <Route path="/results" component={ResultsCats} />
    </Switch>
  </div>
);

export default App;
