import React, { useState } from "react";
import {emptyCheck, lengthCheck, nameCheck, emailCheck} from '../../../assets/js/validation';

const PrimaryForm = ({errors, setErrors}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [links, setLinks] = useState([{ name: "", url: "" }]);
  const [submit, setSubmit] = useState(false);

  const handleName = event => {
    setName(event.target.value);
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePhone = event => {
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

  const addLink = e => {
    e.preventDefault();
    setLinks([...links, { name: "", url: "" }]);
  };

  const deleteLink = index => {
    let newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  
  //Name Validation
  let validateName = (value) => {
    let nameError = [];
    if (!emptyCheck(value)) {
      nameError = [...nameError, "Name shouldn't be empty."];
    }
    if (!lengthCheck(value, 4, 30)) {
      nameError = [
        ...nameError,
        "Name should be minimum 4 and maximum 30 words."
      ];
    }
    if (!nameCheck(value)) {
      nameError = [...nameError, "The name you provided is not valid."];
    }
    return nameError;
  };

  //Email Validation
  let validateEmail = (value) => {
    let emailError = [];
    if (!emptyCheck(value)) {
      emailError = [...emailError, "Email shouldn't be empty."];
    }
    if (!emailCheck(value)) {
      emailError = [...emailError, "The Email you provided is not valid."];
    }
    return emailError;
  };

  //Phone Validation
  let validatePhone = (value) => {
    let phoneError = [];
    if (!emptyCheck(value)) {
      phoneError = [...phoneError, "Phone Number shouldn't be empty."];
    }
    return phoneError;
  };

  const handleSubmit = e => {
    e.preventDefault();

    //Set Errors
    setErrors({
      nameError: validateName(name),
      emailError: validateEmail(email),
      phoneError: validatePhone(phone)
    });

    setSubmit(true);
  };

  return (
    <div className="personal-info">
      <div className="form-item">
        <label name="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => handleName(event)}
          placeholder="Your Name"
        />
        <br />
        {errors.nameError.length > 0 && (
          <div className="errors">
            <ul>
              {errors.nameError.map(error => (
                <li> {error} </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="form-item">
        <label name="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => handleEmail(event)}
          placeholder="Your Email"
        />
        <br />
        {errors.emailError.length > 0 && (
          <div className="errors">
            <ul>
              {errors.emailError.map(error => (
                <li> {error} </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="form-item">
        <label name="phone">Phone</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={event => handlePhone(event)}
          placeholder="Your Phone Number"
        />
        <br />
        {errors.phoneError.length > 0 && (
          <div className="errors">
            <ul>
              {errors.phoneError.map(error => (
                <li> {error} </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="form-item">
        <label name="link">Important Links</label>

        {links.map((link, index) => (
          <React.Fragment key={index}>
            <div className="important_links">
              <div className="name">
                <label name="linkName">Name</label>
                <input
                  type="text"
                  value={link.name}
                  onChange={event => handleLinks(event, index, "name")}
                  placeholder="Facebook"
                />
              </div>
              <div className="name">
                <label name="linkValue">URL</label>
                <input
                  type="text"
                  value={link.url}
                  onChange={event => handleLinks(event, index, "url")}
                  placeholder="https://www.facebook.com"
                />
              </div>
              <button onClick={() => deleteLink(index)}>X</button>
            </div>
          </React.Fragment>
        ))}
        <div className="addlink">
          <button onClick={addLink}>+</button>
        </div>
      </div>

      <div className="submit_button">
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {submit && (
        <div>
          {name && <p>Name: {name}</p>}

          {email && <p>Email: {email}</p>}

          {phone && <p>Phone: {phone}</p>}

          {links.length > 0 && (
            <p>
              Important Links:
              <br />
              {links.map(link => (
                <span>
                  <strong> {link.name} </strong>: {link.url}
                </span>
              ))}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PrimaryForm;
