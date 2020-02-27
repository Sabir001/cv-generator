import React from "react";
import { Link } from "react-router-dom";
import {
  LandingWrapper,
  LandingContent,
  LandingHeader,
  LandingButton
} from "../../styles/HomePageStyle";

function LandingMain() {
  return (
    <LandingWrapper>
      <LandingContent>
        <LandingHeader>CV Generator</LandingHeader>

        <LandingButton>
          <Link to="/create">
            <button>Create Now</button>
          </Link>
          <Link to="/templates">
            <button>Templates</button>
          </Link>
        </LandingButton>
      </LandingContent>
    </LandingWrapper>
  );
}

export default LandingMain;