import React from "react";

import { connect } from "react-redux";

import { removeItemFromCart } from "../redux/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CartItem = ({ item, removeItemFromCart }) => {
  console.log(item.product.name, "item id");
  const element = <FontAwesomeIcon icon={faTrash} />;
  return (
    <div>
      <ul>
        <li class="list-group-item ">
          {item.product.name}{" "}
          <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-secondary btn-sm">
              {item.quantity}
            </button>
          </div>{" "}
          <button
            transparent
            className="btn  btn-sm"
            onClick={() => removeItemFromCart({ product_id: item.product.id })}
          >
            {element}
          </button>{" "}
        </li>
      </ul>
    </div>
  );
};
const mapDispatchToProps = {
  removeItemFromCart,
};

export default connect(null, mapDispatchToProps)(CartItem);
