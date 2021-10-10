import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  const [changeButton, setChangeButton] = useState(true);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const agregarCarrito = () => {
    onAdd(count);
    setChangeButton(false)
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
          onClick={sumar}
        >
          +
        </button>
      </div>
      {changeButton ? (
        <button
          className="btn btn-dark border-light btn-block "
          onClick={agregarCarrito}
        >
          Agregar carrito
        </button>
      ) : (
        <div>
          <Link to="/cart">
            <button>Terminar Compra</button>
          </Link>
          <Link to="/">
            <button>Seguir Comprando</button>
          </Link>
        </div>
      )}
    </div>
  );
}
