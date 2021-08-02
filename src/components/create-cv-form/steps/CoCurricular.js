import React, { useState } from "react";

const CoCurricular = () => {
    const [activity, setActivity] = useState( [{ activity: '' }] );

    const addactivity = (e) => {
        e.preventDefault();
        setActivity([...activity, { activity: '' }]);
    };

    const deleteactivity = (index) => {
        let newList = activity.filter((_, i) => i !== index);
        setActivity(newList);
    };

    return (
        <div className="activity">
            {activity.map((data, index) => 
                <React.Fragment key={index}>
                    <div className="form-item">
                        <label name="name">Activity</label>
                        <input type="text" name="activity" value={data.activity} placeholder="Exp: Social Volunteery" /><br/>
                    </div>                    

                    <button onClick={()=>deleteactivity(index)}>X</button>
                </React.Fragment>
            )}

                <div className="addactivity">
                    <button onClick={ addactivity }>+</button>
                </div>
            
        </div>
    )
}
export default CoCurricular;