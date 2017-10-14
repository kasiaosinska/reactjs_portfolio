import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Slider />
      </div>
    );
  }
}

export default App;
