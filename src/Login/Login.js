import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
          <button>Sign in</button>
        </form>
        <p>
          By continuing, you agree to AMAZON CLONE's Conditions of Use and
          Privacy Notice.
        </p>
        <button className="login__register__button">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
