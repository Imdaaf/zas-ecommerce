/* import logo from '../img/logoej.jpg'; */
import React from 'react';
import '../css/Navbar.css';
import CartWidget from './CartWidget';

export default function Navegador() {
  return (
    <div className="contenedorMenu">
      <ul className="menu">
        <li className="anclas">
          <img src="" className="logo" />
        </li>
        <li className="anclas">
          <a href="">Home</a>
        </li>
        <li className="anclas">
          <a href="">Productos</a>
        </li>
        <li className="anclas">
          <a href="">Tienda</a>
        </li>
        <li className="anclas">
          <a href="">
            <CartWidget />
          </a>
        </li>
      </ul>
    </div>
  );
}
