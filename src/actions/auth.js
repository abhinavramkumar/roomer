import firebase, { googleAuthProvider } from "../firebase/firebase";

const LOG_OUT = "LOG_OUT";
const LOG_IN = "LOG_IN";

const login = (uid) => ({
  type: LOG_IN,
  payload: {
    uid
  }
});

const logout = () => ({
  type: LOG_OUT,
  payload: {}
});

const start__login = () => (dispatch) => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then((result) => console.log(result));
};

const start__logout = () => {
  firebase.auth.signOut().then(() => {
    console.log("Async Logged Out");
  });
};

export { login, logout, start__login, start__logout };
