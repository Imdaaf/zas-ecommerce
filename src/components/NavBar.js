/* import logo from '../img/logoej.jpg'; */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/Navbar.css';
import CartWidget from './CartWidget';

export default function Navegador() {
  return (
    <div className="contenedorMenu">
      <header className="header">
        <ul className="menu">
          <NavLink to={'/'}>
            <li className="anclas">
              <img
                src="https://s3.cine3.com/2020/07/Harry-Potter-emblem.jpg"
                className="logo"
              />
            </li>
          </NavLink>
          <Link to="/categoria/buzos" className="anclas productos">
            Buzos
          </Link>
          <Link to="/categoria/camperas" className="anclas productos">
            Camperas
          </Link>
          <Link to="/categoria/tazas" className="anclas productos">
            Tazas
          </Link>
          <Link to="/categoria/varitas" className="anclas productos">
            Varitas
          </Link>
          <NavLink to={'/cart'} className="anclas">
            <CartWidget />
          </NavLink>
        </ul>
      </header>
    </div>
  );
}
