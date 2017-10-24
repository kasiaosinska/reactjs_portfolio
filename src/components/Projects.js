import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import './styles/projects.css';


import ProjectBox from './containers/ProjectBox';
import ImgBox from './containers/ImgBox';
import {Config} from "./configuration/global";

class Projects extends Component {
    constructor (props) {
        super(props);
        this.projects = Config.Projects;
    }

    renderProjects = (projects, i) => {
        return (
            <div>
                <ImgBox link={projects.link} img={projects.img} />
                <ProjectBox link={projects.link} title={projects.name} description={projects.text} />
            </div>
        );
    };

    render() {

        return (
            <div className="projects-wrapper">
                <p className="title">My <span className="text-color">latest</span> projects</p>
                <Grid>
                    <Row>
                        <div className="small-container">
                            {this.projects.map((projects, i) => {
                                return this.renderProjects(projects, i)
                            })}
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Projects;