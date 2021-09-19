import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import ItemListContainer from './components/ItemListContainer';
import Navegador from './components/NavBar';
import Cart from './components/Cart';

export default function App() {
  return (
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
        <Route path="" />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </Router>
  );
}
