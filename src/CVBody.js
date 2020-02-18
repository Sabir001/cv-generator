import React from "react";
import { GeneratorButton } from "./styles/CVContainterStyle";

const CVBody = props => (
  <>
    <GeneratorButton
      onClick={() => props.handleClick()}
      disabled={props.cvGenerated}
    >
      {props.cvGenerated ? "Done" : "Generate CV"}
    </GeneratorButton>
    {props.cvGenerated && <p>CV Generated</p>}
  </>
);

export default CVBody;
