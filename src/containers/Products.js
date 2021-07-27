import React from 'react';

import ProductItem from '../components/Products/ProductItem';
import { useProducts } from '../context/products-context';
import './Products.css';

const Products = props => {
  const { products } = useProducts();
  return (
    <ul className="products-list">
      {products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
