// Bread.js
import React from 'react';
import './Bread.css';

const Bread = () => {
  return (
    <div className="product-container">
      <div className="product-info">
        <h2>Bread</h2>
        <p>Discover our delicious Sweet Potato Bread, made with a unique blend of ingredients for a delightful flavor.</p>
        <h3>Ingredients</h3>
        <ul>
          <li>1 ½ cups white sugar</li>
          <li>½ cup vegetable oil</li>
          <li>2 large eggs</li>
          <li>1 ¾ cups sifted all-purpose flour</li>
          <li>1 teaspoon baking soda</li>
          <li>½ teaspoon ground cinnamon</li>
          <li>½ teaspoon ground nutmeg</li>
          <li>¼ teaspoon salt</li>
          <li>⅓ cup water</li>
          <li>1 cup cooked and mashed sweet potatoes</li>
          <li>½ cup chopped pecans</li>
        </ul>
        <h3>Nutrition Facts (per serving)</h3>
        <p>Calories: 303</p>
        <p>Fat: 14g</p>
        <p>Carbs: 43g</p>
        <p>Protein: 4g</p>
      </div>
    </div>
  );
};

export default Bread;
