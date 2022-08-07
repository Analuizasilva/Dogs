import React from "react";
import { Button, Form } from "react-bootstrap";
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

      <Form
        style={{
          width: "30vw",
          margin: "auto",
          textAlign: "start",
          padding: "3vw",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Login;
