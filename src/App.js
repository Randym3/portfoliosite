import React, { Component } from 'react';
import Header from './Components/Header'
import LandingPage from './Components/LandingPage'
import Projects from './Components/Projects'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Socials from './Components/Socials'
import Footer from './Components/Footer'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <Skills />
        <Projects />
        <AboutMe />
        <Socials />
        <Footer />
    </div>
    );
  }
}

export default App;
