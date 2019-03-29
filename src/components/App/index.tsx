import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../styled/theme';
import Posts from '../Posts';
import R from '../R';
import GlobalStyles from '../../styled/globals';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/r/:slug" component={R} />
            </Switch>
          </Router>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
