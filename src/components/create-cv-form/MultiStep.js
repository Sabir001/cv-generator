import React, { useState } from "react";

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

  const next = () => setStepState(compState + 1);

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
//# sourceMappingURL=index.js.map
