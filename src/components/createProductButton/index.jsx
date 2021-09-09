import React from "react";
import "./create-product-button.scss";

export class CreateProductButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <button onClick={this.props.openModal} className={"create-product-button"}>
        Добавить новый товар
      </button>
    );
  }
}
