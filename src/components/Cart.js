import React from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Screen Names
//import { LOGIN, USER } from "../../Navigation/screenNames";

// Component
import CartItem from "./CartItem";

import { checkoutCart } from "../redux/actions";

const Cart = ({ cart, user, checkoutCart }) => {
  const cartItems = cart.map((item) => (
    <CartItem item={item} key={item.product} />
  ));

  const handleCheckout = () => {
    if (user) checkoutCart(cart);
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

const mapStateToProps = ({ cart, user }) => ({ cart, user });

const mapDispatchToProps = {
  checkoutCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
