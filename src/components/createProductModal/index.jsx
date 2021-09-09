import React from "react";
import "./create-product-modal.scss";
import {ModalWrapper} from "../UI/modalWrapper";
import {Input} from "../UI/input";

export class CreateProductModal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ModalWrapper title={"Добавление товара"} closeModal={this.props.closeModal}>
        <Input label={"Название товара"} type={"text"} onChange={this.props.setTitle} placeholder={"Введите название товара"}/>
        <Input label={"Описание товара"} type={"text"} onChange={this.props.setDescription} placeholder={"Введите описание товара"}/>
        <Input label={"Цена товара"} type={"text"} onChange={this.props.setPrice} placeholder={"Введите цену товара"}/>

        <button onClick={this.props.addProduct} className={"create-form-button"}>Добавить товар</button>
      </ModalWrapper>
    );
  }
}