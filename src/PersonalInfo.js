import React, { Component } from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`

`;

const Label = styled.label`

`;

const SubmitButton = styled.input`
`;

class PersonalInfo extends Component {
    state = {
        name: '',
        email: '',
        number: '',
        links: []
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const number = this.refs.number.value;

        this.setState({
            name,
            email,
            number
        });

    }

    handleLinkField = (e) => {
        e.preventDefault();
        this.setState({
            links: this.state.links.concat({ url: undefined})
        });
    }

    handleLinkChange = (e, index) => {
        let value = e.target.value;

        let updatedLinks = [
            ...this.state.links
        ];

        updatedLinks[index] = value;

        this.setState({
            links: updatedLinks
        });
    }

    removeItem = (e, i) => {
        e.preventDefault();
        let updatedLinks =  [...this.state.links].filter( (item, index) => index !== i );
        this.setState({
            links: updatedLinks
        });
    }

    render() {
        return(
            <React.Fragment>
                <form ref="personalInfo" onSubmit={(e) => this.handleSubmit(e)}>
                    <FormGroup>
                        <Label>Name</Label>
                        <input type="text" ref="name" placeholder="Your Name" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Email</Label>
                        <input type="email" ref="email" placeholder="Your Email Address" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Phone</Label>
                        <input type="text" ref="number" placeholder="Your Phone Number" />
                    </FormGroup>

                    <FormGroup>
                        <Label>Important Links</Label>
                        { this.state.links.map((item, i) => (
                            <React.Fragment  key={`important_link_${i}`}>
                                <input onChange={(e) => this.handleLinkChange(e, i) } type="text" ref={`important_link_${i}`} value={this.state.links[i].url} /><button onClick={(e) => this.removeItem(e, i)}>X</button>
                            </React.Fragment>
                        ))}
                        <button onClick={(e) => {this.handleLinkField(e)}}>+</button>
                    </FormGroup>

                    <SubmitButton type="submit" value="Submit" />
                </form>
                
                { this.state.name !== '' && <div className="result">
                    Hi from {this.state.name}, my fake email is {this.state.email} and my fake number is {this.state.number}.
                </div>}
            </React.Fragment>
        )
    }
}

export default PersonalInfo;