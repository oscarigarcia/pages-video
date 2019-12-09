import React from 'react';
import { Col } from 'reactstrap';

import '../styles/components/CorouselItems.scss';

const CarouselItems = props => {
  const { cards } = props;

  return (
    <Col xs={12} lg={12}>
      <div className="CardContainer">
        {cards.map(card => (
          <div className="carousel-items">
            <iframe
              className="carousel-item__img"
              height="304.91"
              width="100%"
              src={card.mapAddress}
              frameBorder="0"
              title="Dirección iBAN"
              allowFullScreen
            />
            <div className="carousel-item__details">
              <p className="carousel-item__details--title">{card.title}</p>
              <p className="carousel-item__details--subtitle">
                {card.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Col>
  );
};

export default CarouselItems;
