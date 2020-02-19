import React from 'react';
import { GeneratorButton } from "./styles/CVContainterStyle";

const CVBody = ({cvGenerated, handleClick}) => {
    return(
        <React.Fragment>
            <GeneratorButton onClick={() => handleClick()} disabled={cvGenerated}>
                {cvGenerated ? "Done" : "Generate CV"}
            </GeneratorButton>
            
            {cvGenerated && <p>CV Generated</p>}
        </React.Fragment>
    )
}

export default CVBody;