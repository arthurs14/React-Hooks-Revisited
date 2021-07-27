import React, { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ]);

  const value = {
    products: products
  };
  
  return (
    <ProductsContext.Provider value={value}>
      { props.children }
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;