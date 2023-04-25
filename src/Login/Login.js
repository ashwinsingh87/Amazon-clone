import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signIn = (e) => {
    e.preventDefault(); //avoids reloading of the page.

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log("inside auth");
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn}>Sign in</button>
        </form>
        <p>
          By continuing, you agree to AMAZON CLONE's Conditions of Use and
          Privacy Notice.
        </p>
        <button className="login__register__button" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
