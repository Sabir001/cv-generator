import React, { useState, useEffect } from "react";
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
  const [primaryInfo, setPrimaryInfo] = useState(
    {
      name: "",
      email: "",
      phone: "",
      links: [{ name: "", url: "" }]
    }
  );

  const [objectives, setObjectives] = useState(
    {
      objective: ""
    }
  );

  // useEffect( () => {
  //   console.log("---", objectives);
  // }, [objectives]);
  const [submit, setSubmit] = useState(false);

  const [primaryError, setPrimaryError] = useState({
    nameError: [],
    emailError: [],
    phoneError: []
  });

  const [objectiveError, setObjectiveError] = useState({
    objective: []
  });

  const steps = [
    { name: "Personal", component: <PrimaryForm states={{primaryInfo, setPrimaryInfo, primaryError}} /> },
    { name: "Objectives", component: <Objectives states={{objectives, setObjectives, objectiveError}} /> },
    { name: "Education", component: <Education /> },
    { name: "Experience", component: <Experience /> },
    { name: "Skills", component: <Skills /> },
    { name: "Projects", component: <Projects /> },
    { name: "CoCurricular", component: <CoCurricular /> },
    { name: "References", component: <References /> }
  ];

  return (
    <div className="cf-steps">
      <MultiStep 
        steps={steps} 
        formValues={ { primaryInfo, objectives } } 
        error={{
          primaryError, 
          setPrimaryError,
          objectiveError,
          setObjectiveError
        }} 
      />

      {/* {submit && (
      <div>
        {name && <p>Name: {name}</p>}

        {email && <p>Email: {email}</p>}

        {phone && <p>Phone: {phone}</p>}

        {links.length > 0 && (
          <p>
            Important Links:
            <br />
            {links.map(link => (
              <span>
                <strong> {link.name} </strong>: {link.url}
              </span>
            ))}
          </p>
        )}
      </div>
    )} */}
    </div>
  );
};
export default CreateCVForm;
