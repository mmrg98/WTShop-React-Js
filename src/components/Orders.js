import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
const Orders = ({ orders, user }) => {
  const element = <FontAwesomeIcon icon={faCalendarAlt} />;
  console.log("user", { user });
  if (!user) return <Redirect to="/product" />;
  let allorders = orders.map((order) => {
    const date = order.date_time;
    const total = order.total;
    const theItems = order.items;
    let allproduct = theItems.map((item) => {
      const name = item.product.name;
      const price = item.product.price;
      const quantity = item.quantity;
      return (
        <>
          <div>
            Name: {name} Price: {price}, quantity: {quantity}
          </div>
        </>
      );
    });
    return (
      <>
        <br />

        <div class="card">
          <div class="card-header">
            {element} {date}, Total: {total}
          </div>
          <div class="card-body">{allproduct}</div>
        </div>
      </>
    );
  });

  return (
    <div>
      <br />
      <br />
      <br />
      <h1 className="sidebar-heading text-monospace text-danger">
        Orders History:{" "}
      </h1>
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

export default connect(mapStateToProps)(Orders);
