import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <h1>LandingPage</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </>
  );
};

export default LandingPage;
