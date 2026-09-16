import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp, 
  FaInfoCircle,
  FaTimes 
} from 'react-icons/fa';
import { IMAGE_SOURCES } from '../data/invitationsData';

export default function Footer() {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <footer className="simple-footer pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4 pb-4 border-bottom border-secondary">
          {/* Store Info */}
          <div className="col-12 col-md-4">
            <h5 className="text-white fw-bold d-flex align-items-center gap-2 mb-3">
              <span>💌</span> KrishaCards
            </h5>
            <p className="small">
              KrishaCards is a beginner-friendly online store for creating, customizing, and ordering beautiful invitation cards for weddings, birthdays, and celebrations.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn facebook" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="social-icon-btn whatsapp" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Page Links (Exactly 6 pages) */}
          <div className="col-6 col-md-4">
            <h6 className="text-white fw-bold mb-3">Website Pages</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/">1. Home Page</Link></li>
              <li className="mb-2"><Link to="/wedding">2. Wedding Invitations</Link></li>
              <li className="mb-2"><Link to="/birthday">3. Birthday Invitations</Link></li>
              <li className="mb-2"><Link to="/events">4. Other Events</Link></li>
              <li className="mb-2"><Link to="/customize">5. Card Customization</Link></li>
              <li className="mb-2"><Link to="/contact">6. Contact / Order</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-12 col-md-4">
            <h6 className="text-white fw-bold mb-3">Store Contact</h6>
            <ul className="list-unstyled small">
              <li className="mb-2 d-flex align-items-start gap-2">
                <FaMapMarkerAlt className="text-warning mt-1" />
                <span>42 Heritage Galleria, MG Road, Bengaluru, Karnataka 560001</span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <FaPhoneAlt className="text-warning" />
                <span>+91 98765 43210</span>
              </li>
              <li className="mb-3 d-flex align-items-center gap-2">
                <FaEnvelope className="text-warning" />
                <span>support@krishacards.com</span>
              </li>
            </ul>

            <button 
              type="button"
              className="btn btn-sm btn-outline-light rounded-pill px-3"
              onClick={() => setShowImageModal(true)}
            >
              <FaInfoCircle className="me-1" /> View Image Sources
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-3 text-center small">
          <p className="mb-0">&copy; {new Date().getFullYear()} KrishaCards. Built with React.js, HTML, CSS & Bootstrap.</p>
        </div>
      </div>

      {/* Image Sources Modal */}
      {showImageModal && (
        <div className="simple-modal-backdrop" onClick={() => setShowImageModal(false)}>
          <div className="simple-modal-content text-dark" onClick={(e) => e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
              <h5 className="modal-title fw-bold mb-0">
                <FaInfoCircle className="text-primary me-2" /> Image Sources & Documentation
              </h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setShowImageModal(false)}
              ></button>
            </div>

            <p className="small text-muted mb-3">
              All invitation images used in this project are sourced from royalty-free Unsplash collections:
            </p>

            <div className="table-responsive small mb-3" style={{ maxHeight: '250px' }}>
              <table className="table table-bordered table-sm">
                <thead className="table-light">
                  <tr>
                    <th>Category</th>
                    <th>Search Keywords</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {IMAGE_SOURCES.map((img, idx) => (
                    <tr key={idx}>
                      <td><strong>{img.category}</strong></td>
                      <td><code>{img.searchQuery}</code></td>
                      <td><a href={img.url} target="_blank" rel="noopener noreferrer">{img.source}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-end">
              <button 
                type="button" 
                className="btn btn-primary btn-sm rounded-pill px-4"
                onClick={() => setShowImageModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
