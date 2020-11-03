import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

//actions

// Components

import ProductsList from "./components/ProductsList";
import Signup from "./components/SignupForm";
import Login from "./components/LoginFrom";
import ProductDetail from './components/ProductDetail';
import Header from './components/Header'
import Cart from './components/Cart'
import './App.css';


function App() {
  return (
    <div>
    <div className="row">
        <Header/>
      </div>
    <Switch>
      <Redirect exact from="/" to="/product" />
      <Route path="/product/:productID">
            <ProductDetail />
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
    </Switch>
    </div>
  );
}

export default App;
