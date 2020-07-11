import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpxRy2jccSIsjRMchX2Jz2opisGEivfsU",
  authDomain: "bookstore-6c2d7.firebaseapp.com",
  databaseURL: "https://bookstore-6c2d7.firebaseio.com",
  projectId: "bookstore-6c2d7",
  storageBucket: "bookstore-6c2d7.appspot.com",
  messagingSenderId: "55593945072",
  appId: "1:55593945072:web:c0c7a3bdd0f40d48107f35",
  measurementId: "G-45DECGV7R3",
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };
