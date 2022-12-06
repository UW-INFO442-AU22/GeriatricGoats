import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

// Google sign-in pop-up modal
const auth = getAuth(app) // import auth instance 
export const googleSignIn = async () => {
   try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(credential)
   } catch (e) {
      console.log(e.code, e.message)
   }
   window.location = "/";
   window.alert("You are now logged in");
}
















/*// Google Sign in Popup:
const provider = new GoogleAuthProvider();
export const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }); */