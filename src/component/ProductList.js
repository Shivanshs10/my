import React, { useState } from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products'; // Assuming products.js contains product data

const ProductList = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]); // Use functional update to ensure proper state update
    };

    return (
        <div className="product-list">
            {productsData.map((product, index) => (
                <ProductItem key={index} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
