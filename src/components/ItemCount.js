import { useState, useEffect } from 'react';
import React from 'react';

export default function ItemCount() {
  const [count, setCount] = useState(1);
  const onAdd = () => {
    const cantidadTotal = count + 1;
    setCount(cantidadTotal);
  };
  const restar = () => {
    const cantidadTotal = count - 1;
    setCount(cantidadTotal);
  };

  return (
    <div className="contenedorContador">
      <div className="d-flex justify-content-center contador">
        <button
          className="col-2 resta btn btn-dark border-light btn-block"
          onClick={restar}
        >
          -
        </button>
        <input
          className="border-light col-2 form-control text-center"
          type="text"
          disabled
          value={count}
          readonly
        />
        <button
          className="col-2 suma btn btn-dark border-light btn-block"
          onClick={onAdd}
        >
          +
        </button>
      </div>
      <button className="btn btn-dark border-light btn-block " onClick={onAdd}>
        Agregar carrito
      </button>
    </div>
  );
}
