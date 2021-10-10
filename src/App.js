import React from 'react';
import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navegador from './components/NavBar';
import Cart from './components/Cart';
import CartContext from '../context/cartContext';

export default function App() {
  return (
    <CartContext>
    <Router>
      <Navegador />
      <Home />
      <Switch>
        <Route path="/" exact component={ItemListContainer} />
        <Route
          path="/categoria/:idCategoria"
          exact
          component={ItemListContainer}
        />
        <Route path='/detalle/:idProducto' exact component={ItemDetailContainer} />
        <Route path="" />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </Router>
    </CartContext>
  );
}
