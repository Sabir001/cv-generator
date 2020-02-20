import React, { useState } from "react";
import { Container } from "./styles/CVContainterStyle";
import CVBody from "./CVBody";
import PersonalInfo from "./PersonalInfo";

const CVContainer = () => {
  const [cvGenerated, setCvGenerated] = useState(false);

  const handleClick = () => {
    setCvGenerated(true);
  };

  return (
    <Container>
      <PersonalInfo />
      <CVBody handleClick={handleClick} cvGenerated={cvGenerated} />
    </Container>
  );
};

export default CVContainer;
