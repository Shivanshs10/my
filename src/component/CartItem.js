// CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    const imageStyle = {
        maxWidth: '100px',
        maxHeight: '100px',
        marginRight: '10px'
    };

    const handleRemoveFromCart = () => {
        removeFromCart(item);
    }

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} style={imageStyle} />
            <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
                <button onClick={handleRemoveFromCart}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;
