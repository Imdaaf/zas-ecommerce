import React from 'react';
import { useState, useEffect } from 'react';
import { getFetchDetalle } from '../utils/Mock.js';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const [prods, setProds] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      getFetchDetalle
        .then((res) => setProds(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 3000);
  }, []);

  console.log(id);
  return (
    <div>{loading ? <h2>Cargando...</h2> : <ItemDetail prods={prods} />}</div>
  );
}
