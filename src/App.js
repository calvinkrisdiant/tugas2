import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Ganti "Switch" dengan "Routes"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Halaman-halaman
const Home = () => (
  <div>
    <Hero />
    <h2>Home</h2>
    {/* Isi konten halaman Home di sini */}
  </div>
);

const AboutUs = () => (
  <div>
    <Hero />
    <h2>About Us</h2>
    {/* Isi konten halaman About Us di sini */}
  </div>
);

const Contact = () => (
  <div>
    <Hero />
    <h2>Contact</h2>
    {/* Isi konten halaman Contact di sini */}
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Ganti "Switch" dengan "Routes" */}
          <Route path="/" element={<Home />} /> {/* Ganti "component" dengan "element" */}
          <Route path="/about" element={<AboutUs />} /> {/* Ganti "component" dengan "element" */}
          <Route path="/contact" element={<Contact />} /> {/* Ganti "component" dengan "element" */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
