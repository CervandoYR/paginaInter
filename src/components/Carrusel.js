import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Estilos/MyCarrusel.css';

const MyCarrusel = () => {
  return (
    <div id="carrusel" className="my-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="imagen1"
            src="https://d22k5h68hofcrd.cloudfront.net/magefan_blog/Diez_ventajas_de_tener_conexi_n_a_internet_por_fibra_ptica.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Plan Super Rápido</h3>
            <p>¡Disfruta de internet de alta velocidad con nuestro nuevo plan!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imagen2"
            src="https://es.vsolcn.com/wp-content/uploads/2023/04/image.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Internet Ilimitado</h3>
            <p>Conéctate sin límites con nuestra oferta exclusiva.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarrusel;
