
import React, { PropTypes }  from 'react';
import update from 'react/lib/update';  
import Column from './Column'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Tiles: this.props.Tiles };
  }

  PropTypes = {
    tiles: PropTypes.arrayOf(PropTypes.object).isRequired   
  }

  moveTile(sourceKey, targetKey) {
    this.setState(update(this.state, {
      
    }));
  }

  render() {
    return (
      <div className='dashboard'>
        <Column id={1} tiles={this.state.Tiles.filter((t) => t.col === 1)} moveTile={this.moveTile} ></Column>
        <Column id={2} tiles={this.state.Tiles.filter((t) => t.col === 2)} moveTile={this.moveTile} ></Column>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DashBoard);