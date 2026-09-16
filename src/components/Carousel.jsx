import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaStar, FaPalette } from 'react-icons/fa';

export default function Carousel({ items = [], title = "Featured Invitations" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Simple auto slide every 4 seconds
  useEffect(() => {
    if (items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length]);

  if (!items || items.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="simple-carousel p-4 shadow-sm mb-4">
      {/* Title & Navigation Controls */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <span className="badge bg-primary text-white rounded-pill px-3 py-1 mb-1">⭐ Featured Collection</span>
          <h3 className="h4 fw-bold mb-0 text-dark">{title}</h3>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button 
            type="button" 
            className="btn btn-outline-secondary btn-sm rounded-circle"
            onClick={handlePrev}
            title="Previous"
          >
            <FaChevronLeft />
          </button>
          <span className="small text-muted fw-bold">
            {currentIndex + 1} of {items.length}
          </span>
          <button 
            type="button" 
            className="btn btn-outline-secondary btn-sm rounded-circle"
            onClick={handleNext}
            title="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <div className="carousel-img-container shadow-sm">
            <img 
              src={currentItem.image} 
              alt={currentItem.title} 
              className="img-fluid"
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="p-3 bg-light rounded-3">
            <span className="badge bg-warning text-dark mb-2">{currentItem.category}</span>
            <h4 className="fw-bold text-dark mb-2">{currentItem.title}</h4>
            <p className="text-muted small mb-3">{currentItem.description}</p>

            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="star-rating d-flex align-items-center gap-1">
                <FaStar /> <strong>{currentItem.rating}</strong>
                <span className="text-muted small">({currentItem.reviews} reviews)</span>
              </div>
              <span className="fs-5 fw-bold text-success">{currentItem.price}</span>
            </div>

            <div className="d-flex gap-2">
              <button 
                type="button" 
                className="btn btn-primary rounded-pill px-4"
                onClick={() => navigate(`/customize?card=${currentItem.id}`)}
              >
                <FaPalette className="me-1" /> Customize Now
              </button>
              <button 
                type="button" 
                className="btn btn-outline-dark rounded-pill px-3"
                onClick={() => navigate(`/customize?card=${currentItem.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
