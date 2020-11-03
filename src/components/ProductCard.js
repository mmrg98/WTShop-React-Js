import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";


const ProductCard = props => {
  const product = props.product;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/product/${product.id}`} className="card">
      <div className="card">
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
      </div>
      </Link>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
      '':''
  
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
