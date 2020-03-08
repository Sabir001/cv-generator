import React, { useState } from "react";
import {emptyCheck, lengthCheck, nameCheck, emailCheck} from '../../assets/js/validation';

const getNavStyles = (indx, length) => {
  let styles = [];

  for (let i = 0; i < length; i++) {
    styles.push(i < indx ? "done" : i === indx ? "doing" : "todo");
  }

  return styles;
};

const getButtonsState = (indx, length) => {
  return {
    showPreviousBtn: indx > 0 && indx < length - 1 ? true : indx !== 0,
    showNextBtn: indx > 0 && indx < length - 1 ? true : indx === 0
  };
};

function MultiStep(props) {
  let [stylesState, setStyles] = useState(getNavStyles(0, props.steps.length));

  let [compState, setComp] = useState(0);

  let [buttonsState, setButtons] = useState(
    getButtonsState(0, props.steps.length)
  );

  function setStepState(indx) {
    setStyles(getNavStyles(indx, props.steps.length));
    setComp(indx < props.steps.length ? indx : compState);
    setButtons(getButtonsState(indx, props.steps.length));
  }

  //Next Step Button Click Function
  const next = () => {
    //Validation check for Personal Step
    if ( props.steps[compState].name == 'Personal' ) {
      const name = props.formValues.primaryInfo.name;
      const email = props.formValues.primaryInfo.email;
      const phone = props.formValues.primaryInfo.phone;
      let primaryError = false;

      // //Name Validation
      const validateName = (value) => {
        let nameError = [];
        if (!emptyCheck(value)) {
          nameError = [...nameError, "Name shouldn't be empty."];
        }
        if (!lengthCheck(value, 4, 30)) {
          nameError = [
            ...nameError,
            "Name should be minimum 4 and maximum 30 words."
          ];
        }
        if (!nameCheck(value)) {
          nameError = [...nameError, "The name you provided is not valid."];
        }
        if ( nameError.length > 0 ) {
          primaryError = true;
        }
        return nameError;
      };

      //Email Validation
      const validateEmail = (value) => {
        let emailError = [];
        if (!emptyCheck(value)) {
          emailError = [...emailError, "Email shouldn't be empty."];
        }
        if (!emailCheck(value)) {
          emailError = [...emailError, "The Email you provided is not valid."];
        }
        if ( emailError.length > 0 ) {
          primaryError = true;
        }
        return emailError;
      };

      //Phone Validation
      const validatePhone = (value) => {
        let phoneError = [];
        if (!emptyCheck(value)) {
          phoneError = [...phoneError, "Phone Number shouldn't be empty."];
        }
        if ( phoneError.length > 0 ) {
          primaryError = true;
        }
        return phoneError;
      };

      props.error.setPrimaryError( //Personal info errors set to state
        {
          nameError: validateName(name),
          emailError: validateEmail(email),
          phoneError: validatePhone(phone),
        }
      );

      if (primaryError) {
        return false;
      }
    }

    //Validation check for Objectives Step
    if ( props.steps[compState].name == 'Objectives' ) { //Validation check for Objectives Step
      const objectiveValue = props.formValues.objectives.objective;
      const validateObjective = (value) => {
        let objectiveError = [];
        if (!emptyCheck(value)) {
          objectiveError = [...objectiveError, "Please write your career objective"];
        }

        if (!lengthCheck(value, 30, 150)) {
          objectiveError = [
            ...objectiveError,
            "Name should be minimum 30 and maximum 150 words."
          ];
        }
        return objectiveError;
      };
      props.error.setObjectiveError(
        {
          objective: validateObjective(objectiveValue)
        }
      ); //Object errors set to state
      if (validateObjective(objectiveValue).length > 0) { //if has error, next step won't show
        return false;
      }
    }
    setStepState(compState + 1)
  };

  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  const handleKeyDown = evt =>
    evt.which === 13 ? next(props.steps.length) : {};

  const handleOnClick = evt =>
    setStepState(
      evt.currentTarget.value === props.steps.length - 1 &&
        compState === props.steps.length - 1
        ? props.steps.length
        : evt.currentTarget.value
    );

  const renderSteps = () => {
    return props.steps.map(function(s, i) {
      return (
        <li
          onClick={handleOnClick}
          key={i}
          value={i}
          className={`progtrckr-${stylesState[i]}`}
        >
          <em>{i + 1}</em>
          <span>{props.steps[i].name}</span>
        </li>
      );
    });
  };

  return (
    <div className="container" onKeyDown={handleKeyDown}>
      <ol className="progtrckr">{renderSteps()}</ol>
      {props.steps[compState].component}
      <div
        className="step-buttons"
        style={{ display: !props.showNavigation && "none" }}
      >
        <button
          className="previous"
          style={{ display: !buttonsState.showPreviousBtn && "none" }}
          onClick={previous}
        >
          Previous
        </button>
        <button
          className="next"
          style={{ display: !buttonsState.showNextBtn && "none" }}
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}
MultiStep.defaultProps = {
  showNavigation: true
};

export default MultiStep;