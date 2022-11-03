import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';


// This file shouldn't be touched, it should only call <App/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

