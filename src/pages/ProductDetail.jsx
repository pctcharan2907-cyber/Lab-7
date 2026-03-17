import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="page">Product not found</div>;
  }

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <Link to={`/products/${id}/reviews`}>View Reviews</Link>
      <br />
      <Link to="/products">Back to Products</Link>
      <Outlet />
    </div>
  );
}

export default ProductDetail;