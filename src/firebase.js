import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"

var firebaseConfig = {
  //apiKey: "AIzaSyBicaRbaMp_gYwIGj5eB9nwyeXGZbDCZsw",
  authDomain: "sklep-inz.firebaseapp.com",
  databaseURL: "https://sklep-inz.firebaseio.com",
  projectId: "sklep-inz",
  storageBucket: "sklep-inz.appspot.com",
  //messagingSenderId: "992445087980",
  //appId: "1:992445087980:web:7ed036f056fa31fbe625c9",
  //measurementId: "G-Z6RCJK8JEP",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
