import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import DownButton from './components/containers/down_button'
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Slider />
          <DownButton />
          <About />
      </div>
    );
  }
}

export default App;
