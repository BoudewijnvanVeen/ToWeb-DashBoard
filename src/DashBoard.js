

import _ from "lodash"
import React, { PropTypes }  from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Column from './Column'

class DashBoard extends React.Component {

  PropTypes = {      
    tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
    components: PropTypes.object.isRequired    
  }

  constructor(props) {
      super(props);
      this.updateTile = this.updateTile.bind(this)
      this.state = { Tiles: this.props.Tiles.sort((a, b) => a.order-b.order) };
  }  

  updateTile(newTile, placeBefore) {  
    var _tiles = this.state.Tiles;  

    var currentIndex = _.indexOf(_tiles, _.find(_tiles, {key: newTile.key}));
    _tiles.splice(currentIndex, 1, newTile);

    var newIndex = _.indexOf(_tiles, _.find(_tiles, {key: placeBefore.key}));
    _tiles.splice(newIndex, 0, _tiles.splice(currentIndex, 1)[0]); 

    this.setState({ Tiles: _tiles });
  }

  render() {
    return (
      <div className='dashboard'>
        <Column class="column1" tiles={this.state.Tiles.filter((t) => t.col === 1)} updateTile={this.updateTile} components={this.props.components} ></Column>
        <Column class="column2" tiles={this.state.Tiles.filter((t) => t.col === 2)} updateTile={this.updateTile} components={this.props.components} ></Column>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DashBoard);