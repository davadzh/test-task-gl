import React from "react";
import "./product.scss";
import productImage from "../../static/images/product.png"

export class Product extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {product} = this.props;
    const price = product.price.toLocaleString("ru", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      currency: "RUB",
      style: "currency",
    });

    return (
      <div className="product">
        <div className={"product-delete"}>
          {this.props.isAuthorized &&
          <button onClick={() => this.props.removeProduct(product.id)}>Удалить</button>}
        </div>

        <div className={"product-content"}>
          <div className="product-content-info">
            <p className="product-content-info-title">
              {product.title} - {product.id}
            </p>
            <p className="product-content-info-description">{product.description}</p>
            <div>
              <span className="product-content-info-price">{price}</span>
            </div>
          </div>
          <div className="product-content-image-frame">
            <img
              className="product-content-image"
              src={productImage}
              alt=""
            />
          </div>
        </div>

      </div>
    );
  }
}
