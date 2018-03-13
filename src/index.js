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
console.log("<-------- Initial State ----->\n");
console.log(store.getState());
console.log("<-------- Initial State ----->\n");

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
      /** Pass user uid to redux */
      login(user.uid);
      renderedApp();
    } else {
      console.log("<------- On Logout --------->");
      console.log("User Logged Out!");
      /** Pass logout state to redux */
      logout();
      renderedApp();
    }
  });
}

registerServiceWorker();
