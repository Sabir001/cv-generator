import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import LandingMain from './components/landing-page/main';
import CreateCVForm from './components/create-cv-form/create-form';
import Test from './components/practice/test';
import TestFunc from './components/practice/testFunc';

import {
  AppContainer,
  AppHeader,
  AppHeaderCenter,
  AppLogo,
  AppTitle,
  BodyContainer
} from "./styles/HomePageStyle";
import logo from "./assets/images/logo.svg";

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
  const [createCv, setcreateCv] = useState({create: false, template: false});
  const handleCreateCV = () => {    
    setcreateCv({create: true});
  };

  const handleTemplate = () => {    
    setcreateCv({template: true});
  };
  

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
        <BodyContainer>

          {/* <Test /> */}

          {/* <TestFunc /> */}

          {createCv.create && <CreateCVForm/>}
          {!createCv.create && <LandingMain handleCreateCV={handleCreateCV} handleTemplate={handleTemplate} createCv={createCv} />}
        </BodyContainer>
      </AppContainer>
    </React.Fragment>
  );
}

export default App;
