import React, { Component } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';
import FooterContent from './components/FooterContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <main>
        	<Portfolio/>
          <Skills/>
          <About/>
        </main>
        <FooterContent/>
      </div>
    );
  }
}

export default App;
