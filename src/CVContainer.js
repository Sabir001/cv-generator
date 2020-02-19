import React, { useState } from "react";
import { Container } from "./styles/CVContainterStyle";
import CVBody from "./CVBody";
import PersonalInfoForm from "./personalInfo";

const CVContainer = () => {
  // const [cvGenerated, setCvGenerated] = useState(false);
  // const [data, setData] = useState([]);
  //
  // const handleClick = () => {
  //   setCvGenerated(true);
  // };

  const  [name, setName] = useState("");
  const  [email, setEmail] = useState("");
  const  [phone, setPhone] = useState("");
  const  [btnState, setBtnState] = useState(false);
  const  [impLink, setImpLink] = useState([]);

  const handel = () => {
    setBtnState(true);
    setName(name);
    setEmail(email);
    setPhone(phone);

  };
  const handelImpLink = (index,type,value) => {

    if (type ==='link') {
      impLink[index][0].link = value;
    }
    if (type ==='type') {
      impLink[index][0].type = value;
    }
    setImpLink(impLink);

  };
  const addLinks = () => {

    setImpLink([...impLink,[{type:"",link:""}]]);

  };

  const removeLink = (index) => {

    // impLink.splice(index, 1);
    // var array = [...impLink];
    // setImpLink(array);
    //  var arr = impLink.splice(index,1)
    //  setImpLink(arr);
    //var array = impLink.slice(0,index).concat(impLink.slice(index+1,impLink.length));
   // console.log(array);

   // setImpLink([...array]);
   //  this.setState(state => {
   //    const list = impLink.filter((item, j) => index !== j);
   //    return {
   //      list,
   //    };
   //  });
    var arr = impLink.filter((item, j) => index !== j);
    setImpLink(arr);
    console.log(arr);
    console.log(impLink);

  };

  return (
    <Container>
      {/*<CVBody handleClick={handleClick} cvGenerated={cvGenerated} />*/}
      <PersonalInfoForm removeLink={removeLink} addLinks={addLinks} impLink={impLink} handelImpLink={handelImpLink} btnState={btnState} name={name} email={email} phone={phone} setName={setName} setEmail={setEmail} setPhone={setPhone} handel={handel}/>
    </Container>
  );
};

export default CVContainer;
