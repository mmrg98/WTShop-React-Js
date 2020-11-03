import React, { useState, useEffect } from "react";
import axios from "axios";
import {connect} from "react-redux"

// Components

//Route
import { Redirect, useParams } from "react-router-dom";

const ProductDetail = props => {
  const {productID} = useParams();

  const product = props.products.find((product) => product.id === +productID)

  if (!product) return <Redirect to='/product'/>
  
 
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
          
          <br/>
            <span>Description: {product.description}</span>
          </h5>
          
          <span>category: {product.category}</span>
          <br/>
          <small className="card-text">{product.stock} left</small>
        </div>
      </div>
    </div>

    );
  }

  const mapStateToProps = (state) =>({
    products: state.productsReducer.products,
  })
  export default connect(mapStateToProps)(ProductDetail);
