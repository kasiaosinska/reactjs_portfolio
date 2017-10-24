import React, {Component} from 'react';
import './styles/services.css';
import {Grid, Row} from 'react-bootstrap';
import Coding from './images/coding.svg';
import Idea from './images/idea.svg';
import Design from './images/design.svg';

import Service from './containers/Service';

class Services extends Component {
    render () {
        return (
            <div className="services-wrapper">
                <Grid>
                    <Row>
                        <p className="title">Ser<span className="text-color">v</span>ices</p>
                        <Service image={Idea} text={'Idea'} description={"Multiple solution concepts with detailed technical approaches"}/>
                        <Service image={Coding} text={'Coding'} description={"Coding development"}/>
                        <Service image={Design} text={'Design'} description={"Visual development"}/>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Services;