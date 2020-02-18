import React from "react";
import styled from "styled-components";

const GeneratorButton = styled.button`
  padding: 1em;
`;

const Container = styled.div``;

const CVContainer = () => {
  return (
    <Container>
      <GeneratorButton>Generate CV</GeneratorButton>
    </Container>
  );
};

export default CVContainer;
