// Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    if (!cart || cart.length === 0) {
        return (
            <div className="cart">
                <h2><strong>Shopping Cart</strong></h2>
                <p>Total (in Cart) $0.00</p>
            </div>
        );
    }

    const calculateTotal = (cart) => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    }

    return (
        <div className="cart">
            <h2><strong>Shopping Cart</strong></h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                </div>
            ))}
            <p>Total (in Cart) ${calculateTotal(cart)}</p>
        </div>
    );
}

export default Cart;
