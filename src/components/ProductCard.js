import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Components
import AddToCart from "./AddToCart";

const ProductCard = (props) => {
  const product = props.product;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card mb-2">
        <Link to={`/product/${product.id}`}>
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={product.img}
              alt={product.name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{product.name}</span>
            </h5>
            <small className="card-text">{product.price} $</small>
          </div>
        </Link>
        <div className="mb-2">
          <AddToCart product_id={product.id} />
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    "": "",
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
