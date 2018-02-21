
import React, { PropTypes } from 'react';
import Tile from './Tile';

class Column extends React.Component {

  static propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateTile: PropTypes.func.isRequired,
    components: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className={this.props.class}>
        {this.props.tiles.sort((a, b) => { a.order - b.order }).map((tile) => <Tile key={tile.key} tile={tile} updateTile={this.props.updateTile} components={this.props.components} />)}
      </div>
    )
  }
}

export default Column;