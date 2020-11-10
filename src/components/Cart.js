import React from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { checkoutCart } from "../redux/actions";

// Component
import CartItem from "./CartItem";

//import { checkoutCart } from "../redux/actions";

const Cart = ({ theCart, user, checkoutCart, total }) => {
  console.log("User", { user });
  console.log("theCart", { total });

  const cartItems = theCart.map((item) => <CartItem item={item} />); //key={item.product}
  console.log(cartItems.length);

  const handleCheckout = () => {
    if (user) {
      checkoutCart();
    } else {
      <Redirect to="/login" />;
    }
  };

  return (
    <div className="container ">
      <br />
      <br />
      <br />
      <div>
        <div class="card text-center">
          <div class="card-header">Your Card</div>
          <div class="card-body">
            {cartItems.length ? (
              <>
                {cartItems}

                <div className="m-1">{total} SAR</div>
                <button class="btn btn-outline-danger" onClick={handleCheckout}>
                  Checkout
                </button>
              </>
            ) : (
              <ul>
                <li class="list-group-item list-group-item-danger">
                  Buy Something
                </li>
              </ul>
            )}
          </div>
          <div class="card-footer text-muted">
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theCart: state.theCart.cart,
  total: state.theCart.total,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  checkoutCart: () => dispatch(checkoutCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
