import React from 'react';
import { Row, Col } from 'reactstrap';

import '../styles/components/Main.scss';

const Search = () => (
  <div>
    <Row>
      <Col>
        <div className="main">
          <h2 className="main__title">¿Qué quieres ver hoy?</h2>
          <input type="text" className="input" placeholder="Buscar..." />
        </div>
      </Col>
    </Row>
  </div>
);

export default Search;
