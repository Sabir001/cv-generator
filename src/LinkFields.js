import React from "react";

const LinkFields = ({links,remove,handleType,handleUrl}) => {
    return links.map((link,index) =>
        <div className='form-field' style={{marginBottom: 10}}>
            Type: <input type="text" name="type" value={link.type} onChange={(e) => handleType(e,index)}/> &nbsp;
            Url: <input type="text" name="url" value={link.url} onChange={(e) => handleUrl(e,index)}/>
            &nbsp; <button onClick={() => remove(index)}>X</button>
        </div>
    )
};

export default LinkFields;