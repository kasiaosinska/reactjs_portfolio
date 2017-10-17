import React, {Component} from 'react';
import '../styles/services.scss';
import {Col} from "react-bootstrap";

class Service extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <Col xs={12} md={4} lg={4}>
                <div className="service-box">
                    <img width="60" src={this.props.image} />
                    <p>{this.props.text}</p>
                </div>
            </Col>
        )
    }
}

export default Service;