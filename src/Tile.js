
import flow from 'lodash/flow';
import _ from "lodash"
import React, { PropTypes }  from 'react';
import { DragSource, DropTarget } from 'react-dnd';

import SomeComponent1 from './SomeComponent1';
import SomeComponent2 from './SomeComponent2';

var components = { '1': SomeComponent1,'2': SomeComponent2 }

const tileSource = {
  beginDrag(props) {
    return {
      tile: props.tile      
    };
  }
};

const tileTarget = {  
  drop(props, monitor) {
    const source = monitor.getItem().tile;
    const target = props.tile;

    if (source === null || target === null) 
      return;

    var newSource = _.merge(source, { col: target.col, order: target.order + 1 });  
    props.updateTile(newSource);
  }
};

class Tile extends React.Component {

  static propTypes = {  
    key: PropTypes.string.isRequired,
    tile: PropTypes.object.isRequired, 
    updateTile: PropTypes.func.isRequired,   

    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,    
    isDragging: PropTypes.bool.isRequired    
  }

  render() {
    const { key, isDragging, connectDragSource, connectDropTarget } = this.props;
    
    return connectDragSource(connectDropTarget(
      <div className='tile' style={{ opacity: isDragging ? 0.5 : 1 }}><div>
        <h3 className='title'>{this.props.tile.title} </h3>
         {React.createElement(components[this.props.tile.comp])}       
      </div></div>
    ));
  }
}

export default flow([
  DropTarget('tile', tileTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  DragSource('tile', tileSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))]
)(Tile);