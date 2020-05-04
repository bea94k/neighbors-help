import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Grocery Neighbors</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Link className="d-inline p-2 text-white" to="/">
            Login
          </Link>
          <Link className="d-inline p-2 text-white" to="/register">
            Register
          </Link>
          <Link className="d-inline p-2 text-white" to="/helper">
            Helper
          </Link>
          <Link className="d-inline p-2 text-white" to="/Customer">
            Customer
          </Link>
        </Nav>
        <Form inline>
          <FormControl
            mr-sm-2
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-info" type="submit">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
