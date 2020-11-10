import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import "../App.css";

const ProductsList = (props) => {
  const [query, setQeury] = useState("");
  const products = props.products;

  const filterChannels = () => {
    return products.filter((product) => {
      return `${product.name}`.toLowerCase().includes(query.toLowerCase());
    });
  };

  let productCards = filterChannels().map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className="scrollable">
      <hr className="sidebar-divider my-3" />
      <SearchBar
        onChange={setQeury}
        className=""
        placeholder="Search for producs"
      />
      <h1 className="sidebar-heading text-monospace text-Black">Menue</h1>
      <div className="card my-3 main-card rounded">
        <div className="row">{productCards}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
  };
};

export default connect(mapStateToProps)(ProductsList);
