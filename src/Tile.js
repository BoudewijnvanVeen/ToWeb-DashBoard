

import _ from "lodash"
import React, { PropTypes }  from 'react';
import { DragSource, DropTarget } from 'react-dnd';

const tileSource = {
  beginDrag(props) {
    return { tile: props.tile };
  }
};

const tileTarget = {  
  drop(props, monitor) {
    const source = monitor.getItem().tile;
    const target = props.tile;

    if (source === null || target === null) 
      return;

    var newSource = _.merge(source, { col: target.col, order: target.order + 1 });  
    props.updateTile(newSource, target);
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