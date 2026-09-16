import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  FaPalette, 
  FaFont, 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaUserFriends, 
  FaShoppingCart, 
  FaCheck, 
  FaUndo 
} from 'react-icons/fa';
import { ALL_INVITATIONS } from '../data/invitationsData';

export default function Customize({ onAddToCart }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const cardIdParam = searchParams.get('card');

  // Selected Card State
  const initialCard = ALL_INVITATIONS.find((c) => c.id === cardIdParam) || ALL_INVITATIONS[0];
  const [selectedCard, setSelectedCard] = useState(initialCard);

  // Text Customization State (Name, Date, Time, Venue)
  const [names, setNames] = useState(initialCard.defaultNames || 'Aarav & Meera');
  const [eventTitle, setEventTitle] = useState(initialCard.defaultEvent || 'Wedding Celebration');
  const [date, setDate] = useState(initialCard.defaultDate || 'December 18, 2026');
  const [time, setTime] = useState(initialCard.defaultTime || '7:00 PM Onwards');
  const [venue, setVenue] = useState(initialCard.defaultVenue || 'The Grand Palace, Udaipur');

  // Size Options
  const sizes = ['Classic 5" x 7"', 'Pocket 4" x 6"', 'Square 6" x 6"', 'Digital Story (WhatsApp)'];
  const [selectedSize, setSelectedSize] = useState('Classic 5" x 7"');

  // Color Options
  const colorOptions = [
    { name: 'Royal Maroon', bg: '#58111a', text: '#ffffff', border: '#d4af37' },
    { name: 'Navy Blue', bg: '#0d2538', text: '#ffffff', border: '#64b5f6' },
    { name: 'Emerald Green', bg: '#0d3d28', text: '#ffffff', border: '#ffd54f' },
    { name: 'Rose Pink', bg: '#fce4ec', text: '#880e4f', border: '#ad1457' },
    { name: 'Ivory Gold', bg: '#fffdf9', text: '#212529', border: '#d4af37' },
    { name: 'Purple Night', bg: '#2e1065', text: '#ffffff', border: '#d8b4fe' }
  ];
  const [activeColor, setActiveColor] = useState(colorOptions[0]);

  // Font Options
  const fontOptions = [
    { name: 'Playfair Display (Serif)', font: "'Playfair Display', serif" },
    { name: 'Great Vibes (Script)', font: "'Great Vibes', cursive" },
    { name: 'Cinzel (Royal)', font: "'Cinzel', serif" },
    { name: 'Dancing Script (Handwritten)', font: "'Dancing Script', cursive" },
    { name: 'Poppins (Clean)', font: "'Poppins', sans-serif" }
  ];
  const [selectedFont, setSelectedFont] = useState(fontOptions[0].font);

  // Sync if URL card param changes
  useEffect(() => {
    if (cardIdParam) {
      const found = ALL_INVITATIONS.find((c) => c.id === cardIdParam);
      if (found) {
        setSelectedCard(found);
        setNames(found.defaultNames || 'Aarav & Meera');
        setEventTitle(found.defaultEvent || 'Celebration');
        setDate(found.defaultDate || 'December 18, 2026');
        setTime(found.defaultTime || '7:00 PM');
        setVenue(found.defaultVenue || 'Celebration Hall');
      }
    }
  }, [cardIdParam]);

  // Switch card template
  const handleSelectCard = (card) => {
    setSelectedCard(card);
    setNames(card.defaultNames || names);
    setEventTitle(card.defaultEvent || eventTitle);
    setDate(card.defaultDate || date);
    setTime(card.defaultTime || time);
    setVenue(card.defaultVenue || venue);
  };

  // Reset form to defaults
  const handleReset = () => {
    setNames(selectedCard.defaultNames || 'Aarav & Meera');
    setEventTitle(selectedCard.defaultEvent || 'Wedding Celebration');
    setDate(selectedCard.defaultDate || 'December 18, 2026');
    setTime(selectedCard.defaultTime || '7:00 PM Onwards');
    setVenue(selectedCard.defaultVenue || 'The Grand Palace, Udaipur');
    setActiveColor(colorOptions[0]);
    setSelectedFont(fontOptions[0].font);
  };

  // Add to Order -> Pass to Contact / Order Page
  const handleAddToOrder = () => {
    if (onAddToCart) onAddToCart();

    const orderSummary = {
      cardName: selectedCard.title,
      eventType: selectedCard.category,
      cardPrice: selectedCard.price,
      customizedDetails: {
        names,
        eventTitle,
        date,
        time,
        venue,
        selectedSize,
        colorTheme: activeColor.name,
        font: selectedFont
      }
    };

    navigate('/contact', { state: { prefilledOrder: orderSummary } });
  };

  return (
    <div className="page-customize">
      {/* Header Banner (Lavender + White) */}
      <section className="hero-customize py-4 text-center">
        <div className="container">
          <span className="badge bg-purple text-white px-3 py-1 rounded-pill mb-2">
            🎨 Card Details & Customizer
          </span>
          <h1 className="fw-bold text-dark mb-2">Card Details / Customization</h1>
          <p className="text-muted max-w-600 mx-auto mb-0">
            Select sizes, colors, and fonts. Type in the bride/groom or host name, date, time, and venue to see the live preview update instantly!
          </p>
        </div>
      </section>

      {/* Main Workspace */}
      <section className="container py-4">
        {/* Quick Card Selector Bar */}
        <div className="card border p-3 mb-4 bg-white rounded-3 shadow-sm">
          <label className="form-label small fw-bold text-dark mb-2">
            Choose a Card to Customize:
          </label>
          <div className="d-flex gap-3 overflow-auto pb-2">
            {ALL_INVITATIONS.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`btn btn-sm text-start flex-shrink-0 border rounded p-2 ${
                  selectedCard.id === c.id ? 'btn-light border-primary' : 'bg-white'
                }`}
                style={{ width: '130px' }}
                onClick={() => handleSelectCard(c)}
              >
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="rounded mb-1 w-100" 
                  style={{ height: '60px', objectFit: 'cover' }} 
                />
                <small className="d-block text-truncate fw-bold text-dark">{c.title}</small>
                <span className="small text-muted">{c.price}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout: Left Form, Right Live Preview */}
        <div className="row g-4">
          {/* LEFT: Customization Form */}
          <div className="col-12 col-lg-6">
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                <div>
                  <h4 className="fw-bold text-dark mb-0">{selectedCard.title}</h4>
                  <small className="text-muted">{selectedCard.category} • {selectedCard.price}</small>
                </div>
                <button 
                  type="button" 
                  className="btn btn-sm btn-outline-secondary rounded-pill"
                  onClick={handleReset}
                >
                  <FaUndo className="me-1" /> Reset
                </button>
              </div>

              {/* 1. Text Inputs */}
              <div className="mb-4">
                <h6 className="fw-bold text-primary mb-3">1. Text Customization</h6>
                
                <div className="mb-3">
                  <label className="form-label small fw-bold">Name (Celebrant / Couple / Host)</label>
                  <div className="input-group">
                    <span className="input-group-text"><FaUserFriends /></span>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={names}
                      onChange={(e) => setNames(e.target.value)}
                      placeholder="e.g. Aarav & Meera"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold">Event Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="e.g. Cordially Invite You to Celebrate Our Wedding"
                  />
                </div>

                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <label className="form-label small fw-bold">Date</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaCalendarAlt /></span>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="December 18, 2026"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <label className="form-label small fw-bold">Time</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaClock /></span>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        placeholder="7:00 PM Onwards"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold">Venue</label>
                  <div className="input-group">
                    <span className="input-group-text"><FaMapMarkerAlt /></span>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      placeholder="e.g. The Grand Palace, Udaipur"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Color Options */}
              <div className="mb-4 pt-3 border-top">
                <h6 className="fw-bold text-primary mb-2">2. Color Options</h6>
                <div className="d-flex flex-wrap gap-2">
                  {colorOptions.map((c, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`btn btn-sm rounded-pill px-3 d-flex align-items-center gap-2 border ${
                        activeColor.name === c.name ? 'border-dark shadow-sm' : ''
                      }`}
                      style={{ backgroundColor: c.bg, color: c.text }}
                      onClick={() => setActiveColor(c)}
                    >
                      <span 
                        className="rounded-circle d-inline-block" 
                        style={{ width: '10px', height: '10px', backgroundColor: c.border }}
                      ></span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Font Options */}
              <div className="mb-4 pt-3 border-top">
                <h6 className="fw-bold text-primary mb-2">3. Font Options</h6>
                <div className="d-flex flex-wrap gap-2">
                  {fontOptions.map((f, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`btn btn-sm rounded-pill px-3 ${
                        selectedFont === f.font ? 'btn-primary' : 'btn-outline-secondary'
                      }`}
                      style={{ fontFamily: f.font }}
                      onClick={() => setSelectedFont(f.font)}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Available Sizes */}
              <div className="mb-3 pt-3 border-top">
                <h6 className="fw-bold text-primary mb-2">4. Available Sizes</h6>
                <div className="d-flex flex-wrap gap-2">
                  {sizes.map((s, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`btn btn-sm rounded-pill px-3 ${
                        selectedSize === s ? 'btn-dark' : 'btn-outline-secondary'
                      }`}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Invitation Preview */}
          <div className="col-12 col-lg-6">
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white sticky-top" style={{ top: '80px' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold text-dark mb-0">Live Invitation Preview</h5>
                <span className="badge bg-success">Updates in Real-Time</span>
              </div>

              {/* Live Rendered Card */}
              <div 
                className="invitation-card-render shadow rounded-4 mb-3"
                style={{
                  backgroundColor: activeColor.bg,
                  color: activeColor.text,
                  fontFamily: selectedFont,
                  border: `4px double ${activeColor.border}`
                }}
              >
                <div>
                  <div className="fs-3 mb-1" style={{ color: activeColor.border }}>
                    ❖ ✦ ❖
                  </div>
                  <small className="text-uppercase tracking-wide" style={{ color: activeColor.border }}>
                    {selectedCard.category}
                  </small>
                  <p className="small mt-2 mb-0 opacity-90">{eventTitle}</p>
                </div>

                <div className="my-4">
                  <div className="custom-card-names">{names}</div>
                </div>

                <div>
                  <p className="fw-bold mb-1" style={{ color: activeColor.border }}>{date}</p>
                  <p className="small mb-2 opacity-90">{time}</p>
                  <p className="small fw-semibold mb-0">{venue}</p>
                  <hr style={{ borderColor: activeColor.border, opacity: 0.5 }} />
                  <small className="opacity-75" style={{ fontSize: '11px' }}>
                    KrishaCards • Size: {selectedSize}
                  </small>
                </div>
              </div>

              {/* Card Details & Add to Order Button */}
              <div className="p-3 bg-light rounded-3 mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted small">Card Name:</span>
                  <strong className="text-dark small">{selectedCard.title}</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted small">Price:</span>
                  <strong className="text-success fs-5">{selectedCard.price}</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted small">Selected Size:</span>
                  <span className="badge bg-secondary">{selectedSize}</span>
                </div>
              </div>

              {/* Add to Order Button */}
              <button
                type="button"
                className="btn btn-primary btn-lg rounded-pill w-100 shadow"
                onClick={handleAddToOrder}
              >
                <FaShoppingCart className="me-2" /> Add to Order &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
