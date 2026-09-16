import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp, 
  FaCheckCircle 
} from 'react-icons/fa';

export default function Contact() {
  const location = useLocation();
  const prefilled = location.state?.prefilledOrder;

  // Contact / Order Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: prefilled?.eventType || 'Royal Wedding',
    cardName: prefilled?.cardName || 'Royal Rajwada Heritage Scroll',
    numberOfCards: '100 Cards',
    customMessage: prefilled?.customizedDetails
      ? `Names: ${prefilled.customizedDetails.names}\nDate: ${prefilled.customizedDetails.date} at ${prefilled.customizedDetails.time}\nVenue: ${prefilled.customizedDetails.venue}\nSize: ${prefilled.customizedDetails.selectedSize}`
      : ''
  });

  // Simple feedback message
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please enter your Name, Email, and Phone number.');
      return;
    }
    setSuccessMsg(`🎉 Order Placed Successfully for "${formData.cardName}" (${formData.numberOfCards})! We will contact ${formData.fullName} at ${formData.phone} shortly.`);
  };

  const handleSendEnquiry = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Please enter your Name and Email.');
      return;
    }
    setSuccessMsg(`✉️ Enquiry Sent! Thank you ${formData.fullName}, our team will email you at ${formData.email} soon.`);
  };

  return (
    <div className="page-contact">
      {/* Contact Header Banner (Dark Blue + Light Blue) */}
      <section className="hero-contact py-4 text-center">
        <div className="container">
          <span className="badge bg-light text-primary px-3 py-1 rounded-pill mb-2">
            📫 Get in Touch
          </span>
          <h1 className="fw-bold mb-2">Contact / Order</h1>
          <p className="text-white-50 max-w-600 mx-auto mb-0">
            Fill out the form to order your customized cards or ask any question. You can also contact our studio directly.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="container py-5">
        {/* Success Alert */}
        {successMsg && (
          <div className="alert alert-success alert-dismissible fade show mb-4 shadow-sm" role="alert">
            <div className="d-flex align-items-center gap-2">
              <FaCheckCircle className="fs-5" />
              <div>{successMsg}</div>
            </div>
            <button type="button" className="btn-close" onClick={() => setSuccessMsg('')}></button>
          </div>
        )}

        <div className="row g-4">
          {/* LEFT: Order / Contact Form */}
          <div className="col-12 col-lg-7">
            <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
              <h4 className="fw-bold text-dark mb-1">Place an Order or Enquiry</h4>
              <p className="text-muted small mb-4">Complete the fields below to get started.</p>

              <form>
                <div className="row g-3">
                  {/* Full Name */}
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-bold">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      className="form-control" 
                      placeholder="e.g. Aarav Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-bold">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control" 
                      placeholder="e.g. aarav@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-bold">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="form-control" 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Event Type */}
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-bold">Event Type</label>
                    <select 
                      name="eventType"
                      className="form-select"
                      value={formData.eventType}
                      onChange={handleChange}
                    >
                      <option value="Royal Wedding">Royal Wedding</option>
                      <option value="Traditional Wedding">Traditional Wedding</option>
                      <option value="Modern Wedding">Modern Wedding</option>
                      <option value="South Indian Wedding">South Indian Wedding</option>
                      <option value="Kids Birthday">Kids Birthday</option>
                      <option value="1st Birthday">1st Birthday</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Housewarming">Housewarming</option>
                      <option value="Other Events">Other Events</option>
                    </select>
                  </div>

                  {/* Card Name */}
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-bold">Card Name</label>
                    <input 
                      type="text" 
                      name="cardName"
                      className="form-control" 
                      placeholder="e.g. Royal Rajwada Heritage Scroll"
                      value={formData.cardName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Number of Cards */}
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-bold">Number of Cards</label>
                    <select 
                      name="numberOfCards"
                      className="form-select"
                      value={formData.numberOfCards}
                      onChange={handleChange}
                    >
                      <option value="Digital e-Invite Only">Digital e-Invite Only</option>
                      <option value="50 Cards">50 Cards</option>
                      <option value="100 Cards">100 Cards</option>
                      <option value="250 Cards">250 Cards</option>
                      <option value="500 Cards">500 Cards</option>
                    </select>
                  </div>

                  {/* Custom Message */}
                  <div className="col-12">
                    <label className="form-label small fw-bold">Custom Message</label>
                    <textarea 
                      name="customMessage"
                      rows="4" 
                      className="form-control" 
                      placeholder="Enter names, date, venue, or questions..."
                      value={formData.customMessage}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* Action Buttons: Place Order & Send Enquiry */}
                  <div className="col-12 pt-2">
                    <div className="d-flex flex-column flex-sm-row gap-2">
                      <button 
                        type="button" 
                        className="btn btn-primary btn-lg rounded-pill flex-grow-1"
                        onClick={handlePlaceOrder}
                      >
                        Place Order
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-outline-primary btn-lg rounded-pill flex-grow-1"
                        onClick={handleSendEnquiry}
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: Store Details */}
          <div className="col-12 col-lg-5">
            <div className="contact-info-card p-4 rounded-4 shadow-sm h-100">
              <h4 className="fw-bold text-dark mb-3">Store Details</h4>
              <p className="small text-muted mb-4">
                Visit our showroom or reach out directly to our support team:
              </p>

              <div className="mb-3 d-flex align-items-start gap-2">
                <FaMapMarkerAlt className="text-primary mt-1 fs-5" />
                <div>
                  <strong className="d-block small text-dark">Address</strong>
                  <span className="small text-muted">42 Heritage Galleria, MG Road, Bengaluru, Karnataka 560001</span>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-start gap-2">
                <FaPhoneAlt className="text-success mt-1 fs-5" />
                <div>
                  <strong className="d-block small text-dark">Phone Number</strong>
                  <span className="small text-muted">+91 98765 43210</span>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-start gap-2">
                <FaEnvelope className="text-danger mt-1 fs-5" />
                <div>
                  <strong className="d-block small text-dark">Email</strong>
                  <span className="small text-muted">support@krishacards.com</span>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start gap-2">
                <FaClock className="text-warning mt-1 fs-5" />
                <div>
                  <strong className="d-block small text-dark">Store Timings</strong>
                  <span className="small text-muted">Mon - Sat: 10:00 AM - 8:00 PM</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="pt-3 border-top border-primary border-opacity-25">
                <strong className="d-block small text-dark mb-2">Follow Us:</strong>
                <div className="d-flex gap-2">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
