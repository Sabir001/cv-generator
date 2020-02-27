import React, { useState } from "react";

let getNavStyles = function getNavStyles(indx, length) {
  let styles = [];

  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push("done");
    } else if (i === indx) {
      styles.push("doing");
    } else {
      styles.push("todo");
    }
  }

  return styles;
};

let getButtonsState = function getButtonsState(indx, length) {
  if (indx > 0 && indx < length - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true
    };
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false
    };
  }
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

  let next = function next() {
    return setStepState(compState + 1);
  };

  let previous = function previous() {
    return setStepState(compState > 0 ? compState - 1 : compState);
  };

  let handleKeyDown = function handleKeyDown(evt) {
    return evt.which === 13 ? next(props.steps.length) : {};
  };

  let handleOnClick = function handleOnClick(evt) {
    if (
      evt.currentTarget.value === props.steps.length - 1 &&
      compState === props.steps.length - 1
    ) {
      setStepState(props.steps.length);
    } else {
      setStepState(evt.currentTarget.value);
    }
  };

  let renderSteps = function renderSteps() {
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
        style={
          props.showNavigation
            ? {}
            : {
                display: "none"
              }
        }
      >
        <button
          className="previous"
          style={
            buttonsState.showPreviousBtn
              ? {}
              : {
                  display: "none"
                }
          }
          onClick={previous}
        >
          Previous
        </button>
        <button
          className="next"
          style={
            buttonsState.showNextBtn
              ? {}
              : {
                  display: "none"
                }
          }
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
//# sourceMappingURL=index.js.map
