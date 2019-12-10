import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import whatsapp from '../assets/whatsapp.png';
import Facebook from '../assets/facebook.png';

const Contacts = () => (
  <div>
    <section>
      <div className="row">
        <div className="column small-12 large-centered ">
          <div className="global-title">
            <h2>Nos encanta escucharte</h2>
          </div>
          <div className="global-subtext">
            <h3>
              Estamos para servirte, no dudes en contactarnos para cualquier
              <br />
              inquietud, dudas o informaciones que sean de tu interés.
            </h3>
          </div>
        </div>
      </div>
    </section>
    <div>
      <Row className="spacing-margin-y">
        <Col medium={6} offsetOnLarge={3} className="row-C">
          <h3 className="text-subtitle">Contacto directo</h3>
          <Button
            color="primary"
            className="btn buttons--phone"
            target="_blank"
            rel="noopener noreferrer"
          >
            Llamar a Nuestra Oficina
          </Button>
          <Button
            className="buttons--facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo-social__media"
              src={Facebook}
              alt="Facebook Logo"
            />
            Escríbenos vía Facebook
          </Button>
          <Button target="_blank" color="primary" rel="noopener noreferrer">
            <img
              className="logo-social__media"
              src={whatsapp}
              alt="Facebook Logo"
            />
            Escríbenos vía whatsapp
          </Button>
        </Col>
      </Row>
    </div>
  </div>
);

export default Contacts;
