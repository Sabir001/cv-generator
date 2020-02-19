import React from 'react';

function CreateCVButton({text, link, handleClick, createCv}) {
    console.log("createCv", createCv);
    return (
        <>
            <button onClick={() => handleClick()} className="button-line" href={link}>{text}</button>            
        </>
    );
  }
  
  export default CreateCVButton;