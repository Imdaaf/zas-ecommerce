/* import logo from '../img/logoej.jpg'; */
import React from 'react';
import '../css/Navbar.css';
import CartWidget from './CartWidget';

export default function Navegador() {
  return (
    <div className="contenedorMenu">
{/*       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  </nav>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
    </ul>
  </div> */}

      <ul className="menu">
        <li className="anclas">
          <img
            src="https://s3.cine3.com/2020/07/Harry-Potter-emblem.jpg"
            className="logo"
          />
        </li>
        <li className="anclas">
          <a href="" className="home">
            Home
          </a>
        </li>
        <li className="anclas">
          <a href="" className="productos">
            Productos
          </a>
        </li>
        <li className="anclas">
          <a href="" className="tienda">
            Tienda
          </a>
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
