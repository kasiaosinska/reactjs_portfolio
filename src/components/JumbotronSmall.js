import React, {Component} from 'react';
import './styles/jumbotronsmall.css';


class JumbotronSmall extends Component {
    constructor (props) {
        super(props)
    }

    render () {

        const style = {
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };

        return (
            <div className="container-fluid">
                <div className="jumbotron-small" style={style}>
                    Enjoy the moment
                </div>
            </div>
        )
    }
}

export default JumbotronSmall;