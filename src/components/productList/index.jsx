import React from "react";
import {withStore} from "../../state/withStore";
import {Product} from "../product";
import "./product-list.scss";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {products} = this.props;

    return (
      <div className="product-list">
        {products.length !== 0
          ?
          products.reverse().map((product) => (
            <Product key={product.id}
                     product={product}
                     removeProduct={this.props.removeProduct}
                     isAuthorized={this.props.isAuthorized}/>
          ))
          : <h3>Товаров нет</h3>}
      </div>
    );
  }
}

export default withStore("products", (data) => data)(ProductList);
