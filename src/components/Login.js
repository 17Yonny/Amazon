import React, { useState, useEffect, useContext, useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase"
//import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const [error, setError] = useState("");
  

  const signIn = (e) => {
    e.preventDefault();
   auth
   .signInWithEmailAndPassword(email, password)
      .then((auth) => {
       history.push("/")
        // Redirect or perform additional actions upon successful sign-in
      })
      .catch((error) => alert(error.message));
  };

  const register = e =>{
    e.preventDefault()
   auth
   .createUserWithEmailAndPassword(email, password).then(
    (auth) => {
    if(auth) {
    history.push("/")
    }
    })
    .catch((error) => alert(error.message));
};


//const handleLogin = () => {
  //signInWithEmailAndPassword(auth, email, password)
   // .then((userCredential) => {
      // Signed in
     // const user = userCredential.user;
     // console.log('Logged in as:', user.email);
    //})
    //.catch((error) => {
      //console.error('Error signing in:', error);
    //});
//};

// Creating a new user
//const handleRegister = () => {
  //createUserWithEmailAndPassword(auth, email, password)
    //.then((userCredential) => {
      // Registered
      //const user = userCredential.user;
      //console.log('User registered with email:', user.email);
    //})
    //.catch((error) => {
      //console.error('Error registering:', error);
    //});
//};

return (
   <div className="login">
      <Link to="/">
        <img
          src="data:image/png;base64,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"
          alt="Amazon Logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value  )}
            required  
          />
          <h5>Password</h5>
          <input
            type="text"
            value={password}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login_registerButton"onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}


export default Login;
