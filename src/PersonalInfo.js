import React, { useState } from "react";

const PersonalInfo = () => {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phone, setPhone] = useState(undefined);
  const [importantLinks, setImportantLinks] = useState([{ name: "", url: "" }]);

  const changeLinkName = (e, index) => {
    let newLinks = [...importantLinks];
    newLinks.map((item, i) => {
      console.log(index, i);
      if (i === index) {
        item.name = e.target.value;
      }
    });
    setImportantLinks(newLinks);
  };

  const changeLinkUrl = (e, index) => {
    let newLinks = [...importantLinks];
    newLinks.map((item, i) => {
      if (i === index) {
        item.url = e.target.value;
      }
    });
    setImportantLinks(newLinks);
  };

  const addLink = () => {
    setImportantLinks([...importantLinks, { name: "", url: "" }]);
  };

  const deleteLink = index => {
    let newLinks = importantLinks.filter((_, i) => i !== index);
    setImportantLinks(newLinks);
  };

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
            onChange={e => changeLinkName(e, index)}
          />
          <br />
          <input
            type="text"
            value={item.url}
            onChange={e => changeLinkUrl(e, index)}
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
