import React from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { checkoutCart } from "../redux/actions";

// Component
import CartItem from "./CartItem";

//import { checkoutCart } from "../redux/actions";

const Cart = ({ theCart, user, checkoutCart }) => {
  const cartItems = theCart.theItems.map((item) => <CartItem item={item} />); //key={item.product}
  console.log(cartItems.length);

  const handleCheckout = () => {
    if (user) {
      checkoutCart();
    } else {
      <Redirect to="/login" />;
    }
  };

  return (
    <div>
      {cartItems.length ? (
        <>
          {cartItems}
          <div>{theCart.total}</div>
          <button full danger onClick={handleCheckout}>
            Checkout
          </button>
        </>
      ) : (
        <p>Buy something</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ theCart, user }) => ({
  theCart,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  checkoutCart: () => dispatch(checkoutCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
