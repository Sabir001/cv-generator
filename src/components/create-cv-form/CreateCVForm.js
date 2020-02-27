import React from "react";
import MultiStep from "./MultiStep";
import PrimaryForm from "./steps/PrimaryForm";
import Objectives from "./steps/Objectives";
import Education from "./steps/Education";
import Experience from "./steps/Experience";
import Skills from "./steps/Skills";
import Projects from "./steps/Projects";
import CoCurricular from "./steps/CoCurricular";
import References from "./steps/References";
import "../../assets/css/multistep.css";
import "../../assets/css/validation.css";

const CreateCVForm = () => {
  const steps = [
    { name: "Personal", component: <PrimaryForm /> },
    { name: "Objectives", component: <Objectives /> },
    { name: "Education", component: <Education /> },
    { name: "Experience", component: <Experience /> },
    { name: "Skills", component: <Skills /> },
    { name: "Projects", component: <Projects /> },
    { name: "CoCurricular", component: <CoCurricular /> },
    { name: "References", component: <References /> }
  ];

  return (
    <div className="cf-steps">
      <MultiStep steps={steps} />
    </div>
  );
};
export default CreateCVForm;
