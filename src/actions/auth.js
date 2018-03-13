import firebase, { googleAuthProvider } from "../firebase/firebase";
import { history } from "../router/AppRouter";

const LOG_OUT = "LOG_OUT";
const LOG_IN = "LOG_IN";

const login = (user) => ({
  type: LOG_IN,
  payload: {
    user
  }
});

const logout = () => ({
  type: LOG_OUT,
  payload: {}
});

const start__login = () => (dispatch) => {
  firebase.auth().signInWithPopup(googleAuthProvider);
  history.push("/dashboard");
};

const start__logout = () => {
  firebase.auth.signOut().then(() => {
    console.log("Async Logged Out");
  });
};

export { login, logout, start__login, start__logout };
