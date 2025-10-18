import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

export default ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
  });
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>

        {/* createMemoryHistory not BrowserRouter as BrowserRouter must be used in the container only */}
        <Router history={history}>
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
