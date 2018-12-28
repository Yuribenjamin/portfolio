import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import BurgerMenu from './components/BurgerMenu'
import Projects2018 from './components/Projects2018'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App' >
        <BurgerMenu/>
        <Route exact path='/portfolio' component={Homepage}/>
        <Route exact path='/work' component={Projects2018}/>
      </div>
    );
  }
}

export default App;
