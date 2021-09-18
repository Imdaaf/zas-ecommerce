import React from 'react';
import ItemCount from './ItemCount';

const Item = ({ producto }) => {
  return (
    <div
      key={producto.id}
      className="contenedorProductos border-dark card mt-5"
      style={{ width: '17rem' }}
    >
      <img
        src={producto.img}
        className="card-img-top fotoProducto"
      />
      <div className="card-body">
        <div className="card-title mt-2 text-center">{producto.titulo}</div>
        <div className="">
          <p className="text-center"> ${producto.precio}</p>
        </div>
        <ItemCount stock={5} initial={1} />
        <button className="btn btn-dark border-light btn-block">
          Detalle producto
        </button>
      </div>
    </div>
  );
};

export default Item;
