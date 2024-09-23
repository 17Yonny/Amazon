//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import  { AuthContextProvider } from './context/AuthContext';
import { ShoppingState } from "./context/shopping/shoppingState";



ReactDOM. render(
<BrowserRouter>
<AuthContextProvider>
<ShoppingState>
<App />
</ShoppingState>
</AuthContextProvider>
</BrowserRouter>,
document.getElementById('root')   
);



