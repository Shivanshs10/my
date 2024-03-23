import React, { useState } from 'react';

const ProductItem = ({ product }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        // Implement toggle logic here
    }

    const handleAddToCart = () => {
        // Implement add to cart logic here
    }

    return (
        <div className="product-item" onMouseEnter={handleToggleDetails} onMouseLeave={handleToggleDetails}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {/* Product price */}
            <p>${product.price}</p>
            {/* Add to cart button */}
            <button onClick={handleAddToCart}>Add to Cart</button>
            {/* Display product details on hover */}
            {showDetails && (
                <div className="product-details">
                    {/* Product details */}
                    {/* Implement product details display here */}
                </div>
            )}
        </div>
    );
}

export default ProductItem;
