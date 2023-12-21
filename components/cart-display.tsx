import React from 'react';
import { useCart } from '@/contexts/cart-context';

const CartDisplay = () => {
  const { items } = useCart();

  return (
    <div>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.sticker.sticker_id}>
              <img src={item.sticker.image_url} alt={item.sticker.name} />
              <p>{item.sticker.name}</p>
              <p>Size: {item.selectedSize}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.sticker.price}</p>
              {/* Add a button or link to remove items or adjust quantity */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
