import React, { useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState( [{ project_name: '', project_details: '', responsibilities: '', duration: '' }] );

    const addprojects = (e) => {
        e.preventDefault();
        setProjects([...projects, { company: '', project_details: '', responsibilities: '', duration: '' }]);
    };

    const deleteprojects = (index) => {
        let newList = projects.filter((_, i) => i !== index);
        setProjects(newList);
    };

    return (
        <div className="projects">
            {projects.map((data, index) => 
                <React.Fragment key={index}>
                    <div className="form-item">
                        <label name="name">Project Name</label>
                        <input type="text" name="project_name" value={data.project_name} placeholder="Project Name" /><br/>
                    </div>

                    <div className="form-item">
                        <label name="name">Details</label>                        
                        <textarea
                        name="project_details"
                        value={data.project_details}
                        placeholder="Summery of your Project"
                      />
                    </div>

                    <div className="form-item">
                        <label name="name">Responsibilities</label>
                        <input type="text" name="responsibilities" value={data.responsibilities} placeholder="Your Responsibilities" /><br/>
                    </div>
                    
                    <div className="form-item">
                      <input type="checkbox" name="running" value="check" id="running" /> Working Presently
                    </div>

                    <button onClick={()=>deleteprojects(index)}>X</button>
                </React.Fragment>
            )}

                <div className="addprojects">
                    <button onClick={ addprojects }>+</button>
                </div>
            
        </div>
    )
}
export default Projects;