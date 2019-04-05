import React, { Component } from 'react';
import Header from './Components/Header'
import LandingPage from './Components/LandingPage'
import Projects from './Components/Projects'
import AboutMe from './Components/AboutMe'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <Projects />
        <AboutMe />
    </div>
    );
  }
}

export default App;
