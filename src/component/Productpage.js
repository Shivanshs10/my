// Productpage.js
import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const Productpage = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingItemIndex = cart.findIndex(item => item.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity++;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.filter(item => item.id !== product.id);
        setCart(updatedCart);
    };

    return (
        <div className="product-page" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <div className="content-wrapper" style={{ flex: 1, display: 'flex' }}>
                <div className="product-list-container" style={{ flex: 1 }}>
                    <ProductList addToCart={addToCart} />
                </div>
                <div className="cart-container" style={{ width: '300px', marginLeft: '20px' }}>
                    <Cart cart={cart} removeFromCart={removeFromCart} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Productpage;
