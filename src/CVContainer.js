import React, { useState } from "react";
import { Container, GeneratorButton } from "./styles/CVContainterStyle";

const CVContainer = () => {
  const [cvGenerated, setCvGenerated] = useState(false);

  const handleClick = () => {
    setCvGenerated(true);
  };

  return (
    <Container>
      <GeneratorButton onClick={() => handleClick()} disabled={cvGenerated}>
        {cvGenerated ? "Done" : "Generate CV"}
      </GeneratorButton>
      {cvGenerated && <p>CV Generated</p>}
    </Container>
  );
};

export default CVContainer;
