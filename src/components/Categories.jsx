import React from "react";

import "../styles/components/Categories.scss"


const Categories = ({children}) => (
  <div className="categories">
    <h3 class="categories__title">Mis Rutas</h3>
    {children}
  </div>
);

export default Categories;
