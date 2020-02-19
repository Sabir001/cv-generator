import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import CVContainer from "./CVContainer";
import LandingMain from './landing-page/main';
import CVPrimaryForm from './cv-form/primary-info';
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
  const [createCv, setcreateCv] = useState(false);
  const handleClick = () => {    
    setcreateCv(true);
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

          <CVPrimaryForm />

          {/* <CVContainer /> */}

          {!createCv && <LandingMain handleClick={handleClick} createCv={createCv} />}
          
          



        </BodyContainer>
      </AppContainer>
    </React.Fragment>
  );
}

export default App;
