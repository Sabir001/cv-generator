import React, { useState } from "react";

const Skills = () => {
    const [skill, setSkill] = useState( [{ type: '', skill: '' }] );

    const addSkill = (e) => {
        e.preventDefault();
        setSkill([...skill, { type: '', skill: '' }]);
    };

    const deleteSkill = (index) => {
        let newList = skill.filter((_, i) => i !== index);
        setSkill(newList);
    };

    return (
        <div className="skill">
            {skill.map((data, index) => 
                <React.Fragment key={index}>
                    <div className="form-item">
                        <label name="name">Type</label>
                        <select id="skill_type">
                          <option value="">Select a Skill Type</option>
                          <option value="acc_fin">Accounting and Finance</option>
                          <option value="sal_mar">Sales and Marketing</option>
                          <option value="it">Information Technology</option>
                          <option value="agr">Agriculture</option>
                        </select>
                        <br/>
                    </div>

                    <div className="form-item">
                        <label name="name">Skills</label>
                        <input type="text" name="skill" value={data.degree} placeholder="Exp: Accounting, Tax Calculation" /><br/>
                    </div>

                    <button onClick={()=>deleteSkill(index)}>X</button>
                </React.Fragment>
            )}

                <div className="addSkill">
                    <button onClick={ addSkill }>+</button>
                </div>
            
        </div>
    )
}
export default Skills;