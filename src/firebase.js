import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"

const apiKey = process.env.API_KEY

var firebaseConfig = {
  apiKey: apiKey, 
  authDomain: "sklep-inz.firebaseapp.com",
  databaseURL: "https://sklep-inz.firebaseio.com",
  projectId: "sklep-inz",
  storageBucket: "sklep-inz.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
