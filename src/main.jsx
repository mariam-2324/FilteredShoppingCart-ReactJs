import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));   //this code line is called Functional component
root.render(
  <React.StrictMode>
    <BrowserRouter >
    <App />  
    </BrowserRouter> 
  </React.StrictMode>
);
