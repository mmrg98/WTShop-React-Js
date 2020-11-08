import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { addItemToCart } from "../redux/actions";

// Components

//Route
import { Redirect, useParams } from "react-router-dom";

const ProductDetail = ({ products, addItemToCart }) => {
  const { productID } = useParams();

  const product = products.find((product) => product.id === +productID);

  if (!product) return <Redirect to="/product" />;

  const submitOrder = () => {
    if (!product) alert("Please select an item");
    else {
      addItemToCart({ product_id: product.id, quantity: 1 });
    }
  };

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div>
          <h3>{product.name}</h3>
          <img
            src={product.img}
            className="img-thumbnail img-fluid"
            alt={product.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <small className="card-text">{product.price} $</small>

            <br />
            <span>Description: {product.description}</span>
          </h5>

          <span>category: {product.category}</span>
          <br />
          <small className="card-text">{product.stock} left</small>
          <br />

          <button className="btn btn-info ml-2" onClick={submitOrder}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, cart) => ({
  products: state.productsReducer.products,
  cart,
});
const mapDispatchToProps = {
  addItemToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
