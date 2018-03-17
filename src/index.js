import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import firebase, { db } from "./firebase/firebase";
import { Loader } from "./components";
import configureStore from "./store/createStore";
import { login, logout } from "./actions";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/index.css";

const appRoot = document.getElementById("root");

const store = configureStore();

//- DEBUG - View State Changes on every Action
store.subscribe(() => {
  console.log("<------------>\n");
  console.log(store.getState());
});

let ComposedApp = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let renderedApp;

if (appRoot) {
  /** Show Loader Component before anything else renders */
  render(<Loader />, appRoot);

  /** Pre-rendered App */
  renderedApp = () => render(<ComposedApp />, appRoot);

  /** When Auth state changes pass state change to Redux */
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("<------- On Login --------->");
      console.log(`${user.displayName} Logged In!`);
      console.log("<------- On Login --------->");
      /** Pass user uid to redux */
      store.dispatch(login(user));
      renderedApp();
    } else {
      console.log("<------- On Logout --------->");
      console.log("User Logged Out!");
      console.log("<------- On Logout --------->");
      /** Pass logout state to redux */
      store.dispatch(logout());
      renderedApp();
    }
  });
}

registerServiceWorker();
