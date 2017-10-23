import React, {Component} from 'react';
import './styles/services.scss';
import {Grid, Row} from 'react-bootstrap';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            text: 'Enter message',
        }
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value});
    };

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    };

    handleChangeText = (event) => {
        this.setState({text: event.target.value});
    };

    handleSubmit = (event) => {
        console.log('dane' + this.state.name + this.state.email + this.state.text)
        event.preventDefault();
    };

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input name="name" value={this.state.name} onChange={this.handleChangeName}/>
                    </label>
                    <label>
                        E-mail:
                        <input name="email" value={this.state.email} onChange={this.handleChangeEmail}/>
                    </label>
                    <label>
                        Enter message:
                        <textarea name="text" value={this.state.text} onChange={this.handleChangeText}/>
                    </label>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        )
    }
}

export default ContactForm;