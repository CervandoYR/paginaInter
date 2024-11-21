import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../Estilos/Planes.css'; // Import the CSS for the cards

const Planes = () => {
  return (
    <div id="planes" className="my-5">
      <h2 className="text-center section-title">Nuestros Planes</h2>
      <Row className="justify-content-center">
        <Col md={3} className="mb-4">
          <Card className="plan-card">
            <Card.Body>
              <Card.Title>Plan Básico</Card.Title>
              <Card.Text>
                50 Mbps de velocidad.
                <br />
                Ideal para navegación básica y streaming.
              </Card.Text>
              <Button variant="primary">Ver Plan</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="plan-card">
            <Card.Body>
              <Card.Title>Plan Avanzado</Card.Title>
              <Card.Text>
                100 Mbps de velocidad.
                <br />
                Perfecto para múltiples dispositivos y streaming en 4K.
              </Card.Text>
              <Button variant="primary">Ver Plan</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="plan-card">
            <Card.Body>
              <Card.Title>Plan Premium</Card.Title>
              <Card.Text>
                200 Mbps de velocidad.
                <br />
                Para hogares con múltiples usuarios y gamers.
              </Card.Text>
              <Button variant="primary">Ver Plan</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Planes;
