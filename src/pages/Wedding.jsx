import React, { useState } from 'react';
import { FaCrown } from 'react-icons/fa';
import Carousel from '../components/Carousel';
import InvitationCard from '../components/InvitationCard';
import { ALL_INVITATIONS, WEDDING_CATEGORIES } from '../data/invitationsData';

export default function Wedding() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter only wedding cards
  const weddingCards = ALL_INVITATIONS.filter((card) => card.type === 'wedding');

  const filteredCards = selectedCategory === 'All'
    ? weddingCards
    : weddingCards.filter((card) => card.category === selectedCategory);

  return (
    <div className="page-wedding">
      {/* Wedding Header Banner (Rose Pink + Gold) */}
      <section className="hero-wedding py-4 text-center">
        <div className="container">
          <span className="badge badge-gold px-3 py-1 rounded-pill mb-2">
            <FaCrown className="me-1" /> Wedding Collection
          </span>
          <h1 className="fw-bold text-danger mb-2">Wedding Invitations</h1>
          <p className="text-muted max-w-600 mx-auto mb-0">
            Explore beautiful wedding cards for Traditional, Modern, Royal, South Indian, Engagement, and Reception celebrations.
          </p>
        </div>
      </section>

      {/* Featured Wedding Carousel */}
      <section className="container py-4">
        <Carousel 
          items={weddingCards} 
          title="Featured Wedding Cards" 
        />
      </section>

      {/* Category Filter Tabs */}
      <section className="container pb-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 pb-2 border-bottom">
          <div>
            <h3 className="h5 fw-bold mb-0 text-dark">Filter Wedding Designs</h3>
            <small className="text-muted">Showing {filteredCards.length} cards</small>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {WEDDING_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm rounded-pill px-3 ${
                  selectedCategory === cat ? 'filter-btn-wedding active' : 'btn-outline-secondary'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Wedding Cards Grid */}
        <div className="row g-4">
          {filteredCards.map((card) => (
            <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
              <InvitationCard card={card} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
