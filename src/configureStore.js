import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";

import { verifyAuth } from "./actions/";
import rootReducer from "./reducers";

export default function configureStore(persistedState) {
  const store = createStore(rootReducer, persistedState, applyMiddleware(thunkMiddleware, loggerMiddleware));
  store.dispatch(verifyAuth());
  return store;
}
