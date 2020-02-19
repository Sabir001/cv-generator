import React from "react";
import { GeneratorButton } from "./styles/CVContainterStyle";

const CVBody = ({handleClick, cvGenerated}) => (
  <>
    <GeneratorButton
      onClick={() => handleClick()}
      disabled={cvGenerated}
    >
      {cvGenerated ? "Done" : "Generate CV"}
    </GeneratorButton>
    {cvGenerated && <p>CV Generated</p>}
  </>
);

export default CVBody;
