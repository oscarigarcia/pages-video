import React from 'react';
import { Row, Col } from 'reactstrap';

import RouteMap from '../assets/routemap.png';
import '../styles/components/Header.scss';

const Header = () => (
  <div>
    <Row>
      <Col>
        <div className="header">
          <img className="header__img" src={RouteMap} alt="Route Map" />
          <div className="header__menu">
            <div className="header__menu--profile">
              <img src="../assets/user-icon.png" alt="" />
              <p>Perfil</p>
            </div>
            <ul>
              <li>
                <a href="/#">Cuenta</a>
              </li>
              <li>
                <a href="/">Cerrar Sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Header;
