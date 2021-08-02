import React, { useState } from "react";

const Experience = () => {
    const [experience, setExperience] = useState( [{ company: '', position: '', responsibilities: '', duration: '' }] );

    const addExperience = (e) => {
        e.preventDefault();
        setExperience([...experience, { company: '', position: '', responsibilities: '', duration: '' }]);
    };

    const deleteExperience = (index) => {
        let newList = experience.filter((_, i) => i !== index);
        setExperience(newList);
    };

    return (
        <div className="experience">
            {experience.map((data, index) => 
                <React.Fragment key={index}>
                    <div className="form-item">
                        <label name="name">Company</label>
                        <input type="text" name="company" value={data.company} placeholder="Company Name" /><br/>
                    </div>

                    <div className="form-item">
                        <label name="name">Position</label>
                        <input type="text" name="position" value={data.position} placeholder="Exp: Software Engineer" /><br/>
                    </div>

                    <div className="form-item">
                        <label name="name">Responsibilities</label>
                        <input type="text" name="responsibilities" value={data.responsibilities} placeholder="Your Responsibilities" /><br/>
                    </div>

                    <div className="form-item">
                        <label name="name">Duration</label>
                        <input type="text" name="duration" value={data.duration} placeholder="Duration" /><br/>
                    </div>
                    
                    <div className="form-item">
                      <input type="checkbox" name="running" value="check" id="running" /> Working Presently
                    </div>

                    <button onClick={()=>deleteExperience(index)}>X</button>
                </React.Fragment>
            )}

                <div className="addExperience">
                    <button onClick={ addExperience }>+</button>
                </div>
            
        </div>
    )
}
export default Experience;