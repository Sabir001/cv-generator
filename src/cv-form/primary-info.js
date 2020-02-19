import React, { useState } from "react";

const CVPrimaryForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [link, setLink] = useState('');
    // const [links, setLink] = useState([{name: '', url: ''}]);
    const [addLink, setAddLink] = useState(false);
    const [submit, setSubmit] = useState(false);

    const nameChange = (event) => {
        setName(event.target.value);
    };

    const emailChange = (event) => {
        setEmail(event.target.value);
    };

    const phoneChange = (event) => {
        setPhone(event.target.value);
    };

    const linkChange = (event) => {
        setLink(event.target.value);
    };

    const formSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };
    
    return (
        <div>
            <form>
                <p>
                    <label for="name">Name</label>
                    <input type="text" name="name" value={name} onChange={event => nameChange(event)} placeholder="Your Name" /><br/>
                </p>

                <p>
                    <label for="email">Email</label>
                    <input type="email" name="email" value={email} onChange={event => emailChange(event)} placeholder="Your Email" /><br/>
                </p>

                <p>
                    <label for="phone">Phone</label>
                    <input type="text" name="phone" value={phone} onChange={event => phoneChange(event)} placeholder="Your Phone Number" /><br/>
                </p>
                
                <p>
                    <label for="link">Important Links</label>
                    <input type="text" name="link" value={link} onChange={event => linkChange(event)} placeholder="Give URL" /><br/>
                </p>

                <p>
                    <label for="link">Important Links</label>
                    
                    <input type="text" name="link_name" value={link} onChange={event => linkChange(event)} placeholder="Give URL" /><br/>
                    {/* <input type="text" name="link_url" value={link} onChange={event => linkChange(event)} placeholder="Give URL" /><br/> */}
                </p>
                
                <button className="button" onClick={formSubmit}>Submit</button>
            </form>

            {submit && 
                <div>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Link: {link}</p>
                </div>
            }
        </div>
    );
};

export default CVPrimaryForm;
