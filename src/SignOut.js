import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from "firebase/auth";

// Initializing FB app
const firebaseConfig = {
   apiKey: "AIzaSyC3_6IAbYBbJiGzXGK8WVOXIkxAmtUoY0w",
   authDomain: "make-it-home-app.firebaseapp.com",
   projectId: "make-it-home-app",
   storageBucket: "make-it-home-app.appspot.com",
   messagingSenderId: "1003220503069",
   appId: "1:1003220503069:web:2e51d240ecd85cbf6754f4"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) // import auth instance 
export function signMeOut() {
   const auth = getAuth();
   signOut(auth).then(() => {
      // Sign-out successful
      window.location = "logout";
      window.alert("You are now logged out");
   }).catch((error) => {
      // An error happened
   });
}
