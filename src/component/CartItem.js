// CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    const imageStyle = {
        marginRight: '10px'
    };

    const handleRemoveFromCart = () => {
        // If the quantity is greater than one, decrement it by one
        if (item.quantity > 1) {
            removeFromCart({...item, quantity: item.quantity - 1});
        } else {
            removeFromCart(item); // Otherwise, remove the whole product
        }
    }

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} style={{...imageStyle, width: '50px', height: '50px'}} />
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
