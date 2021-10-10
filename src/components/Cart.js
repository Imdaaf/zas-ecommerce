import React from 'react';
import { useCartContext } from '../../Context/cartContext';

const Cart = ({ condition = true }) => {
  const { cartList } = useCartContext();

  console.log(cartList);
  return (
    <div>
      <h1>Cart</h1>

      {cartList.map((resp) => (
        <h2>{resp.item.name}</h2>
      ))}
    </div>
  );
};

export default Cart;
