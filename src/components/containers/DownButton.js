import React, {Component} from 'react';
import '../styles/down_button.css';

class DownButton extends Component {
    render () {
        return (
            <div className="down-button-section">
                <a href="#"><div className="arrow-down"></div></a>
            </div>
        )
    }
}

export default DownButton;