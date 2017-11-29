import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import '../styles/projects.css';

class ProjectBox extends Component {
    render () {
        return (
            <Col xs={12} md={6}>
                <div className="project-box">
                    <div className="square"></div>
                    <p className="project-title">{this.props.title}</p>
                    <p className="project-description">{this.props.description}</p>
                    <p className="link-wrapper"><a href={this.props.link} target="_blank">Zobacz projekt</a></p>
                </div>
            </Col>
        )
    }
}

export default ProjectBox;