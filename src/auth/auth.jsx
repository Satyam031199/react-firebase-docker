import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/config.firebase";
import './auth.css'

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Firebase Authentication</h2>
      <div className="form-container">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="form-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form-input"
        />
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default Auth;
