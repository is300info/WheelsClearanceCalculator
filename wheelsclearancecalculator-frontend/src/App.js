import React, { Component } from 'react';
import './App.css';
import TireSize from './components/tireSize';
import FrontWheelSpecCalc from './components/frontWheelSpecCalc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FrontWheelSpecCalc/>
        <TireSize />
      </div>
    );
  }
}

export default App;
