import React  from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
// import { useProducts } from '../context/products-context';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Favorites = props => {
  // const { products } = useProducts();
  const state = useStore()[0];
  const favoriteProducts = state.products.filter(prod => prod.isFavorite);

  // const favoriteProducts = products.filter(product => product.isFavorite);
  
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
