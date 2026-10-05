import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { companyDetails } from '../data/company';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const textMsg = `*REYNA INDIA WEBSITE CONTACT INQUIRY*\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n` +
      `Message: ${formData.message}`;

    // Open WhatsApp directly to 9688098250
    const waUrl = `https://wa.me/919688098250?text=${encodeURIComponent(textMsg)}`;
    window.open(waUrl, '_blank');

    // Also trigger mailto to ragularivu28@gmail.com
    const mailUrl = `mailto:ragularivu28@gmail.com?subject=${encodeURIComponent('Reyna India Contact: ' + formData.subject)}&body=${encodeURIComponent(textMsg)}`;
    window.location.href = mailUrl;
  };

  return (
    <>
      <SEO
        title="Contact Us | Reyna India - Engineering Headquarters & Hosur Yard"
        description="Contact Reyna India for WTG breakdown response, solar MMS quotes, and galvanizing inquiries. Corporate office in Guindy, Chennai; plant in Hosur."
        canonical="https://www.reynaindia.com/contact"
      />

      {/* Header Banner */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '4rem 0 5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
            Get in Touch
          </span>
          <h1 style={{ fontSize: '2.75rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            Contact Reyna India Technical Desk
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}>
            Connect with our technical directors and engineering teams for instant project quotes, emergency WTG support, or plant visits.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          
          <div className="contact-grid">
            
            {/* Left Col: Contact Info Cards */}
            <div>
              
              {/* Corporate Office */}
              <div className="card" style={{ padding: '1.75rem', marginBottom: '1.5rem', borderLeft: '4px solid #F59E0B' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <MapPin size={24} color="#F59E0B" />
                  <h3 style={{ fontSize: '1.25rem', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                    Corporate Engineering Office
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {companyDetails.address}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.875rem', color: '#1E293B' }}>
                  <span><strong>Phone:</strong> {companyDetails.phone}</span>
                  <span><strong>Alt Phone:</strong> {companyDetails.altPhone}</span>
                  <span><strong>Email:</strong> {companyDetails.email}</span>
                </div>
              </div>

              {/* Plant & Yard */}
              <div className="card" style={{ padding: '1.75rem', marginBottom: '1.5rem', borderLeft: '4px solid #06B6D4' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <MapPin size={24} color="#06B6D4" />
                  <h3 style={{ fontSize: '1.25rem', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                    Galvanizing Plant & Heavy Yard
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {companyDetails.factoryAddress}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.875rem', color: '#1E293B' }}>
                  <span><strong>Facility:</strong> 12-Meter Zinc Bath Galvanizing Plant</span>
                  <span><strong>Yard Capacity:</strong> 70,000 MT Annual Capacity</span>
                </div>
              </div>

              {/* Working Hours & Emergency */}
              <div className="card" style={{ padding: '1.75rem', backgroundColor: '#0F172A', color: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Clock size={24} color="#F59E0B" />
                  <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                    Working Hours & 24/7 Response
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {companyDetails.workingHours}
                </p>

                <a
                  href={`https://wa.me/919688098250?text=Hello%20Reyna%20India,%20I%20have%20an%20urgent%20WTG%20service%20requirement.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <MessageSquare size={18} /> Connect via WhatsApp Instant Desk
                </a>
              </div>

            </div>

            {/* Right Col: Contact Form */}
            <div className="card" style={{ padding: '2.5rem' }}>
              
              <h2 style={{ fontSize: '1.75rem', color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Send a Technical Message
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                Fill in your project requirements below and our senior engineering desk will reply within 2 business hours.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={64} color="#25D366" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ color: '#64748B', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                    Thank you, <strong>{formData.name}</strong>. Your inquiry has been dispatched to our engineering desk.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline btn-sm">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Er. Rajesh Kannan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid #CBD5E1',
                          borderRadius: '8px',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: '1px solid #CBD5E1',
                          borderRadius: '8px',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                      Your Project Message & Requirement *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify your inquiry details, wind turbine model, solar capacity, structural dimensions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #CBD5E1',
                        borderRadius: '8px',
                        fontSize: '0.95rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '0.5rem' }}>
                    Send Engineering Inquiry <Send size={18} />
                  </button>

                </form>
              )}

            </div>

          </div>

          {/* Map Location Section */}
          <div style={{ marginTop: '4rem', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.5rem', overflow: 'hidden' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
              Headquarters Location Map
            </h3>
            <div style={{
              height: '320px',
              backgroundColor: '#0F172A',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F59E0B',
              flexDirection: 'column',
              gap: '1rem',
              backgroundImage: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
              <MapPin size={48} color="#F59E0B" />
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', display: 'block' }}>
                  Reyna Engineering Towers - Guindy Industrial Estate
                </span>
                <span style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
                  Chennai - 600032, Tamil Nadu, India | Coordinates: 13.0067° N, 80.2020° E
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
