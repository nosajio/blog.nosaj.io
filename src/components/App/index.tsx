import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../styled/theme';
import Posts from '../Posts';
import R from '../R';
import GlobalStyles from '../../styled/globals';
import Masthead from '../Masthead';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
