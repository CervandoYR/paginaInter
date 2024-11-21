import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Estilos/ContactForm.css'; // Import the new CSS for styling

const ContactForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
    // Here you would send the form data to your backend
  };

  return (
    <div id="contacto" className="my-5">
      <h2 className="text-center section-title">Contáctanos</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Escribe tu mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
