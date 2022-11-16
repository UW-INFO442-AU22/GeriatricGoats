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
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({
   'login_hint': 'user@example.com'
 });*/
const provider = new GoogleAuthProvider();
const auth = getAuth();
   // Initialize Firebase
   // TODO: Missing Firebase Config
   firebase.initializeApp(config);
   this.firebaseToken = document.querySelector("#firebase-token");
   this.firebaseToken.innerHTML = "Welcome !";


   // User SignUp
   function authRegister(event) {
   event.preventDefault();
   var registerForm = $("form[name='registerForm']");
   var reg_email = registerForm.find('#register_email').val();
   var reg_password = registerForm.find('#register_password').val();

   firebase
      .auth()
      .createUserWithEmailAndPassword(reg_email, reg_password)
      .then(function () {
         this.firebaseToken.innerHTML = "Registered successfully !";
      })
      .catch(function(err) {
         alert(err.message);
      })
   }


   // User SignIn
   function authLogin(event) {
   event.preventDefault();
   var loginForm = $("form[name='loginForm']");
   var log_email = loginForm.find('#login_email').val();
   var log_password = loginForm.find('#login_password').val();

   firebase
      .auth()
      .signInWithEmailAndPassword(log_email, log_password)
      .then(function () {
         this.firebaseToken.innerHTML = "Sign-in Successful !";
         console.log('sign in successful !');
         // outputFirebaseData();
      })
      .catch(function(err) {
         alert(err.message);
      });
   }

   function outputFirebaseData() {
   this.firebaseToken.innerHTML = "Hello world";
   }

export function LogIn() {
   return (
      <div>
         <body class="grey darken-3">
         <div class="row">
            <div class="col l4 offset-l4 m6 offset-m3 s12" id="authCard">
               <div class="card">
               <ul class="tabs">
                  <li class="tab col s3 waves-effect"><a href="#registerSection" class="active">Register</a></li>
                  <li class="tab col s3 waves-effect"><a href="#loginSection">Login</a></li>
               </ul>
               <div class="card-content">
                  <div class="row">
                     <div id="registerSection" class="col s12 animated slideInUp">
                     <div class="card-title">Register</div>
                     <div class="row">
                        <form action="" name="registerForm" onSubmit="authRegister(event)">
                           <div class="col s12 padding-0">
                           <div class="input-field">
                              <input type="text" id="register_email" class="validate" autocomplete="off" />
                              <label for="register_email">Enter your Email</label>
                           </div>
                           </div>
                           <div class="col s12 padding-0">
                           <div class="input-field">
                              <input type="password" id="register_password" class="validate" />
                              <label for="register_password">Enter your Password</label>
                           </div>
                           </div>
                           <div class="col s12 padding-0">
                           <button type="submit" class="btn btn-large green accent-4 center-block">Register Now</button>
                           </div>
                        </form>
                     </div>
                     </div>
                     <div id="loginSection" class="col s12 animated slideInUp">
                     <div class="card-title">Login</div>
                     <div class="row">
                        <form action="" name="loginForm" onSubmit="authLogin(event)">
                           <div class="col s12 padding-0">
                           <div class="input-field">
                              <input type="text" id="login_email" class="validate" autocomplete="off" />
                              <label for="login_email">Enter your Email</label>
                           </div>
                           </div>
                           <div class="col s12 padding-0">
                           <div class="input-field">
                              <input type="password" id="login_password" class="validate" />
                              <label for="login_password">Enter your Password</label>
                           </div>
                           </div>
                           <div class="col s12 padding-0">
                           <button type="submit" class="btn btn-large green accent-4 center-block">Login Now</button>
                           </div>
                        </form>
                     </div>
                     </div>
                  </div>

               </div>
               </div>
            </div>
         </div>
         
         <div id="root" class="row">
            <div class="col l4 offset-l4 m6 offset-m3 s12">
               <div class="card">
               <div class="card-content" id="firebase-token">
                  
               </div>
               </div>
            </div>
         </div>
         </body>

      </div>
   )
}

