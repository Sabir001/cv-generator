import React, { useState } from "react";
import {emptyCheck, lengthCheck, nameCheck, emailCheck} from '../../../assets/js/validation';

const PrimaryForm = (props) => {

  const handleName = event => {
    props.states.setPrimaryInfo(
      {
        name: event.target.value,
        email: props.states.primaryInfo.email,
        phone: props.states.primaryInfo.phone,
        links: [...props.states.primaryInfo.links]
      }
    );
  };

  const handleEmail = event => {    
    props.states.setPrimaryInfo(
      {
        name: props.states.primaryInfo.name,
        email: event.target.value,
        phone: props.states.primaryInfo.phone,
        links: [...props.states.primaryInfo.links]
      }
    );
  };

  const handlePhone = event => {
    props.states.setPrimaryInfo(
      {
        name: props.states.primaryInfo.name,
        email: props.states.primaryInfo.email,
        phone: event.target.value,
        links: [...props.states.primaryInfo.links]
      }
    );
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

    props.states.setPrimaryInfo(
      {
        name: props.states.primaryInfo.name,
        email: props.states.primaryInfo.email,
        phone: props.states.primaryInfo.phone,
        links: newLink
      }
    );
  };

  const addLink = e => {
    e.preventDefault();
    props.states.setPrimaryInfo(
      {
        name: props.states.primaryInfo.name,
        email: props.states.primaryInfo.email,
        phone: props.states.primaryInfo.phone,
        links: [...props.states.primaryInfo.links, { name: "", url: "" }]
      }
    );
  };

  const deleteLink = index => {
    let newLinks = props.states.primaryInfo.links.filter((_, i) => i !== index);
    props.states.setPrimaryInfo(
      {
        name: props.states.primaryInfo.name,
        email: props.states.primaryInfo.email,
        phone: props.states.primaryInfo.phone,
        links: newLinks
      }
    );
  };

  
  // //Name Validation
  // const validateName = (value) => {
  //   let nameError = [];
  //   if (!emptyCheck(value)) {
  //     nameError = [...nameError, "Name shouldn't be empty."];
  //   }
  //   if (!lengthCheck(value, 4, 30)) {
  //     nameError = [
  //       ...nameError,
  //       "Name should be minimum 4 and maximum 30 words."
  //     ];
  //   }
  //   if (!nameCheck(value)) {
  //     nameError = [...nameError, "The name you provided is not valid."];
  //   }
  //   return nameError;
  // };

  // //Email Validation
  // const validateEmail = (value) => {
  //   let emailError = [];
  //   if (!emptyCheck(value)) {
  //     emailError = [...emailError, "Email shouldn't be empty."];
  //   }
  //   if (!emailCheck(value)) {
  //     emailError = [...emailError, "The Email you provided is not valid."];
  //   }
  //   return emailError;
  // };

  // //Phone Validation
  // const validatePhone = (value) => {
  //   let phoneError = [];
  //   if (!emptyCheck(value)) {
  //     phoneError = [...phoneError, "Phone Number shouldn't be empty."];
  //   }
  //   return phoneError;
  // };

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
        {/* {errors.nameError.length > 0 && (
          <div className="errors">
            <ul>
              {errors.nameError.map(error => (
                <li> {error} </li>
              ))}
            </ul>
          </div>
        )} */}
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
        {/* {errors.emailError.length > 0 && (
          <div className="errors">
            <ul>
              {errors.emailError.map(error => (
                <li> {error} </li>
              ))}
            </ul>
          </div>
        )} */}
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
        {/* {errors.phoneError.length > 0 && (
          <div className="errors">
            <ul>
              {errors.phoneError.map(error => (
                <li> {error} </li>
              ))}
            </ul>
          </div>
        )} */}
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

      {/* <div className="submit_button">
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>       */}

    </div>
  );
};

export default PrimaryForm;
