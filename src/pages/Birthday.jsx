import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import InvitationCard from '../components/InvitationCard';
import { ALL_INVITATIONS, BIRTHDAY_CATEGORIES } from '../data/invitationsData';

export default function Birthday() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter only birthday cards
  const birthdayCards = ALL_INVITATIONS.filter((card) => card.type === 'birthday');

  const filteredCards = selectedCategory === 'All'
    ? birthdayCards
    : birthdayCards.filter((card) => card.category === selectedCategory);

  return (
    <div className="page-birthday">
      {/* Birthday Header Banner (Orange + Blue) */}
      <section className="hero-birthday py-4 text-center">
        <div className="container">
          <span className="badge bg-warning text-dark px-3 py-1 rounded-pill mb-2">
            🎈 Party Time!
          </span>
          <h1 className="fw-bold text-primary mb-2">Birthday Invitations</h1>
          <p className="text-muted max-w-600 mx-auto mb-0">
            Fun and colorful birthday invitation cards for kids, 1st birthday milestones, teenagers, adults, and surprise parties.
          </p>
        </div>
      </section>

      {/* Popular Birthday Carousel */}
      <section className="container py-4">
        <Carousel 
          items={birthdayCards} 
          title="Popular Birthday Designs" 
        />
      </section>

      {/* Category Filter Tabs */}
      <section className="container pb-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 pb-2 border-bottom">
          <div>
            <h3 className="h5 fw-bold mb-0 text-dark">Filter Birthday Categories</h3>
            <small className="text-muted">Showing {filteredCards.length} cards</small>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {BIRTHDAY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm rounded-pill px-3 ${
                  selectedCategory === cat ? 'filter-btn-birthday active' : 'btn-outline-secondary'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Birthday Cards Grid */}
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
