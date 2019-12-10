import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import './styles/app.scss';
import Categories from './components/Categories';
import CarouselItems from './components/CarouselItems';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import cards from './components/config/cards.json';
// import Contact from './components/Contacto';

const cardObj = cards.cards;
const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories>
      <Carousel>
        <CarouselItems cards={cardObj} />
      </Carousel>
    </Categories>
    {/* <Contact /> */}
    <Footer />
  </div>
);

export default App;
