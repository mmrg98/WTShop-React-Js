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
    <div>
      <div>
        <input value={count} />
        <button
          className="btn btn-info ml-2"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      <button className="btn btn-info ml-2" onClick={submitOrder}>
        Add to Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  addItemToCart,
};
export default connect(null, mapDispatchToProps)(AddToCart);
