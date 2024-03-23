import React from 'react';

const CartItem = ({ item }) => {
    const handleRemoveItem = () => {
        // Implement remove item logic here
    }

    return (
        <div className="cart-item">
            {/* Product details */}
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            {/* Quantity */}
            <p>{item.quantity}</p>
            {/* Total price */}
            <p>${item.price * item.quantity}</p>
            {/* Remove button */}
            <button onClick={handleRemoveItem}>Remove</button>
        </div>
    );
}

export default CartItem;
