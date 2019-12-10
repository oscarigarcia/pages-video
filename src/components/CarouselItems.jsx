import React from 'react';
import { Col, Row } from 'reactstrap';

import '../styles/components/CorouselItems.scss';
// import pepe from '../images/barrio-nuevo.png';

const CarouselItems = props => {
  const { cards, id } = props;

  return (
    <Col xs={12} lg={12}>
      <div className="CardContainer">
        <Row>
          {cards.map(card => (
            <a target="_blank" href={`${card.link}`} rel="noopener noreferrer">
              <Col lg={6}>
                <div className="carousel-items" key={id}>
                  <img
                    className="carousel-item__img"
                    src={require(`../image/${card.background}`)}
                    alt="icon"
                    // src={`../image/${card.background}`}
                    // alt="icon"
                  />
                  <div className="carousel-item__details">
                    <p className="carousel-item__details--title">
                      {card.title}
                    </p>
                    <p className="carousel-item__details--subtitle">
                      {card.subTitle}
                    </p>
                  </div>
                </div>
              </Col>
            </a>
          ))}
        </Row>
      </div>
    </Col>
  );
};

export default CarouselItems;
