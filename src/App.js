import React, { Component } from 'react';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Resume from './components/Resume'
import Fendprojects from './components/Fendprojects'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path='/' component={Homepage}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/fendprojects' component={Fendprojects}/>
      </div>
    );
  }
}

export default App;
