import React from "react";
import { createGlobalStyle } from "styled-components";
import CVContainer from "./CVContainer";
import SimpleForm from './components/SimpleForm'
import {
  AppContainer,
  AppHeader,
  AppHeaderCenter,
  AppLogo,
  AppTitle,
  BodyContainer
} from "./styles/HomePageStyle";
import logo from "./logo.svg";

const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppContainer>
        <AppHeader>
          <AppHeaderCenter>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>CV Generator</AppTitle>
          </AppHeaderCenter>
        </AppHeader>
        <SimpleForm />
        <BodyContainer>
          <CVContainer />
        </BodyContainer>
      </AppContainer>
    </React.Fragment>
  );
}

export default App;
