import React from "react";
import "./input.scss";

export class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className={'custom-input'}>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={this.props.onChange} placeholder={this.props.placeholder}/>
      </div>
    );
  }
}