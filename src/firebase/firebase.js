import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAc5Cb1VKyLTjyZKI_PBRmzurF2so1RK5w",
  authDomain: "tennant-manager.firebaseapp.com",
  databaseURL: "https://tennant-manager.firebaseio.com",
  projectId: "tennant-manager",
  storageBucket: "tennant-manager.appspot.com",
  messagingSenderId: "326384595170"
};

firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.database();

export { firebase as default, db, googleAuthProvider };
