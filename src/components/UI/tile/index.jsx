import React from "react";
import "./tile.scss";

export class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="tile">
        {this.props.children}
      </div>
    );
  }
}
