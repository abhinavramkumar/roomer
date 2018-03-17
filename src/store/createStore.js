import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import {
  AuthReducer,
  FiltersReducer,
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
      filters: FiltersReducer,
      messages: MessagesReducer,
      properties: PropertiesReducer,
      tenants: TenantsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
};
