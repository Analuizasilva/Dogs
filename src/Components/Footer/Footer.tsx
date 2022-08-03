import React from "react";
import { Container, Navbar } from "react-bootstrap";
import DogSvg from "../../Assets/svg/DogSvg";

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Footer</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Ana Luiza</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;
