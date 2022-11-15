import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import { initializeApp } from "firebase/app"; // importing firebase
import "firebase/auth";


// This file shouldn't be touched, it should only call <App/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

