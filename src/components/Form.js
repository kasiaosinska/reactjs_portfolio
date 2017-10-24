import React, {Component} from 'react';
import './styles/form.css'
import {Grid, Row, Col} from 'react-bootstrap';

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
        console.log('dane' + this.state.name + this.state.email + this.state.text);
        event.preventDefault();
    };

    render () {
        return (
            <div className="form__section">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <form className="form__section__wrapper" onSubmit={this.handleSubmit}>
                                <label className="form__section__label">
                                    Name:
                                    <input className="form__section__input" name="name" value={this.state.name} onChange={this.handleChangeName}/>
                                </label>
                                <label className="form__section__label">
                                    E-mail:
                                    <input className="form__section__input" name="email" value={this.state.email} onChange={this.handleChangeEmail}/>
                                </label>
                                <label className="form__section__label">
                                    Enter message:
                                    <textarea className="form__section__textarea" name="text" value={this.state.text} onChange={this.handleChangeText}/>
                                </label>
                                <input className="form__section__button" type="submit" value="Send"/>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default ContactForm;