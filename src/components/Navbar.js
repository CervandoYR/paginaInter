import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../Estilos/MyNavbar.css';
import NavbarToggleButton from './NavbarToggleButton';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="my-navbar">
      <Container>
        <Navbar.Brand href="#carrusel" className="navbar-brand">Servicio Internet</Navbar.Brand>
        <NavbarToggleButton />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-links">
            <Nav.Link href="#carrusel" className="nav-link">Inicio</Nav.Link>
            <Nav.Link href="#planes" className="nav-link">Planes</Nav.Link>
            <Nav.Link href="#contacto" className="nav-link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
