import React from "react";
import { repeatFormValidation } from "../../../assets/js/validation";

const PrimaryForm = props => {
  const handleName = event => {
    props.states.setPrimaryInfo({
      name: event.target.value,
      email: props.states.primaryInfo.email,
      phone: props.states.primaryInfo.phone,
      links: [...props.states.primaryInfo.links]
    });
  };

  const handleEmail = event => {
    props.states.setPrimaryInfo({
      name: props.states.primaryInfo.name,
      email: event.target.value,
      phone: props.states.primaryInfo.phone,
      links: [...props.states.primaryInfo.links]
    });
  };

  const handlePhone = event => {
    props.states.setPrimaryInfo({
      name: props.states.primaryInfo.name,
      email: props.states.primaryInfo.email,
      phone: event.target.value,
      links: [...props.states.primaryInfo.links]
    });
  };

  const handleLinks = (event, index, type) => {
    let newLink = [...props.states.primaryInfo.links];
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

    props.states.setPrimaryInfo({
      name: props.states.primaryInfo.name,
      email: props.states.primaryInfo.email,
      phone: props.states.primaryInfo.phone,
      links: newLink
    });
  };

  const addLink = e => {
    e.preventDefault();
    let index = props.states.primaryInfo.links.length;
    let lastValues = props.states.primaryInfo.links[index - 1];
    var arrayValue = Object.keys(lastValues);
    let error = repeatFormValidation(arrayValue);
    console.log("Error", error);
    

    props.states.setPrimaryInfo(
      error
        ? null
        : {
            name: props.states.primaryInfo.name,
            email: props.states.primaryInfo.email,
            phone: props.states.primaryInfo.phone,
            links: [...props.states.primaryInfo.links, { name: "", url: "" }]
          }
    );
  };

  const deleteLink = index => {
    let newLinks = props.states.primaryInfo.links.filter((_, i) => i !== index);
    props.states.setPrimaryInfo({
      name: props.states.primaryInfo.name,
      email: props.states.primaryInfo.email,
      phone: props.states.primaryInfo.phone,
      links: newLinks
    });
  };

  return (
    <div className="personal-info">
      <div className="form-item">
        <label name="name">Name</label>
        <input
          type="text"
          name="name"
          value={props.states.primaryInfo.name}
          onChange={event => handleName(event)}
          placeholder="Your Name"
        />
        <br />
        {props.states.primaryError.nameError.length > 0 && (
          <div className="errors">
            <ul>
              {props.states.primaryError.nameError.map(error => (
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
          value={props.states.primaryInfo.email}
          onChange={event => handleEmail(event)}
          placeholder="Your Email"
        />
        <br />
        {props.states.primaryError.emailError.length > 0 && (
          <div className="errors">
            <ul>
              {props.states.primaryError.emailError.map(error => (
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
          value={props.states.primaryInfo.phone}
          onChange={event => handlePhone(event)}
          placeholder="Your Phone Number"
        />
        <br />
        {props.states.primaryError.phoneError.length > 0 && (
          <div className="errors">
            <ul>
              {props.states.primaryError.phoneError.map(error => (
                <li> {error} </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="form-item">
        <label name="link">Important Links</label>

        {props.states.primaryInfo.links.map((link, index) => (
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
    </div>
  );
};

export default PrimaryForm;
