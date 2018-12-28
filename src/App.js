import React, { Component } from 'react';
import Homepage from './components/Homepage'
import BurgerMenu from './components/BurgerMenu'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App' >
        <BurgerMenu />
        <Homepage/>
      </div>
    );
  }
}

export default App;
