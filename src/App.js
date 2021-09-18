import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navegador from './components/NavBar';

export default function App() {
  return (
    <div>
      <header className="header">
        <Navegador />
      </header>
      <h1 className="text-center mt-4">
        Tienda Expelliarmus
      </h1>
      <section>
        <ItemListContainer />
      </section>
    </div>
  );
}
