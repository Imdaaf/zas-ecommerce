import React from 'react';
import { useState, useEffect } from 'react';
import '../css/ItemListContainer.css';
import { getFetch } from '../utils/Mock.js';
import ItemList from './ItemList';

export default function ItemListContainer({ onAdd }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getFetch.then((res) => {
      setProductos(res);
      setLoading(false);
    });
  }, []);
  console.log(productos);
  return (
    <div className="lista">
      <h2>Productos</h2>
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}
