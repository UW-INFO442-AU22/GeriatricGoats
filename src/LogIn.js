import "./css/LogIn.css";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



/*const provider = new GoogleAuthProvider();
const auth = getAuth();
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
  });
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({
   'login_hint': 'user@example.com'
 });*/
 

export function LogIn() {
   const provider = new GoogleAuthProvider();
   const auth = getAuth();
   return (
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
      }),;
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      provider.setCustomParameters({
         'login_hint': 'user@example.com'
      });
 
      <div>
            <body>
               <div class="main">
                  <p class="sign" align="center">Sign in</p>
                  <form class="form1"/>
                     <input class="un " type="text" align="center" placeholder="Username"/>
                     <input class="pass" type="password" align="center" placeholder="Password"/>
                     <a class="submit" align="center">Sign in</a>
               </div>
            </body>

      </div>
   )
}