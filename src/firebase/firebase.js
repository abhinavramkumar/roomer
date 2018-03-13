import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAc5Cb1VKyLTjyZKI_PBRmzurF2so1RK5w",
  authDomain: "tenant-manager.firebaseapp.com",
  databaseURL: "https://tenant-manager.firebaseio.com",
  projectId: "tenant-manager",
  storageBucket: "tenant-manager.appspot.com",
  messagingSenderId: "326384595170"
};

firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.database();

export { firebase as default, db, googleAuthProvider };
