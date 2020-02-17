import React from 'react';

function CreateCVButton({text, link}) {
    return (
        <a className="button-line" href={link}>{text}</a>
    );
  }
  
  export default CreateCVButton;