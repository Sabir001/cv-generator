import React, {useState} from "react";
import styled from "styled-components";

const GeneratorButton = styled.button`
  padding: 1em;
`;

const Container = styled.div``;

const CVContainer = () => {
    const [cvGenerated, setCvGenerated] = useState(false);

    const handleChange = () => {
        setCvGenerated(true);
    };

    return (
        <Container>
            <GeneratorButton
                onClick={() => handleChange()}
                disabled = { cvGenerated === true }> { cvGenerated ? 'Done' : 'Generate CV' }
            </GeneratorButton>
            {cvGenerated && <p>CV generated !!</p>}
        </Container>
    );
};

export default CVContainer;
