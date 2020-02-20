import React, {useState} from "react";
import styled from "styled-components";
import InfoContainer from './ShowInfo';
import LinkFields from  './LinkFields';

const GeneratorButton = styled.button`
  padding: 1em;
`;
/*{
    type:"github",
        link: "fsghreoog.com"

}*/

const Container = styled.div``;

const PersonalInfo = () => {
    const [formSubmit, setFormSubmit] = useState(false),
        [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [phone, setPhone] = useState(''),
        [links, setLinks] = useState([{type:'ads',url:'asd'},{type:'12',url:'234'}]);

    const handleChange = () => {
        setFormSubmit(true);
    };

    const handleName = (e) =>{
        setName(e.target.value);
    };
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    };
    const handlePhone = (e) =>{
        setPhone(e.target.value);
    };
    const handleType = (e,i) => {
        const newLinks = [...links];
        newLinks[i].type = e.target.value;
        setLinks(newLinks);
    };
    const handleUrl = (e,i) => {
        const newLinks = [...links];
        newLinks[i].url = e.target.value;
        setLinks(newLinks);
    };
    const addLinks = () => {
        setLinks([...links,{type:'',url:''}]);
    };

    const  handleRemove = (index) => {
       const newLinks = [...links].filter((link, i) => index !== i);
       setLinks(newLinks);
    };

    return (
        <Container>
            <div className={'form-field'}>
                Name: <input type="text" name={'name'} onChange={(e) => handleName(e)} value={name}/>
            </div>
            <div className={'form-field'}>
                Email: <input type="email" name={'email'} onChange={(e) => handleEmail(e)} value={email}/>
            </div>
            <div className={'form-field'}>
                Phone: <input type="email" name={'email'} onChange={(e) => handlePhone(e)} value={phone}/>
            </div>
            <h4>Important link</h4>
            <LinkFields links={links} remove={handleRemove} handleType ={handleType} handleUrl={handleUrl}/>
            <br/>
            <button onClick={() => addLinks()}>+</button>
            <br/>
            <br/>
            <button type={"button"} onClick={() => handleChange()}>Submit</button>

            {formSubmit && <InfoContainer name={name} email={email} phone={phone} links={links}/>}
        </Container>
    );
};

export default PersonalInfo;
