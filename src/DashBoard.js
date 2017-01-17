
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
        <Column> {this.state.Tiles.filter((t) => t.col === 1).map((tile) => <Tile key={tile.key} tile={tile} />)} </Column>
        <Column> {this.state.Tiles.filter((t) => t.col === 2).map((tile) => <Tile key={tile.key} tile={tile} />)} </Column>
      </div>
    );
  }
}

DashBoard.PropTypes = {
    tiles: PropTypes.arrayOf(PropTypes.object).isRequired   
}

export default DragDropContext(HTML5Backend)(DashBoard);