import React from 'react';
import { useCartContext } from '../context/cartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ prods }) => {
  const { agregarItem } = useCartContext();
  const onAdd = (cant) => {
    agregarItem({ item: prods, cantidad: cant });
  };

  return (
    <div>
      <div>
        <h5>{productos.titulo}</h5>
        <p>{productos.descripcion}</p>
        <img src={productos.img} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
