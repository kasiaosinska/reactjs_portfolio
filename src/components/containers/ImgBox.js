import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import '../styles/projects.css';

class ImgBox extends Component {
    render() {

        let style = {
            backgroundImage: `url(${this.props.img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center center'
        };

        return (
            <Col xs={12} md={6} lg={4}>
                <a href={this.props.link} target="_blank"><div className="img-box" style={style}></div></a>
            </Col>
        )
    }
}

export default ImgBox;