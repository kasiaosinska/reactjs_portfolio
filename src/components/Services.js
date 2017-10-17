import React, {Component} from 'react';
import './styles/services.scss';
import {Grid, Row} from 'react-bootstrap';
import Coding from './images/coding.svg';
import Idea from './images/idea.svg';
import Design from './images/design.svg';

import Service from './containers/Service';

class Services extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <Grid>
                <Row>
                    <Service image={Idea} text={'aaaaa'}/>
                    <Service image={Coding} text={'ssssss'}/>
                    <Service image={Design} text={'ddffff'}/>
                </Row>
            </Grid>
        )
    }
}

export default Services;