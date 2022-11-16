import "./css/LogIn.css";
import React from 'react'
import firebase from '../services/firebase'
import {useHistory} from 'react-router-dom'
import './Login.css'

const Login = () => {
const history = useHistory();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((success) => {

                let user = success.user;

                const obj = {
                    username : user.displayName,
                    email:user.email,
                    uid:user.uid,
                    img:user.photoURL
                }
                console.log(obj)
                localStorage.setItem('codecaamp',JSON.stringify(obj))
                history.push('/welcome')
            })
            .catch(err => err.message)
    }

    return (
        <div className="login-buttons">
            <div  className="ikmg"><img width="200px" src="https://res.cloudinary.com/codecaamp/image/upload/v1610815107/Purple_Modern_Technology_Gaming_Logo_gqpbv2.png" alt="codecaamp"/></div>
            <h2 style={{fontFamily:"monospace",fontSize:"40px"}}>Welcome to Codecaamp</h2>
            <h3>Continue With</h3>
            <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
                <span> Continue with Google</span>
            </button>
        </div>
    )
}

export default Login

export function LogIn() {
   return (
      <div>
         <h1>Log In page</h1>
      </div>
   )
}