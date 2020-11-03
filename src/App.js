import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

//actions

// Components

import ProductsList from "./components/ProductsList";
import Signup from "./components/SignupForm";
import Login from "./components/LoginFrom";
import ProductDetail from './components/ProductDetail';
import './App.css';


function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/product" />
      <Route path="/product/:productID">
            <ProductDetail />
          </Route>
      <Route path="/list">
        <ProductsList />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
