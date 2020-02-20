import React, { useState } from "react";
import { Container } from "./styles/CVContainterStyle";
import CVBody from "./CVBody";
import PersonalInfo from "./PersonalInfo";

const CVContainer = () => {
  const [cvGenerated, setCvGenerated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [importantLinks, setImportantLinks] = useState([{ name: "", url: "" }]);

  const changeLinks = (e, index, type) => {
    let newLinks = [...importantLinks];
    newLinks.map((item, i) => {
      if (i === index) {
        if (type === "name") {
          item.name = e.target.value;
        } else {
          item.url = e.target.value;
        }
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

  const handleClick = () => {
    setCvGenerated(true);
  };

  return (
    <Container>
      <PersonalInfo
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        importantLinks={importantLinks}
        changeLinks={changeLinks}
        addLink={addLink}
        deleteLink={deleteLink}
      />
      <CVBody handleClick={handleClick} cvGenerated={cvGenerated} />
    </Container>
  );
};

export default CVContainer;
