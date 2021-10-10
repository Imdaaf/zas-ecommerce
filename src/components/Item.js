import React from 'react';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail'
import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <div
      key={producto.id}
      className="contenedorProductos border-dark card mt-5"
      style={{ width: '17rem' }}
    >
      <img src={producto.img} className="card-img-top fotoProducto" />
      <div className="card-body">
        <div className="card-title mt-2 text-center">{producto.titulo}</div>
        <div className="">
          <p className="text-center"> ${producto.precio}</p>
        </div>
        <ItemCount stock={5} initial={1} />
        <Link to = {`/detalle/${producto.id}`} >
                            <button className="btn btn-dark border-light btn-block">
                            Detalle producto
                            </button>
        </Link>

      </div>
    </div>
  );
};

export default Item;
