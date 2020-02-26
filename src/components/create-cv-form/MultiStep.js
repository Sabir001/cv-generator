import React, { useState } from "react";

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }

  let _arr = [];
  let _n = true;
  let _d = false;
  let _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

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
  let _useState = useState(getNavStyles(0, props.steps.length)),
    _useState2 = _slicedToArray(_useState, 2),
    stylesState = _useState2[0],
    setStyles = _useState2[1];

  let _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    compState = _useState4[0],
    setComp = _useState4[1];

  let _useState5 = useState(getButtonsState(0, props.steps.length)),
    _useState6 = _slicedToArray(_useState5, 2),
    buttonsState = _useState6[0],
    setButtons = _useState6[1];

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