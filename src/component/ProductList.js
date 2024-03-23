import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../data/products';

const ProductList = () => {
    return (
        <div className="product-list">
            {/* Mapping through productsData array and rendering ProductItem for each product */}
            {productsData.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
