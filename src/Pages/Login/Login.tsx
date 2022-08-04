import React from "react";
import { useLocation } from "react-router-dom";
import Head from "../../Components/Head/Head.js";

const Login = () => {
  const location = useLocation();
  return (
    <>
      <Head
        title={`Dogs | ${
          location.pathname.slice(1).charAt(0).toUpperCase() +
          location.pathname.slice(2)
        }`}
        description="This site list all cutest dogs of the internet"
      />
      <h1>Login</h1>
    </>
  );
};
export default Login;
