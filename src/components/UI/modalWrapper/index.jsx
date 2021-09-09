import "./modal-wrapper.scss";
import React from "react";
import * as ReactDOM from "react-dom";

export class ModalWrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return ReactDOM.createPortal(<div className={'main'}>
      <div className={"modal-block"} onClick={this.props.closeModal}>
        <div className={"modal-form"} onClick={e => e.stopPropagation()}>
          <h3 className={"modal-form-title"}>{this.props.title}</h3>
          {this.props.children}
        </div>
      </div>
    </div>, document.getElementById("portal"));
  }
}