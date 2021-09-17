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
    <div className="contador">
      <button onClick={onAdd} className="suma">
        +
      </button>
      <input disabled value={count} className="cantidad" />
      <button onClick={restar} className="resta">
        -
      </button>
    </div>
  );
}
