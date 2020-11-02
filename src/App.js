import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

//actions

// Components
import ProductsList from './components/ProductsList';



import './App.css';

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/list" />
      <Route path="/list">
        <ProductsList />
      </Route>
      
    </Switch>
  );
}

export default App;
