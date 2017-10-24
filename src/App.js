import React, { Component } from 'react';
import './App.css';
import BackgroundImg from './components/images/mountains-bcgsmall.jpg';

import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import DownButton from './components/containers/DownButton'
import About from './components/About';
import Projects from './components/Projects';
import JumbotronSmall from './components/JumbotronSmall';
import Services from './components/Services';
import ContactForm from './components/Form';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Jumbotron />
          <DownButton />
          <Services />
          <Projects />
          <JumbotronSmall image={BackgroundImg} title={'Explore'}/>
          <About />
          <ContactForm />
          <Footer />
      </div>
    );
  }
}

export default App;
