import React, {Component} from 'react';
import '../styles/projects.css';
import {Col} from 'react-bootstrap';

class ImgBox extends Component {
    render() {
        return (
            <Col xs={12} md={6} lg={4}>
                <div className="img-box" ></div>
            </Col>
        )
    }
}

export default ImgBox;