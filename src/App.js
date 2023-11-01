import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar component
import Home from './components/Home'; // Create a Home component
import About from './components/About'; // Create an About component
import Products from './components/Products'; // Create a Products component
import Testimonials from './components/Testimonials'; // Create a Testimonials component
import Blog from './components/Blog'; // Create a Blog component
import Contact from './components/Contact'; // Create a Contact component
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
