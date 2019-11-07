import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import "./styles/app.scss";
import Categories from "./components/Categories";
import CarouselItems from "./components/CarouselItems";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />

      <Categories>
        <Carousel>
          <CarouselItems />
          <CarouselItems />
          <CarouselItems />
        </Carousel>
      </Categories>
    </div>
  );
}

export default App;
