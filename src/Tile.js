

import _ from 'lodash';
import React, { PropTypes }  from 'react';
import { DragSource, DropTarget } from 'react-dnd';

const tileSource = {
  beginDrag(props) {
    return { tile: props.tile };
  }
};

const tileTarget = {  
  // Called when the draggedTile is dropped on the targetTile
  drop(props, monitor) {
    const draggedTile = monitor.getItem().tile;
    const targetTile = props.tile;

    if (draggedTile === null || targetTile === null) 
      return;

    _.merge(draggedTile, { col: targetTile.col, order: targetTile.order + 1 });  
    props.updateTile(draggedTile);
  }
};

class Tile extends React.Component {

  static propTypes = {  
    key: PropTypes.string.isRequired,
    tile: PropTypes.object.isRequired, 
    updateTile: PropTypes.func.isRequired, 
    components: PropTypes.object.isRequired ,   

    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,    
    isDragging: PropTypes.bool.isRequired    
  }

  render() {
    const { key, isDragging, connectDragSource, connectDropTarget } = this.props;
    
    return connectDragSource(connectDropTarget(
      <div className='tile' style={{ opacity: isDragging ? 0.5 : 1 }}><div>
        <h3 className='title'>{this.props.tile.title} </h3>
         {React.createElement(this.props.components[this.props.tile.comp])}       
      </div></div>
    ));
  }
}

export default _.flow([
  DropTarget('tile', tileTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  DragSource('tile', tileSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))]
)(Tile);