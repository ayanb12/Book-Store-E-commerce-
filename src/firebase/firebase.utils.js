import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAWOLUBpVUcyMl2FebDqEdGZpYrdyWXxd8",
  authDomain: "e-commerce-3e03d.firebaseapp.com",
  databaseURL: "https://e-commerce-3e03d.firebaseio.com",
  projectId: "e-commerce-3e03d",
  storageBucket: "e-commerce-3e03d.appspot.com",
  messagingSenderId: "601354827543",
  appId: "1:601354827543:web:4d13a45485b3ef3fb1e952",
  measurementId: "G-8023NQLRM2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
