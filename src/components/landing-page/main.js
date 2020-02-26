import React from 'react';
import {
  LandingWrapper,
  LandingContent,
  LandingHeader,
  LandingButton
} from "../../styles/HomePageStyle";

function LandingMain({handleCreateCV, handleTemplate}) {
    return (
      <LandingWrapper>
        <LandingContent>
          <LandingHeader>CV Generator</LandingHeader>

          <LandingButton>
            <button onClick={() => handleCreateCV()} className="button-line" href="#">Create Now</button>
            <button onClick={() => handleTemplate()} className="button-line" href="#">Templates</button>
          </LandingButton>

        </LandingContent>
      </LandingWrapper>
    );
  }
  
  export default LandingMain;