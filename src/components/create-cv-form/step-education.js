import React, { useState } from "react";

const Education = () => {
    const [certificte, setCertificte] = useState( [{ institute: '', degree: '', result: '', year: '' }] );

    const addLink = (e) => {
        e.preventDefault();
        setCertificte([...certificte, { institute: '', degree: '', result: '', year: '' }]);
    };

    const deleteLink = (index) => {
        let newList = certificte.filter((_, i) => i !== index);
        setCertificte(newList);
    };

    return (
        <div className="education">
            {certificte.map((data, index) => 
                <React.Fragment key={index}>
                    <div className="form-item">
                        <label name="name">Institute</label>
                        <input type="text" name="institute" value={data.institute} placeholder="Institute Name" /><br/>
                    </div>

                    <div className="form-item">
                        <label name="name">Degree</label>
                        <input type="text" name="degree" value={data.degree} placeholder="Degree Name" /><br/>
                    </div>

                    <div className="form-item">
                        <label name="name">Result</label>
                        <input type="text" name="result" value={data.institute} placeholder="Your Result" /><br/>
                    </div>

                    <div className="form-item">
                        <label name="name">Year</label>
                        <input type="text" name="year" value={data.institute} placeholder="Passing Year" /><br/>
                    </div>
                    <button onClick={()=>deleteLink(index)}>X</button>
                </React.Fragment>
            )}

                <div className="addlink">
                    <button onClick={ addLink }>+</button>
                </div>
            
        </div>
    )
}
export default Education;