import React from 'react';
import { useState, useEffect } from 'react';
import '../css/ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFetch } from '../utils/Mock.js';
import ItemList from './ItemList';

export default function ItemListContainer({ onAdd }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();
  useEffect(() => {
    if (idCategoria) {
      getFetch
        .then((res) => {
          setProductos(res.filter((prods) => prods.categoria === idCategoria));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((res) => {
          setProductos(res);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  return (
    <div className="lista">
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : (
        <div className="listadoProductos">
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
}
