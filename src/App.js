import React, { Component } from 'react';
import Containercountry from './Components/Containercountry/index';
import Presentation from './Components/Containercountry/presentation';
import logo from './logo.svg';
import Title from './Components/Containercountry/Containerinput/Title';
import Containerinfo from './Components/Containercountry/Containerinput/Containerinfo';
import './media.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header'>
          <h3>¿En qué lugar te gustaría vivir?</h3>
        </header>
        <Containercountry  className='Containercountry'>
        
        </Containercountry>
      </div>
    )
  }
}

export default App;
