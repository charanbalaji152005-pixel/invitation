import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaHeart, FaRegHeart, FaPalette, FaEye } from 'react-icons/fa';

export default function InvitationCard({ card }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const goToCustomize = () => {
    navigate(`/customize?card=${card.id}`);
  };

  return (
    <div className="card simple-card h-100 shadow-sm position-relative">
      {/* Category / Badge Tag */}
      {card.badge && (
        <span className="position-absolute top-0 start-0 m-2 badge bg-dark text-white rounded-pill px-3 py-1 z-1">
          {card.badge}
        </span>
      )}

      {/* Wishlist Heart Button */}
      <button 
        type="button"
        className="btn btn-sm btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm z-1"
        onClick={() => setIsFavorite(!isFavorite)}
        title="Save to favorites"
      >
        {isFavorite ? <FaHeart className="text-danger" /> : <FaRegHeart className="text-secondary" />}
      </button>

      {/* Card Image */}
      <div className="card-img-box" style={{ cursor: 'pointer' }} onClick={goToCustomize}>
        <img 
          src={card.image} 
          alt={card.title} 
          className="img-fluid"
        />
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column justify-content-between p-3">
        <div>
          {/* Rating and Category */}
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className="badge bg-light text-secondary border">{card.category}</span>
            <div className="small star-rating d-flex align-items-center gap-1">
              <FaStar />
              <strong className="text-dark">{card.rating}</strong>
              <span className="text-muted">({card.reviews})</span>
            </div>
          </div>

          {/* Card Title */}
          <h5 className="card-title fw-bold text-dark mt-2 mb-1" style={{ fontSize: '18px' }}>
            {card.title}
          </h5>

          {/* Description */}
          <p className="card-text text-muted small mb-3">
            {card.description}
          </p>
        </div>

        {/* Price and Action Buttons */}
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3 pt-2 border-top">
            <div>
              <span className="text-muted small d-block">Starting Price</span>
              <span className="fs-5 fw-bold text-success">{card.price}</span>
            </div>
            <span className="badge bg-success-subtle text-success">e-Card Included</span>
          </div>

          <div className="d-flex gap-2">
            <button 
              type="button" 
              className="btn btn-outline-secondary btn-sm flex-grow-1 rounded-pill"
              onClick={goToCustomize}
            >
              <FaEye className="me-1" /> View Details
            </button>
            <button 
              type="button" 
              className="btn btn-primary btn-sm flex-grow-1 rounded-pill"
              onClick={goToCustomize}
            >
              <FaPalette className="me-1" /> Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
