
import React, { PropTypes }  from 'react';
import _ from "lodash"
import Column from './Column'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class DashBoard extends React.Component {

  PropTypes = {      
    tiles: PropTypes.arrayOf(PropTypes.object).isRequired   
  }

  constructor(props) {
      super(props);
      this.updateTile = this.updateTile.bind(this)
      this.state = { Tiles: this.props.Tiles.sort((a, b) => a.order-b.order) };
  }  

  updateTile(Tile) {  
    var Tiles = this.state.Tiles;  
    var index = _.indexOf(Tiles, _.find(Tiles, {key: Tile.key}));
    Tiles.splice(index, 1, Tile);
    this.setState({ Tiles: Tiles });
  }

  render() {
    return (
      <div className='dashboard'>
        <Column tiles={this.state.Tiles.filter((t) => t.col === 1)} updateTile={this.updateTile} ></Column>
        <Column tiles={this.state.Tiles.filter((t) => t.col === 2)} updateTile={this.updateTile} ></Column>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DashBoard);