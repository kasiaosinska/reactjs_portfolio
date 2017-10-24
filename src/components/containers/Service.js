import React, {Component} from 'react';
import '../styles/services.css';
import {Col} from "react-bootstrap";

class Service extends Component {
    render () {
        return (
            <Col xs={12} md={4} lg={4}>
                <div className="service-box">
                    <img width="60" src={this.props.image} alt="img" />
                    <p className="subtitle">{this.props.text}</p>
                    <p className="text-description">{this.props.description}</p>
                </div>
            </Col>
        )
    }
}

export default Service;