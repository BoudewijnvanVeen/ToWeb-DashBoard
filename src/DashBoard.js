
import React, { PropTypes }  from 'react';

import Column from './Column'
import Tile from './Tile'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Tiles: this.props.Tiles };
  }

  render() {
    return (
      <div className='dashboard'>
        <Column tiles={this.state.Tiles.filter((t) => t.col === 1)}></Column>
        <Column tiles={this.state.Tiles.filter((t) => t.col === 2)}></Column>
      </div>
    );
  }
}

DashBoard.PropTypes = {
    tiles: PropTypes.arrayOf(PropTypes.object).isRequired   
}

export default DragDropContext(HTML5Backend)(DashBoard);