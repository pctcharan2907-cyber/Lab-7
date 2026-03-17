import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = React.memo(({ product }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <p>{product.description}</p>
    <Link to={`/products/${product.id}`}>View Details</Link>
  </div>
));

function Products({ products }) {
  return (
    <div className="page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;