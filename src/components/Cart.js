import React from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Screen Names
//import { LOGIN, USER } from "../../Navigation/screenNames";

// Component
import CartItem from "./CartItem";

import { checkoutCart } from "../redux/actions";

const Cart = ({ theCart, user, checkoutCart }) => {
  const cartItems = theCart.map((item) => <CartItem item={item.product} />); //key={item.product}
  console.log(cartItems.length);

  const handleCheckout = () => {
    if (user) checkoutCart(theCart);
    else {
      <Redirect to="/login" />;
    }
  };

  return (
    <div>
      {cartItems.length ? (
        <>
          {cartItems}
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

const mapStateToProps = ({ theCart, user }) => ({ theCart, user });

const mapDispatchToProps = {
  checkoutCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
