import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
    if (!cart || cart.length === 0) {
        return <div className="cart">Cart is empty</div>;
    }

    const calculateTotal = (cart) => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    }

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
            <p>Total: ${calculateTotal(cart)}</p>
        </div>
    );
}

export default Cart;