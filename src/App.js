import React, {Component} from 'react';
import './App.css';
import RouletteGun from './state-drills/RouletteGun';

class App extends Component {
  render() {
    return (
      <RouletteGun bulletInChamber={7} />
    );
  }
}

export default App;