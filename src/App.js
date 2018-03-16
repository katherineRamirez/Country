import React, { Component } from 'react';
import Containercountry from './Components/Containercountry/index';
import logo from './logo.svg';
import './App.css';
import './media.css';
import Containerinfo from './Components/Containercountry/Containerinput/Containerinfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header'></header>
        <Containercountry>
        </Containercountry>
      </div>
    );
  }
}

export default App;
