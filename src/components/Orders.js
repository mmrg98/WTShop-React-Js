import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { fetchOrders } from "../redux/actions";

const Orders = ({ orders, fetchOrders, user }) => {
  console.log("user", { user });
  if (!user) return <Redirect to="/product" />;
  let allorders = orders.map((order) => {
    const date = order.date_time;
    const total = order.total;
    const theItems = order.theItems;
    let allproduct = theItems.map((item) => {
      const name = item.product.name;
      const price = item.product.price;
      const quantity = item.quantity;
      return (
        <div>
          Name: {name} Price: {price}, quantity: {quantity}
        </div>
      );
    });
    return (
      <div>
        Date: {date}, Total: {total},<div>{allproduct}</div>
      </div>
    );
  });

  return (
    <div>
      <button className="btn btn-danger" onClick={() => fetchOrders()}>
        order
      </button>
      <div>{allorders}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.ordersReducer.orders,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrders()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
