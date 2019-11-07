import React from "react";
import "../styles/components/Main.scss";

const Search = () => (
  <div className="main">
    <h2 className="main__title">¿Qué quieres ver hoy?</h2>
    <input type="text" className="input" placeholder="Buscar..." />
  </div>
);

export default Search;
