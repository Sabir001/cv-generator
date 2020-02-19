import React, { useState } from "react";
import { Container } from "./styles/CVContainterStyle";
import CVBody from './CVBody';

const CVContainer = () => {
  const [cvGenerated, setCvGenerated] = useState(false);

  const handleClick = () => {
    setCvGenerated(true);
  };

  return (
    <Container>
      <CVBody cvGenerated={cvGenerated} handleClick={handleClick} />
    </Container>
  );
};

export default CVContainer;
