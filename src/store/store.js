import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware, compose } from "redux";
import reducer from "../rootReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers();

// other store enhancers if any

const store = configureStore({
  reducer,
  enhancer,
});
export default store;
