import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// initialize firebase
const firebaseSetup = firebase.initializeApp(firebaseConfig);

const fireauth = firebase.auth();

export { firebaseSetup, fireauth };