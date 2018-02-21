import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DashBoard from './DashBoard'

import SomeComponent1 from './SomeComponent1';
import SomeComponent2 from './SomeComponent2';

const components = { '1': SomeComponent1,'2': SomeComponent2 }

const data = [
  { key: 1, title: 'The first title', comp: 1, col: 1, order: 1 },
  { key: 2, title: 'The second title', comp: 2, col: 2, order: 1 },
  { key: 3, title: 'The third title', comp: 1, col: 3, order: 2 },
  { key: 4, title: 'The fourth title', comp: 2, col: 3, order: 2 },
  { key: 5, title: 'The fifth title', comp: 1, col: 2, order: 2 },
  { key: 6, title: 'The sixth title', comp: 2, col: 3, order: 3 },
  { key: 7, title: 'The seventh title', comp: 1, col: 1, order: 3 },
  { key: 8, title: 'The eigth title', comp: 2, col: 2, order: 3 },
  { key: 9, title: 'The ninth title', comp: 2, col: 3, order: 1 }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header tile">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
        </div>
        <DashBoard Tiles={data} components={components}></DashBoard>        
      </div>
    );
  }
}

export default App;
