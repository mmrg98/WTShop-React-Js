import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import "../App.css";

const ProductsList = (props) => {
  const [query, setQeury] = useState("");
  const products = props.products;
  const filterImages = () => {
    return products.filter((product) => product.category == 3);
  };
  const imgList = filterImages().map((product) => {
    return (
      <div className="carousel-item active">
        <img src={product.img} className="d-block w-100" alt="..." />
      </div>

      // <View style={style.slide}>
      //   <Image
      //     source={{ uri: product.img }}
      //     style={style.sliderImage}
      //     resizeMode="cover"
      //   />
      // </View>
    );
  });

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
      {/* <hr className="sidebar-divider my-3" /> */}
      <br />
      {/* <div className="row "> */}
      {/* <div className="col-lg-8 col-md-6 col-12">
          <h1 className="sidebar-heading text-monospace text-danger"> </h1>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-right">
          <p className="">
            <SearchBar
              onChange={setQeury}
              className=""
              placeholder="Search for products"
            />
          </p>
        </div>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner text-center">
          {/* {imgList} */}
      {/* <div className="carousel-item active">{imgList}</div> */}
      {/* <div className="carousel-item active">
            <img src={products[0].img} className="image-main" alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src={products[2].img}
              className="d-block w-100 image-main"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={products[3].img}
              className="d-block w-100 image-main"
              alt="..."
            />
          </div>
        </div> */}
      {/* <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a> */}
      {/* <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}{" "}
     
      <div className="row ">
        <div className="col-lg-8 col-md-6 col-12">
          <h1 className="sidebar-heading text-monospace text-danger">Menu: </h1>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-right">
          <p className="">
            <SearchBar
              onChange={setQeury}
              className=""
              placeholder="Search for products"
            />
          </p>
        </div>
      </div>
      <div className="card rounded main-card">
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
