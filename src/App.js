import React, { useState } from "react";
import LandingMain from "./components/landing-page/main";
import CreateCVForm from "./components/create-cv-form/CreateCVForm";

function App() {
  const [createCv, setcreateCv] = useState({ create: false, template: false });
  const handleCreateCV = () => {
    setcreateCv({ create: true });
  };

  const handleTemplate = () => {
    setcreateCv({ template: true });
  };

  return (
    <React.Fragment>
      {createCv.create && <CreateCVForm />}
      {!createCv.create && (
        <LandingMain
          handleCreateCV={handleCreateCV}
          handleTemplate={handleTemplate}
          createCv={createCv}
        />
      )}
    </React.Fragment>
  );
}

export default App;
