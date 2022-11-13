import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import { initializeApp } from "firebase/app"; // importing firebase
import "firebase/auth";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3_6IAbYBbJiGzXGK8WVOXIkxAmtUoY0w",
  authDomain: "make-it-home-app.firebaseapp.com",
  projectId: "make-it-home-app",
  storageBucket: "make-it-home-app.appspot.com",
  messagingSenderId: "1003220503069",
  appId: "1:1003220503069:web:2e51d240ecd85cbf6754f4"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// This file shouldn't be touched, it should only call <App/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

