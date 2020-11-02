import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions";

import ProductCard from "./ProductCard";


const ProductsList = (props) => {

    const products = props.products;
  
    /*const filterChannels = () => {
      return chanels.filter((chanel) => {
        return `${chanel.name}`.toLowerCase().includes(query.toLowerCase());
      });
    };
  
    const handleClick = (product) => {
      
  
    };*/
  
    let productCards = products.map((product) => (
        <ProductCard key={product.id} product={product} />
    ));
  
  
    return (
      <div className="scrollable">
        <hr className="sidebar-divider my-3" />
        <div className="sidebar-heading text-white">products</div>
        
        <div className="mx-3">{productCards}</div>
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
        products: state.productsReducer.products,

    };
  };
  
  
  export default connect(mapStateToProps)(ProductsList);
  