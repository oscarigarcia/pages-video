import React from 'react';

import { Row } from 'reactstrap';
import '../styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <Row className="carousel">
    <div className="carousel__container">{children}</div>
  </Row>
);

export default Carousel;
