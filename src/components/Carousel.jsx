import React from "react";
import "../styles/components/Carousel.scss"

const Carousel = ({children}) => (
  <div class="carousel">
    <div class="carousel__container">
        {children}
    </div>
  </div>
);

export default Carousel;
