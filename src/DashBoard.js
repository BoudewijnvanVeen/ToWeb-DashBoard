
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
      this.moveTile = this.moveTile.bind(this)
      this.state = { Tiles: this.props.Tiles };
  }  

  moveTile(sourceTile, targetTile) {    
    var Tiles = this.state.Tiles;
    var newSourceTile = _.merge(sourceTile, { col: targetTile.col });  
    var indexOfSourceTile = _.indexOf(Tiles, _.find(Tiles, {key: sourceTile.key}));
    Tiles.splice(indexOfSourceTile, 1, newSourceTile);
    this.setState({ Tiles: Tiles });
  }

  render() {
    return (
      <div className='dashboard'>
        <Column tiles={this.state.Tiles.filter((t) => t.col === 1)} moveTile={this.moveTile} ></Column>
        <Column tiles={this.state.Tiles.filter((t) => t.col === 2)} moveTile={this.moveTile} ></Column>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DashBoard);