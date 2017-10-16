import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import ProjectBox from './containers/project_box';
import ImgBox from './containers/img_box';

class Projects extends Component {
    constructor (props) {
        super(props);
        this.projects = [{
            name: 'project1',
            text: 'project o...',
            link: 'www',
            img: 'www',
            size: {
                lg: 6,
                md: 6,
                sm: 12
            }
        },
            {
                name: 'project2',
                text: 'project o...',
                link: 'www',
                img: 'www',
                size: {
                    lg: 6,
                    md: 6,
                    sm: 12
                }
            }
        ];
        this.img = [{
            name: 'img1',
            img: 'www',
            size: {
                lg: 6,
                md: 6,
                sm: 12
            }
        },
            {
                name: 'img2',
                img: 'www',
                size: {
                    lg: 6,
                    md: 6,
                    sm: 12
                }
            }
        ]
    }



    render() {
        return (
            <div className="projects-wrapper">
                <Grid>
                    <Row>
                        <ImgBox />
                        <ProjectBox />
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Projects;