import React from "react";

const Objectives = (props) => {

  const handleObjective = event => {
    props.states.setObjectives({
      objective: event.target.value,
      name: props.states.objectives.name
    });
  }

  return (
    <div className="objectives">
      <div className="form-item">
        <label name="objective">Objective</label>
        <textarea
          name="objective"
          value={props.states.objectives.objective}
          onChange={ event => handleObjective(event) }
          placeholder="Write Career Objectives"
        />
        <br />
        {props.states.objectiveError.objective.length > 0 && (
          <div className="errors">
            <ul>
              {props.states.objectiveError.objective.map(error => (
                <li> {error} </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Objectives;
