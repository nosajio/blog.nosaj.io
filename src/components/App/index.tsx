import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styled/theme";
import Posts from "../Posts";
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
          </Switch>
        </Router>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
