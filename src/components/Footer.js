import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Servicio Internet</h5>
            <p>Conéctate al futuro con nosotros.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <h6>Contacto</h6>
            <p>Email: soporte@serviciodeinternet.com</p>
            <p>Teléfono: +123 456 7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
