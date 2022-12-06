import React from "react";
import { fireauth, firebaseSetup } from "./firebase";

const SignInModal = () => {
   const signIn = provider => {
      switch (provider) {
         case "google":
            provider = new firebaseSetup.auth.GoogleAuthProvider();
            break;
         default:
            // Default to Google
            provider = new firebaseSetup.auth.GoogleAuthProvider();
      }
      fireauth.signInWithPopup(provider);
   };

   return (
      <section className="modal fade" id="signInModal">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
               <div className="modal-header">
                  <h1 className="modal-title mx-auto">Sign In</h1>
               </div>
               <div className="modal-body">
                  <br />
                  <button
                     className="btn btn-success mb-2"
                     onClick={() => signIn("google")}
                     data-toggle="modal" data-target="#signInModal">
                     With Google
                  </button>
                  <br />
               </div>
            </div>
         </div>
      </section>
   );
}

export default SignInModal;