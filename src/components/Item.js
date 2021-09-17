import React from 'react';
import ItemCount from './ItemCount';

const Item = ({ producto }) => {
  return (
    <div key={producto.id} className="card w-50 mt-5">
      <div className="card-header bg-white">{producto.titulo}</div>
      <div className="card-body">
        <img src={producto.img} className="fotoProducto" />${producto.precio}
      </div>
      <div className="card-footer">
        <button className="btn btn-outline-dark btn-block">
          Detalle producto
        </button>
      </div>
      <ItemCount stock={5} initial={1} />
    </div>
  );
};

export default Item;
