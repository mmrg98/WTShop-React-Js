import React, { useState } from "react";

import { connect } from "react-redux";

import { addItemToCart } from "../redux/actions";

const AddToCart = ({ product_id, addItemToCart }) => {
  const [count, setCount] = useState(0);

  const submitOrder = () => {
    addItemToCart({ product_id: product_id, quantity: count });
    setCount(0);
    console.log("added");
  };

  return (
    <div className="text-center">
      <div>
        <input value={count} />
        <button
          className="btn-sm  btn-secondary ml-1"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>

      <div className="btn-sm  ml-2 font-weight-normal">
        <button className="btn btn-secondary   " onClick={submitOrder}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addItemToCart,
};
export default connect(null, mapDispatchToProps)(AddToCart);
