import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import DownButton from './components/containers/down_button'
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Jumbotron />
          <DownButton />
          <About />
          <Projects />
      </div>
    );
  }
}

export default App;
