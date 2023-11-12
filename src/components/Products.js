// Products.js
import React, { useState } from 'react';
import Bread from './Bread';
import PotatoCrisps from './PotatoCrisps';
import PotatoPowder from './PotatoPowder';
import './Products.css';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState('bread');

  return (
    <div className="products-container">
      <div className="product-navigation">
        <button onClick={() => setActiveProduct('bread')}>Bread</button>
        <button onClick={() => setActiveProduct('crisps')}>Potato Crisps</button>
        <button onClick={() => setActiveProduct('powder')}>Potato Powder</button>
      </div>
      <div className="product-display">
        {activeProduct === 'bread' && <Bread />}
        {activeProduct === 'crisps' && <PotatoCrisps />}
        {activeProduct === 'powder' && <PotatoPowder />}
      </div>
    </div>
  );
};

export default Products;
