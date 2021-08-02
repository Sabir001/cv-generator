import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import logo from "./assets/images/logo.svg";

import {
  AppContainer,
  AppHeader,
  AppHeaderCenter,
  AppLogo,
  AppTitle,
  BodyContainer
} from "./styles/HomePageStyle";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <AppContainer>
      <Router>
        <AppHeader>
          <AppHeaderCenter>
            <Link to="/">
              <AppLogo src={logo} alt="logo" />
            </Link>

            <AppTitle>CV Generator</AppTitle>
          </AppHeaderCenter>
        </AppHeader>
        <BodyContainer>
          <App />
        </BodyContainer>
      </Router>
    </AppContainer>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
