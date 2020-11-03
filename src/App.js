import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

//actions

// Components
import ProductsList from './components/ProductsList';
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
      
    </Switch>
  );
}

export default App;
