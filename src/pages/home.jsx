import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/config.firebase";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out successfully");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      {!user ? (
        <>
          <h1>Please login</h1>
          <a href="/"><button>Login</button></a>
        </>
      ) : (
        <>
          <h1>Welcome {user?.email}</h1>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )}
    </div>
  );
};

export default Home;
