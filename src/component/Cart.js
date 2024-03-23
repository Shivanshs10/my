import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart }) => {
    return (
        <div className="cart">
            <h2>Cart</h2>
            {/* Mapping through cart items and rendering CartItem for each item */}
            {cart.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            {/* Total price of all items in the cart */}
            <p>Total: ${calculateTotal(cart)}</p>
        </div>
    );
}

// Function to calculate total price of all items in the cart
const calculateTotal = (cart) => {
    // Implement logic to calculate total price here
}

export default Cart;
