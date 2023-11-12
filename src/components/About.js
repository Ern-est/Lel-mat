// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Our Company</h2>
          <p>
            Welcome to Lelmat Bakery, where we create delicious bread with a twist. Our secret ingredient is sweet potatoes, giving our bread a unique and delightful flavor that you won't find anywhere else.
          </p>
          <p>
            Our commitment to quality and innovation sets us apart. We source the finest ingredients and use traditional baking techniques with a modern twist to create bread that's not only delicious but also healthier.
          </p>
        </div>
        <div className="about-image">
          <img src={require('../assets/bread.JPG')} alt="Loaf of Bread" />
        </div>
      </div>
    </div>
  );
};

export default About;
