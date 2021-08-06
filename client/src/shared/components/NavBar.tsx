import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import circleLogo from '../../assets/facebook_circle_logo.png';
import { AiFillHome, AiFillShop } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { RiGroup2Line } from 'react-icons/ri';
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img width="40px" src={circleLogo} alt="facebook-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-bar__icons">
            <Nav.Link href="">
              <AiFillHome />
            </Nav.Link>
            <Nav.Link href="#">
              <FaUserFriends />
            </Nav.Link>
            <Nav.Link href="#">
              <MdOndemandVideo />
            </Nav.Link>
            <Nav.Link href="#">
              <AiFillShop />
            </Nav.Link>
            <Nav.Link href="#">
              <RiGroup2Line />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
