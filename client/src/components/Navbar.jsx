import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Context, server } from "../main";
import { toast } from "react-hot-toast";
import axios from "axios";

function NavigationBar() {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, setUser } =
    useContext(Context);
  const logoutHandler = async (e) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/auth/logout`, {
        withCredentials: true,
      });
      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setLoading(false);
      setUser({});
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
      setIsAuthenticated(true);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="px-4">
      <Navbar.Brand href="/">Praedico</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "end" }}>
        <div className="d-flex gap-5 mx-4">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          {!isAuthenticated ? (
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          ) : (
            <></>
          )}

          {isAuthenticated ? (
            <button
              type="button"
              disabled={loading}
              onClick={logoutHandler}
              className="btn btn-dark btn-sm"
            >
              LogOut
            </button>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
          {isAuthenticated ? (
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          ) : (
            <></>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
