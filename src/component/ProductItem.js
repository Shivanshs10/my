// ProductItem.js
import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    }

    const handleAddToCart = () => {
        addToCart(product);
    }

    return (
        <div className="product-item" onMouseEnter={handleToggleDetails} onMouseLeave={handleToggleDetails}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {showDetails && (
                <div className="product-details">
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                </div>
            )}
        </div>
    );
}

export default ProductItem;
