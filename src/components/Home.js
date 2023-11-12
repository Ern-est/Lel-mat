import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="text">
          <h1>Welcome to Lelmat Bakery</h1>
          <p>Discover the Delicious World of Sweet Potato Bread</p>
          <a href="/products">Explore Products</a>
        </div>
        <div className="images">
          <img src={require('../assets/leaf.png')} alt="Leafer" className="hidden-image" />
          <img src={require('../assets/brd.png')} alt="Breader" className="middle-image" />
          <img src={require('../assets/sp.png')} alt="Potato" className="hidden-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
