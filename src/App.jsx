import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wedding from './pages/Wedding';
import Birthday from './pages/Birthday';
import Events from './pages/Events';
import Customize from './pages/Customize';
import Contact from './pages/Contact';

// Scroll to top helper on page route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [cartCount, setCartCount] = useState(1);
  const [wishlistCount, setWishlistCount] = useState(3);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleToggleWishlist = () => {
    setWishlistCount((prev) => prev + 1);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout d-flex flex-column min-vh-100">
        <Navbar />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/birthday" element={<Birthday />} />
            <Route path="/events" element={<Events />} />
            <Route path="/customize" element={<Customize onAddToCart={handleAddToCart} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
