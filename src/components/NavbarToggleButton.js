import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../Estilos/NavbarToggleButton.css';

const NavbarToggleButton = () => {
  return (
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler">
      <span className="navbar-toggler-icon"></span>
    </Navbar.Toggle>
  );
};

export default NavbarToggleButton;
