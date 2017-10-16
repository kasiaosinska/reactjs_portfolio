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
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center center'
        };

        return (
            <div>
                <div className='jumbotron-small' style={style}>
                    <div className='img-opacity'>
                        <h1 className='title'>{this.props.title}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default JumbotronSmall;