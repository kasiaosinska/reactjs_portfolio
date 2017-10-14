import React, {Component} from 'react';
import './styles/about.css';
import Mountain from './images/mountain_icon.jpg';

class About extends Component {
    render () {
        return (
            <div id="about-section">
                <p className="title">---- Lorem ipsum dolor sit amet, consectetur. ----</p>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur cum cupiditate debitis distinctio dolores dolorum, ea esse facilis illo modi neque omnis rerum sapiente, sit soluta tempora tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, animi asperiores corporis cupiditate, deserunt esse eveniet incidunt iusto minus molestias odit omnis possimus recusandae repudiandae sunt temporibus unde veritatis. Vero?</p>
                <div className="icon-wrapper"><img className="mountain" src={Mountain} alt="mountain"/></div>

            </div>
        )
    }
}

export default About