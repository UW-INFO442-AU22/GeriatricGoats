import React from 'react'
import { Button } from 'react-bootstrap';
import { googleSignIn } from "./LogIn";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";

export function TextContent() {
    return (
        <div>
            <Button variant="primary" onClick={googleSignIn}> 
                Sign In with Google
            </Button>
        </div>
    )
}
