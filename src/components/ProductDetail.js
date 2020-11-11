import React, { useState } from "react";

import { connect } from "react-redux";

//import { addItemToCart } from "../redux/actions";

// Components
import AddToCart from "./AddToCart";

//Route
import { Redirect, useParams } from "react-router-dom";

import "../App.css";
const ProductDetail = ({ products }) => {
  const { productID } = useParams();

  const product = products.find((product) => product.id === +productID);

  if (!product) return <Redirect to="/product" />;

  const price = parseInt(product.price);

  // const submitOrder = () => {
  //   if (!product) alert("Please select an item");
  //   else {
  //     addItemToCart({ product_id: product.id, quantity: count });
  //     //addItemToCart({ product });
  //     console.log("added");
  //   }
  // };

  return (
    <>
      <br />
      <div className="card">
        <div className="row">
          <img src={product.img} className="image-detail" alt={product.name} />

          <div className="card-body text-center mt-5">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <small className="card-text">{price}.00 SAR</small>

            {/* <small className="card-text">{product.stock} left</small> */}
            <div className=" mt-5">
              <AddToCart product_id={product.id} />
            </div>

            {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
          </div>
        </div>
      </div>

      {/* <div className="col-lg-4 col-md-6 col-12">
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
            

            <br />
            <span>Description: {product.description}</span>
          </h5>

          <span>category: {product.category}</span>
          <br />
          <small className="card-text">{product.stock} left</small>
          <br />
         
        </div>
      </div>
    </div> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
});
// const mapDispatchToProps = {
//   addItemToCart,
// };
export default connect(mapStateToProps)(ProductDetail);
