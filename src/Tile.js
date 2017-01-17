
import React, { PropTypes }  from 'react';
import { DragSource } from 'react-dnd';

import SomeComponent1 from './SomeComponent1';
import SomeComponent2 from './SomeComponent2';

var components = { '1': SomeComponent1,'2': SomeComponent2 }

const tileSource = {
  beginDrag(props) {
    return {
      key: props.tile.key,
      title: props.tile.title
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert(`You dropped ${item.title} into ${dropResult.title}!`);
    }
  }
};

const tileCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Tile extends React.Component {
  render() {
    const { isDragging, connectDragSource, title } = this.props;
    return connectDragSource(
      <div className='tile' style={{ opacity: isDragging ? 0.5 : 1 }}><div>
        <h3 className='title'>{this.props.tile.title} </h3>
         {React.createElement(components[this.props.tile.comp])}       
      </div></div>
    );
  }
}

Tile.PropTypes = {
    tile: PropTypes.object.isRequired,   
    comp: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,

    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired      
}


export default DragSource('tile', tileSource, tileCollect)(Tile); 