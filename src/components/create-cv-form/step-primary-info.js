import React, { useState } from "react";

const PrimaryForm = () => {
    const [name, setName] = useState({name: '', error: [] });
    const [email, setEmail] = useState({email: '', error: [] });
    const [phone, setPhone] = useState('');
    const [links, setLinks] = useState([{name: "", url: ""}]);
    const [submit, setSubmit] = useState(false);

    const handleName = (event) => {        
        setName({name: event.target.value, error: {}});
    };

    const handleEmail = (event) => {
        setEmail({email: event.target.value, error: {}});
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

    //Empty Validation Function
    const emptyCheck = (value) => {
        if (value.length < 1 ) {
            return false;
        }
        return true;
    };

    //Length Validation Check
    const lengthCheck = (value, minlength, maxLength) => {
        if (value.length <= minlength && value.length <= maxLength ) {
            console.log("ddd");
            return false;
        }
        return true;
    };

    //Name Validation Check
    const nameCheck = (name) => {
        if(/[!@#$%^&*(),.?":{}|<>]/g.test(name) || /\d+/g.test(name)) {
            return false;
        }
        return true;
    };

    //Email Validation Check
    const emailCheck = (email) => {
        if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) {
            return false;
        }
        return true;
    }

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
        let submit = true;

        //Name Validation
        let nameError = [];
        if ( !emptyCheck(name.name) ) {
            submit = false;
            nameError = [...nameError, 'Name shouldn\'t be empty.'];
        }
        if ( !lengthCheck(name.name, 4, 30) ) {
            submit = false;
            nameError = [...nameError, 'Name should be minimum 4 and maximum 30 words.'];
        }
        if ( !nameCheck(name.name) ) {
            submit = false;
            nameError = [...nameError, 'The name you provided is not valid.'];
        }
        setName({name: name.name, error: nameError });

        //Email Validation
        let emailError = [];
        if ( !emptyCheck(email.email) ) {
            submit = false;
            emailError = [...emailError, 'Email shouldn\'t be empty.'];
        }
        if ( !emailCheck(email.email) ) {
            submit = false;
            emailError = [...emailError, 'The Email you provided is not valid.'];
        }
        setEmail({email: email.email, error: emailError });

        if (submit) {
            setSubmit(true);
        }        
    };
    
    console.log("Name ", name);
    console.log("Email ", email);
    return (
        <div className="personal-info">
            <div>
                <label name="name">Name</label>
                <input type="text" name="name" value={name.name} onChange={event => handleName(event)} placeholder="Your Name" /><br/>
            </div>

            <div>
                <label name="email">Email</label>
                <input type="email" name="email" value={email.email} onChange={event => handleEmail(event)} placeholder="Your Email" /><br/>
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
                        <p>Name: {name.name}</p>
                    }

                    { email && 
                        <p>Email: {email.email}</p>
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
