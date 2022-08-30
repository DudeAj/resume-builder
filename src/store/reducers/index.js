import { applyMiddleware, compose } from "redux";
import UserReducer from "./user";
import DataReducer from "./data";
import Thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  reducer: {
    data: DataReducer,
  },
};

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  rootReducer,
 // composeEnhancers(applyMiddleware(Thunk))
);

export default store;
