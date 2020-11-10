import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
// Components
import AddToCart from "./AddToCart";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = (props) => {
  const product = props.product;
  const price = parseInt(product.price);
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card mb-2">
          <div className="image">
            <img className="image" src={product.img} alt={product.name} />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title ">
              <Link to={`/product/${product.id}`}>
                <span className="text-monospace">{product.name}</span>
              </Link>
            </h5>
            <small className="card-text ">{price}.00 SAR</small>
          </div>

          <div className="mb-3">
            <AddToCart product_id={product.id} />
          </div>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    "": "",
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
