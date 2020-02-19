import React from 'react';

export default ({btnState,removeLink,impLink,addLinks,handelImpLink,handel,name,email,phone,setName,setEmail,setPhone}) => {


    return (
        <>
            <div className="row">
                Name : <input type="text"  placeholder="Title..."  value={name} onChange={(e) => setName(e.target.value)} /> <br/><br/>
                Email : <input type="text"  placeholder="Title..." value={email} onChange={(e) => setEmail(e.target.value)}/> <br/><br/>
                Phone : <input type="text"  placeholder="Title..." value={phone} onChange={(e) => setPhone(e.target.value)} /> <br/><br/>
            </div>

            <br/>
            <span> important links </span> <br/><br/>
            <div className="impLink">
                {/*{console.log(impLink)}*/}
                {
                    impLink.map( (impLink, index) => {
                        return (
                            <div key={index}>

                            Type: <input type="text" value={impLink.type} onChange={(e) => handelImpLink(index,'type', e.target.value)}  /> &nbsp;&nbsp;
                            Link: <input type="text" value={impLink.link} onChange={(e) => handelImpLink(index,'link', e.target.value)} /> &nbsp;&nbsp;
                            <button onClick={() => removeLink(index)}>delete link</button>
                                <br/><br/>
                            </div>
                        )
                    })
                }

            </div>
            <br/>
            <button onClick={() => addLinks()}>Add More link</button>
            <br/>
            <br/>
            <div className="row">
                <button onClick={() => handel()}>
                    Submit
                </button>
            </div>
            <br/>
            <br/>
            <br/>
            {btnState &&
            <p>
                Submitted!!
                <br/>
            Name: {name} <br/>
            Email: {email} <br/>
            Phone: {phone} <br/>

            </p>}

            </>
    );

}