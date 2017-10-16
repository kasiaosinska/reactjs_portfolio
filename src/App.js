import React, { Component } from 'react';
import './App.css';
import BackgroundImg from './components/images/mountains-bcgsmall.jpg';

import Header from './components/Header';
import Slider from './components/Slider';
import DownButton from './components/containers/down_button'
import About from './components/About';
import JumbotronSmall from './components/JumbotronSmall';


class App extends Component {
    constructor (props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <DownButton />
                <About />
                <JumbotronSmall image={BackgroundImg} title={'Enjoy'}/>
            </div>
        );
    }
}

export default App;
