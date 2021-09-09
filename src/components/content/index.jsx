import React from "react";
import ProductList from "../productList";
import {CreateProductModal} from "../createProductModal";
import {withStore} from "../../state/withStore"
import "./content.scss";
import {Tile} from "../UI/tile";
import {v4 as uuidv4} from 'uuid';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isAuthorized: false,
      productTitle: '',
      productDescription: '',
      productPrice: 0
    };
  }

  render() {

    const {dispatch} = this.props;

    const setProductTitle = (e) => {
      this.setState({productTitle: e.target.value})
    }
    const setProductDescription = (e) => {
      this.setState({productDescription: e.target.value})
    }
    const setProductPrice = (e) => {
      this.setState({productPrice: e.target.value})
    }

    const openModal = () => {
      this.setState({isModalOpen: true})
    }

    const closeModal = () => {
      this.setState({isModalOpen: false})
    }

    const addProduct = () => {
      dispatch('ADD_PRODUCT', {
        product: {
          id: uuidv4(),
          title: this.state.productTitle,
          description: this.state.productDescription,
          price: Number(this.state.productPrice),
        }
      })

      closeModal()
    }

    const removeProduct = (productId) => {
      dispatch('REMOVE_PRODUCT', {
        id: productId
      })
    }

    return (
      <div className={"content"}>
        <Tile>
          <h1>Frontend Test Task</h1>
          {this.props.isAuthorized
            ? <button onClick={openModal} className={"content-create-button"}>
                Добавить новый товар
              </button>
            : <p>Войдите, чтобы добавить/удалить товары</p>}

          <ProductList removeProduct={removeProduct}
                       isAuthorized={this.props.isAuthorized}/>
          {this.state.isModalOpen && <CreateProductModal setTitle={setProductTitle}
                                                         setDescription={setProductDescription}
                                                         setPrice={setProductPrice}
                                                         addProduct={addProduct}
                                                         closeModal={closeModal}/>}
        </Tile>
      </div>
    );
  }
}

export default withStore("products", (data) => data)(Content);