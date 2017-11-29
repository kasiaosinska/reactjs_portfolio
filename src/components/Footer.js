import React, {Component} from 'react';
import './styles/footer.css';
import {Grid, Row, Col} from 'react-bootstrap';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <div className="footer-wrapper">
                            &#174; {this.state.date.getFullYear()} Katarzyna Osińska
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Footer;