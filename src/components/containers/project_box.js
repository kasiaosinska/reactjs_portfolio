import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

class ProjectBox extends Component {
    render () {
        return (
            <Col xs={12} md={6} lg={4}>
                <div className="project-box">
                    <a href="#">
                        <div className="square"></div>
                        <p className="project-title">aaaaaaa</p>
                        <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid corporis dolor ducimus eveniet hic, impedit minima molestiae, nam nisi numquam, perferendis quasi qui quis rem repellat repellendus reprehenderit tempore.</p>
                    </a>
                </div>
            </Col>
        )
    }
}

export default ProjectBox;