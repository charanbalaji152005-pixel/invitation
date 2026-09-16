import React from 'react';
import { Link } from 'react-router-dom';
import { FaPalette, FaArrowRight, FaStar, FaCheckCircle } from 'react-icons/fa';
import InvitationCard from '../components/InvitationCard';
import CategoryCard from '../components/CategoryCard';
import { ALL_INVITATIONS, POPULAR_CATEGORIES } from '../data/invitationsData';
import { REVIEWS_DATA } from '../data/reviewsData';

export default function Home() {
  // Show first 6 cards as featured
  const featuredCards = ALL_INVITATIONS.slice(0, 6);

  return (
    <div className="page-home">
      {/* 1. HERO SECTION (Cream + Purple Palette) */}
      <section className="hero-home py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Hero Left Content */}
            <div className="col-12 col-lg-6">
              <span className="badge bg-purple px-3 py-2 rounded-pill mb-3">
                ✨ Online Invitation Card Store
              </span>
              <h1 className="display-5 fw-bold text-dark mb-3">
                Beautiful Invitations for <span className="text-primary">Every Special Moment</span>
              </h1>
              <p className="lead text-muted mb-4">
                Welcome to KrishaCards! Easily choose, customize, and order stunning cards for weddings, birthdays, baby showers, housewarmings, and special events.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link to="/wedding" className="btn btn-purple btn-lg rounded-pill px-4">
                  Explore Cards <FaArrowRight className="ms-1" />
                </Link>
                <Link to="/customize" className="btn btn-outline-purple btn-lg rounded-pill px-4">
                  <FaPalette className="me-1" /> Customize Now
                </Link>
              </div>

              {/* Key Highlights */}
              <div className="d-flex flex-wrap gap-3 text-muted small">
                <span><FaCheckCircle className="text-success me-1" /> Live Instant Preview</span>
                <span><FaCheckCircle className="text-success me-1" /> High Quality Printing</span>
                <span><FaCheckCircle className="text-success me-1" /> Free WhatsApp e-Card</span>
              </div>
            </div>

            {/* Hero Right: Large Invitation Image */}
            <div className="col-12 col-lg-6 text-center">
              <div className="card shadow border-0 rounded-4 overflow-hidden p-2 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Invitation Card Preview" 
                  className="img-fluid rounded-3 zoom-on-hover"
                  style={{ maxHeight: '380px', objectFit: 'cover' }}
                />
                <div className="card-body py-2">
                  <span className="badge bg-warning text-dark me-2">Featured</span>
                  <strong className="text-dark">Luxury Gold-Embossed Wedding Card</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR CATEGORIES SECTION */}
      <section className="section-cream py-5">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge bg-secondary rounded-pill px-3 py-1 mb-2">Categories</span>
            <h2 className="fw-bold text-dark">Popular Categories</h2>
            <p className="text-muted">Pick a category to discover matching invitation designs.</p>
          </div>

          <div className="row g-3">
            {POPULAR_CATEGORIES.map((cat) => (
              <div className="col-12 col-sm-6 col-lg-4" key={cat.id}>
                <CategoryCard category={cat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED INVITATION CARDS */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <span className="badge bg-primary rounded-pill px-3 py-1 mb-2">Top Picks</span>
              <h2 className="fw-bold text-dark mb-0">Featured Invitation Cards</h2>
            </div>
            <Link to="/wedding" className="btn btn-outline-primary btn-sm rounded-pill px-3">
              View All &rarr;
            </Link>
          </div>

          <div className="row g-4">
            {featuredCards.map((card) => (
              <div className="col-12 col-sm-6 col-lg-4" key={card.id}>
                <InvitationCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER REVIEWS */}
      <section className="section-purple-light py-5">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge bg-purple text-white rounded-pill px-3 py-1 mb-2">Testimonials</span>
            <h2 className="fw-bold text-dark">What Our Customers Say</h2>
            <p className="text-muted">Real feedback from happy hosts and families.</p>
          </div>

          <div className="row g-4">
            {REVIEWS_DATA.map((item) => (
              <div className="col-12 col-md-4" key={item.id}>
                <div className="card h-100 p-4 border-0 shadow-sm rounded-3 bg-white">
                  <div className="star-rating mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="small text-muted mb-3 fst-italic">"{item.review}"</p>
                  <div className="d-flex align-items-center gap-2 mt-auto pt-2 border-top">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="rounded-circle"
                      width="40" 
                      height="40" 
                    />
                    <div>
                      <strong className="d-block small text-dark">{item.name}</strong>
                      <small className="text-muted">{item.event}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
