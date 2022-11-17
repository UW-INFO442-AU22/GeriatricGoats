import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// firebase configuration
/*const firebaseConfig = {
    apiKey: "AIzaSyC3_6IAbYBbJiGzXGK8WVOXIkxAmtUoY0w",
    authDomain: "make-it-home-app.firebaseapp.com",
    projectId: "make-it-home-app",
    storageBucket: "make-it-home-app.appspot.com",
    messagingSenderId: "1003220503069",
    appId: "1:1003220503069:web:2e51d240ecd85cbf6754f4"
  };
  */
  // initialize firebase
  const firebaseSetup = firebase.initializeApp(firebaseConfig);

  const fireauth = firebase.auth();

  export { firebaseSetup, fireauth };