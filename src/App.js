import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DashBoard from './DashBoard'

const data = [
  { key: 1, title: 'The first title', comp: 1, col: 1, order: 1 },
  { key: 2, title: 'The second title', comp: 2, col: 2, order: 1  },
  { key: 3, title: 'The third title', comp: 1, col: 1, order: 2  },
  { key: 4, title: 'The fourth title', comp: 2, col: 2, order: 2  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <DashBoard Tiles={data}></DashBoard>        
      </div>
    );
  }
}

export default App;
