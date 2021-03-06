import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

//actions

// Components

import ProductsList from "./components/ProductsList";
import Signup from "./components/SignupForm";
import Login from "./components/LoginFrom";

import Profile from "./components/Profile";

import Orders from "./components/Orders";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import "./App.css";
import ProfileForm from "./components/ProfileForm";

function App() {
  return (
    <>
      <div className="bg-dark">
        <div className="bg-white">
          <Header />
        </div>
        <br />
        <br />
        <br />
        <div className="container ">
          <Switch>
            <Redirect exact from="/" to="/product" />
            <Route path="/product/:productID">
              <ProductDetail />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/profileEdit">
              <ProfileForm />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product">
              <ProductsList />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/Orders">
              <Orders />
            </Route>
          </Switch>
          <Footer />
        </div>
        {/* <br />
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
        <br /> */}
      </div>
    </>
  );
}

export default App;
