import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/reducers/authReducer';
// logo and icons
import circleLogo from '../../assets/facebook_circle_logo.png';
import { AiFillHome, AiFillShop } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { RiGroup2Line } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
const NavBar = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(removeUser());
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img width="40px" src={circleLogo} alt="facebook-logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-bar__icons">
            <NavLink to="/" className="nav-link" exact>
              <AiFillHome />
            </NavLink>
            <NavLink to="/friends" className="nav-link">
              <FaUserFriends />
            </NavLink>
            <NavLink to="/videos" className="nav-link">
              <MdOndemandVideo />
            </NavLink>
            <NavLink to="/shop" className="nav-link">
              <AiFillShop />
            </NavLink>
            <NavLink to="/group" className="nav-link">
              <RiGroup2Line />
            </NavLink>
          </Nav>
          <Nav className="nav-bar__icons">
            <FiLogOut onClick={logoutHandler} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
