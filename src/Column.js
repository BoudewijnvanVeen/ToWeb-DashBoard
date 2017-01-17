
import React, { PropTypes }  from 'react';
import Tile from './Tile';
import { DropTarget } from 'react-dnd';

const columnTarget = {
    canDrop: function (props) {
      return true;
    },

    drop(props, monitor, component) {
      return monitor.getItem();        
    }
};

const columnCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class Column extends React.Component {
  render() {

    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div className="column" style={{ border: isOver ? '1px solid red' : '' }}>
          {this.props.children}
      </div>
    );
  }
}

Column.PropTypes = {
    tiles: PropTypes.arrayOf(PropTypes.object).isRequired,

    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired   
}

export default DropTarget('tile', columnTarget, columnCollect)(Column);