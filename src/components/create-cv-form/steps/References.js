import React, { useState } from "react";

const References = () => {
    const [reference, setReference] = useState( [{ name: '', company: '', designation: '', email: '', phone: '' }] );

    const addreference = (e) => {
        e.preventDefault();
        setReference([...reference, { name: '', company: '', designation: '', email: '', phone: '' }]);
    };

    const deletereference = (index) => {
        let newList = reference.filter((_, i) => i !== index);
        setReference(newList);
    };

    return (
        <div className="reference">
            {reference.map((data, index) => 
                <React.Fragment key={index}>

                  <div className="form-item">
                      <label name="name">Name</label>
                      <input type="text" name="name" value={data.name} placeholder="Reference Person Name" /><br/>
                  </div>

                    <div className="form-item">
                        <label name="name">Company</label>
                        <input type="text" name="company" value={data.company} placeholder="Company Name" /><br/>
                    </div>

                    <div className="form-item">
                        <label name="name">Designation</label>
                        <input type="text" name="Designation" value={data.designation} placeholder="Exp: Software Engineer" /><br/>
                    </div>

                    <div className="form-item">
                        <label name="name">Email Address</label>
                        <input type="email" name="email" value={data.email} placeholder="Exp: john@doe.com" /><br/>
                    </div>
                    
                    <div className="form-item">
                        <label name="phone">Phone Number</label>
                        <input type="text" name="phone" value={data.phone} placeholder="Phone Number" /><br/>
                    </div>

                    <button onClick={()=>deletereference(index)}>X</button>

                </React.Fragment>
            )}

                <div className="addreference">
                    <button onClick={ addreference }>+</button>
                </div>
            
        </div>
    )
}
export default References;