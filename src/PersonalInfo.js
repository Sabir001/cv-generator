import React, { useState } from "react";

const PersonalInfo = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  importantLinks,
  changeLinks,
  addLink,
  deleteLink
}) => {
  return (
    <div>
      <label>Name: </label>
      <br />
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <label>Email: </label>
      <br />
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label>Phone: </label>
      <br />
      <input
        type="text"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <br />
      <br />
      <label>Important Link: </label>
      <br />
      {importantLinks.map((item, index) => (
        <React.Fragment key={index}>
          <input
            type="text"
            value={item.name}
            onChange={e => changeLinks(e, index, "name")}
          />
          <br />
          <input
            type="text"
            value={item.url}
            onChange={e => changeLinks(e, index, "url")}
          />
          <button onClick={() => deleteLink(index)}>X</button>
          {index !== importantLinks.length - 1 && <br />}
        </React.Fragment>
      ))}
      <br />
      <button onClick={() => addLink()}>+</button>
      <br />
    </div>
  );
};

export default PersonalInfo;
