import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from '../Posts';
import R from '../R';
import GlobalStyles from '../../styled/globals';
import Masthead from '../Masthead';
import theme, { themeMutator } from '../../styled/theme';
import ThemeProvider from '../../contexts/ThemeProviderContext';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} mutator={themeMutator}>
        <>
          <GlobalStyles />
          <Masthead />
          <Router>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/:slug" component={R} />
            </Switch>
          </Router>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
