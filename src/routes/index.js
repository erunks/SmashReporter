import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FighterContainer from '../containers/FighterContainer';
import StageContainer from '../containers/StageContainer';

const Routes = (passThroughProps) => (
    <Router>
      <Switch>
        <Route
          path="/"
          exact={ true }
          render={ (props) => (<div>hello</div>) }
        />
        <Route
          path="/fighters"
          exact={ true }
          render={ (props) => <FighterContainer/> }
        />
        <Route
          path="/stages/:legal?"
          exact={ true }
          render={ (props) => <StageContainer { ...{ ...props.match.params, ...passThroughProps } } /> }
        />
      </Switch>
    </Router>
);

export default Routes;
