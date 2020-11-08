import React from "react";

import { connect } from "react-redux";

import { removeItemFromCart } from "../redux/actions";

const CartItem = ({ item, removeItemFromCart }) => {
  console.log(item.product.name,"item id")
  return (
    <div>
      {item.product.name}: {item.quantity}
      <button
        transparent
        onClick={() => removeItemFromCart({ product_id: item.product.id })}
      >
        TRASH
      </button>
    </div>
  );
};
const mapDispatchToProps = {
  removeItemFromCart,
};

export default connect(null, mapDispatchToProps)(CartItem);
