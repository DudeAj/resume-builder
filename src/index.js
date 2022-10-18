import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./firebase";
import App from "./App";
import { Router } from "react-router-dom";
import history from "./utils/history";
import { Provider } from "react-redux";
import store from "./store/reducers/index";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history} basename="/resume-builder">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
