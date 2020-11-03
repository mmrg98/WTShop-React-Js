import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";

// import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux";
import reportWebVitals from "./reportWebVitals";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
// custom styling

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
