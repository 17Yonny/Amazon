import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Redirect, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/layout/Header';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';
import ShoppingContext from './context/shopping/shoppingContext';
import { auth } from './firebase';

const App =  ()=> {
  const shoppingContext = useContext(ShoppingContext)
  const { setUser } = shoppingContext
  //const [isLoggedIn, setIsLoggedIn] = useState(false)
  

   useEffect(()=> {
    auth.onAuthStateChanged((authUser)=>{
    console.log("User is ->", authUser)
  
    if (authUser){
    setUser({ user: authUser })
    } else {
      setUser({user: null})
    }
})
}, []);

   //useEffect(() => {
    //const unsubscribe = auth.onAuthStateChanged(user => {
     // if (user) {
       // console.log('User is signed in:', user);
      //} else {
       // console.log('No user is signed in.');
      //}
    //});

    //return () => unsubscribe(); // Cleanup subscription on unmount
  //}, []);

 // useEffect(()=> {
   //const userInfo = localStorage.getItem("isLoggedIn")

   //if(userInfo== '1'){
    //setIsLoggedIn(true)
  // }
  //},[])
  
//const loginHandler = (email, password) =>{
  //localStorage.setItem("isLoggedIn", "1")
  //setIsLoggedIn(true)
//}

//const logoutHandler = ()=>{
  //localStorage.removeItem("isLoggedIn") 
  //setIsLoggedIn(false)
//}
  
 
 
  return (
    <>
      <Header />
     <main>
      <Switch>
        <Route path='/' exact>
         <Redirect to='/home' />
        </Route>
      <Route path='/home'exact>
      <Home />
      </Route>
      <Route path='/products' exact>
      <Products />
      </Route>
      <Route path='/products/:id'>
      <ProductDetails />
      </Route>
      <Route path='/login'>
       <Login />
      </Route>
      <Route path="*">
       <NotFound />
      </Route>
      </Switch>
     </main>
    </>
  );
}

export default App;
