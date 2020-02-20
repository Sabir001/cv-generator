import React from 'react';
import bgBanner from '../assets/images/cv-banner.jpg';
import '../assets/css/landing-page.css';
import CreateCVButton from './button';

function LandingMain({handleClick, createCv}) {
    const createButton = {text: 'Create Now', link: '#', createCv: createCv, handleClick: handleClick};
    const templateButton = {text: 'Templates', link: '#'};
    return (
      <div className="full-screen" style={{backgroundImage: "url(" + bgBanner + ")"}}>
        <div className="content">
          <h1>CV Generator</h1>

          <div className="buttons">
            <CreateCVButton {...createButton} />
            {/* <CreateCVButton {...templateButton} /> */}
          </div>

        </div>
      </div>
    );
  }
  
  export default LandingMain;