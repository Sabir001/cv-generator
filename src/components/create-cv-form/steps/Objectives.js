import React, { useState } from "react";

const Objectives = () => {
    const [objective, setObjective] = useState("");
    const [submit, setSubmit] = useState(false);
    const [errors, setErrors] = useState({
        objectiveError: []
    });

    const handleObjective = event => {
        setObjective(event.target.value);
    };

    //Empty Validation Function
    const emptyCheck = value => {
        if (value.length < 1) {
            return false;
        }
        return true;
    };

    //Length Validation Check
    const lengthCheck = (value, minlength, maxLength) => {
        if (value.length <= minlength && value.length <= maxLength) {
            return false;
        }
        return true;
    };

    //Name Validation Check
    const objectiveCheck = name => {
        if (/[!@#$%^&*(),.?":{}|<>]/g.test(name) || /\d+/g.test(name)) {
            return false;
        }
        return true;
    };

    const handleSubmit = e => {
        e.preventDefault();
        let submit = true;

        //Name Validation
        let objectiveError = [];
        if (!emptyCheck(objective)) {
            submit = false;
            objectiveError = [...objectiveError, "objective shouldn't be empty."];
        }
        if (!lengthCheck(objective, 4, 30)) {
            submit = false;
            objectiveError = [
                ...objectiveError,
                "objective should be minimum 4 and maximum 30 words."
            ];
        }
        if (!objectiveCheck(objective)) {
            submit = false;
            objectiveError = [...objectiveError, "The objective you provided is not valid."];
        }

        //Set Errors
        setErrors({
            objectiveError: objectiveError
        });

        if (submit) {
            setSubmit(true);
        }
    };


    return (
    <div>
        <div className="form-item">
            <label>Objective</label>
            <textarea name="objective" cols="30" rows="10" value={objective}
                      onChange={event => handleObjective(event)}></textarea>
            <br />
            <div className="submit_button">
                <button className="button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            {errors.objectiveError.length > 0 && (
                <div className="errors">
                    <ul>
                        {errors.objectiveError.map(error => (
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

