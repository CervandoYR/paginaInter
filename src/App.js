import React from 'react';
import MyNavbar from './components/Navbar';
import MyCarrusel from './components/Carrusel';
import Planes from './components/Planes';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles.css';

const App = () => { 
  return (
    <div>
      <MyNavbar />
      <MyCarrusel />
      <Planes />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
