import React from 'react';

import '../styles/components/Categories.scss';

const Categories = ({ children }) => (
  <div className="categories">
    <h3 className="categories_title">Mis Rutas</h3>
    {children}
  </div>
);

export default Categories;
