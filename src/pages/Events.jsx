import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaEye, FaPalette } from 'react-icons/fa';
import Carousel from '../components/Carousel';
import { ALL_INVITATIONS, OTHER_EVENT_CATEGORIES } from '../data/invitationsData';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  // Filter only other events cards
  const eventCards = ALL_INVITATIONS.filter((card) => card.type === 'events');

  const filteredCards = selectedCategory === 'All'
    ? eventCards
    : eventCards.filter((card) => card.category === selectedCategory);

  // Different background color for each category as requested!
  const getCategoryBgColor = (cat) => {
    switch (cat) {
      case 'Baby Shower': return '#fce4ec'; // Soft Pink
      case 'Housewarming': return '#fff3e0'; // Warm Orange/Peach
      case 'Anniversary': return '#f3e5f5'; // Gentle Purple
      case 'Graduation': return '#e3f2fd'; // Fresh Light Blue
      case 'Naming Ceremony': return '#e0f2f1'; // Mint Green
      case 'Festival': return '#fffde7'; // Festive Yellow
      case 'Corporate Events': return '#eceff1'; // Slate Grey
      default: return '#ffffff';
    }
  };

  return (
    <div className="page-events">
      {/* Events Header Banner (Green + Yellow) */}
      <section className="hero-events py-4 text-center">
        <div className="container">
          <span className="badge bg-success text-white px-3 py-1 rounded-pill mb-2">
            🌿 Special Occasions
          </span>
          <h1 className="fw-bold text-success mb-2">Other Events Invitations</h1>
          <p className="text-muted max-w-600 mx-auto mb-0">
            Thoughtful cards for Baby Shower, Housewarming, Anniversary, Graduation, Naming Ceremony, Festival, and Corporate Events.
          </p>
        </div>
      </section>

      {/* Carousel of Popular Events */}
      <section className="container py-4">
        <Carousel 
          items={eventCards} 
          title="Popular Event Invitations" 
        />
      </section>

      {/* Category Filter Tabs */}
      <section className="container pb-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 pb-2 border-bottom">
          <div>
            <h3 className="h5 fw-bold mb-0 text-dark">Filter By Event</h3>
            <small className="text-muted">Showing {filteredCards.length} cards with distinct background colors</small>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {OTHER_EVENT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm rounded-pill px-3 ${
                  selectedCategory === cat ? 'filter-btn-events active' : 'btn-outline-secondary'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid with different background colors for each category */}
        <div className="row g-4">
          {filteredCards.map((card) => {
            const cardBg = getCategoryBgColor(card.category);
            return (
              <div className="col-12 col-md-6 col-lg-4" key={card.id}>
                <div 
                  className="card simple-card h-100 p-3 shadow-sm border"
                  style={{ backgroundColor: cardBg }}
                >
                  {/* Image */}
                  <div className="card-img-box mb-3 rounded shadow-xs" style={{ height: '180px' }}>
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="img-fluid"
                    />
                  </div>

                  {/* Body */}
                  <div className="d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-dark text-white">{card.category}</span>
                        <div className="small star-rating d-flex align-items-center gap-1">
                          <FaStar />
                          <strong className="text-dark">{card.rating}</strong>
                        </div>
                      </div>

                      <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '17px' }}>
                        {card.title}
                      </h5>

                      <p className="text-muted small mb-3">
                        {card.description}
                      </p>
                    </div>

                    {/* Price and Buttons */}
                    <div className="pt-2 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                      <div>
                        <span className="text-muted small d-block">Price</span>
                        <strong className="text-dark fs-5">{card.price}</strong>
                      </div>

                      <div className="d-flex gap-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-dark rounded-pill px-3"
                          onClick={() => navigate(`/customize?card=${card.id}`)}
                        >
                          <FaEye className="me-1" /> View Card
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-success rounded-pill px-3"
                          onClick={() => navigate(`/customize?card=${card.id}`)}
                        >
                          <FaPalette className="me-1" /> Customize
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
