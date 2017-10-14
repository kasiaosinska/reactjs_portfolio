import React, {Component} from 'react';
import './styles/about.css';
import {Grid, Row, Col} from 'react-bootstrap';

class About extends Component {
    render () {
        return (
            <Grid id="about-section">
                <Row>
                    <Col xs={12} md={6}>
                        <div className="text-wrapper">
                            <div className="border-top"></div>
                            <p className="title">Lorem ipsum dolor sit amet, consectetur.</p>
                            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur cum cupiditate debitis distinctio dolores dolorum, ea esse facilis illo modi neque omnis rerum sapiente, sit soluta tempora tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, animi asperiores corporis cupiditate, deserunt esse eveniet incidunt iusto minus molestias odit omnis possimus recusandae repudiandae sunt temporibus unde veritatis. Vero?</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="icon-wrapper"></div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default About