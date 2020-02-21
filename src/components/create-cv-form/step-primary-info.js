import React, { useState } from "react";

const PrimaryForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [links, setLinks] = useState([{name: "", url: ""}]);
    const [submit, setSubmit] = useState(false);

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleLinks = (event, index, type) => {
        let newLink = [...links];
        newLink.map((item, i) => {
            if (i === index) {
                if (type === "name") {
                    item.name = event.target.value;
                }
                if (type === "url") {
                    item.url = event.target.value;
                }
            }
        });
        setLinks(newLink);
    };

    const addLink = (e) => {
        e.preventDefault();
        setLinks([...links, { name: "", url: "" }]);
    };

    const deleteLink = (index) => {
        let newLinks = links.filter((_, i) => i !== index);
        setLinks(newLinks);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };
    
    return (
        <div className="personal-info">
            <div>
                <label name="name">Name</label>
                <input type="text" name="name" value={name} onChange={event => handleName(event)} placeholder="Your Name" /><br/>
            </div>

            <div>
                <label name="email">Email</label>
                <input type="email" name="email" value={email} onChange={event => handleEmail(event)} placeholder="Your Email" /><br/>
            </div>

            <div>
                <label name="phone">Phone</label>
                <input type="text" name="phone" value={phone} onChange={event => handlePhone(event)} placeholder="Your Phone Number" /><br/>
            </div>

            <div>
                <label name="link">Important Links</label>

                {links.map((link, index) => (
                    <React.Fragment key={index}>
                    <div className="important_links">
                        <div className="name">
                            <label name="linkName">Name</label>
                            <input type="text" value={link.name} onChange={event => handleLinks(event, index, "name")} placeholder="Facebook" />
                        </div>
                        <div className="name">
                            <label name="linkValue">URL</label>
                            <input type="text" value={link.url} onChange={event => handleLinks(event, index, "url")} placeholder="https://www.facebook.com" />
                        </div>
                        <button onClick={()=>deleteLink(index)}>X</button>
                    </div>
                    </React.Fragment>
                ))}
                <button onClick={ addLink }>+</button>
            </div>
            
            <button className="button" onClick={handleSubmit}>Submit</button>

            {submit && 
                <div>
                    { name && 
                        <p>Name: {name}</p>
                    }

                    { email && 
                        <p>Email: {email}</p>
                    }

                    { phone && 
                       <p>Phone: {phone}</p>
                    }

                    { (links.length > 0) &&
                        <p>Important Links:<br/>
                            {links.map((link) => (
                                <span>
                                    <strong> {link.name} </strong>: {link.url}
                                </span>
                            ))}
                        </p>
                        
                    }
                </div>
            }
        </div>
    );
};

export default PrimaryForm;
