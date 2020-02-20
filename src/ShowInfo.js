import React, {useState} from "react";
import styled from "styled-components";


const Container = styled.div``;

const InfoContainer = ({name ,email, phone, links}) => {

    return (
        <Container>
            <div>
                <p>
                    <strong>Info</strong><br/>
                    Name: {name} <br/>
                    Email: {email} <br/>
                    Phone: {phone} <br/>
                    <strong>Links</strong>
                </p>
                <ul>
                    {links.map((link,index)=> <li key={`link- ${index}`}> {link.type}: {link.url} </li> )}
                </ul>
            </div>

        </Container>
    );
};

export default InfoContainer;
