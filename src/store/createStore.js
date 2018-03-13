import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import {
  AuthReducer,
  MessagesReducer,
  PropertiesReducer,
  TenantsReducer
} from "../reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    combineReducers({
      auth: AuthReducer,
      messages: MessagesReducer,
      properties: PropertiesReducer,
      tenants: TenantsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
};
