import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyContext } from "../../MainContext";
import "./mynav.css";

export default function MyNav() {
  const { user } = useContext(MyContext);
  return (
    <div className="navContainer">
      {/* <Navbar bg="dark" expand="lg">
        <Container>
          <Link to="/">Home</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/profile">Profile</Link>
              <Link to="/history">History</Link>
              <div className='user'>
              {
                user.firstname ? <Link to='/profile'>{user.firstname}</Link> : <Link to="/register">SignUp</Link> 
              }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <Navbar expand="lg" className="navbarCont" bg="dark">
        <div className="toogleSection">
          <Link className='nav-link' to="/">Home</Link>
         

          <div style={{ marginLeft: "auto", display: "flex" }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
        </div>
        <div className="itemSection">
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav-items">
              <Link className='nav-link' to="/profile">Profile</Link>
          <Link className='nav-link' to="/history">History</Link>
              {
                user.firstname ? <Link className='nav-link' to='/profile' style={{color: 'white', fontWeight:'bold'}}>| {user.firstname} </Link> : <Link className='nav-link' to="/register">SignUp</Link> 
              }
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
