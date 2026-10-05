import React, { useState } from 'react';
import { X, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { productsData } from '../../data/products';
import { servicesData } from '../../data/services';

export default function QuoteModal({ isOpen, onClose, initialSubject = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: 'WTG Services',
    subject: initialSubject || 'Engineering Inquiry',
    message: '',
    timeline: 'Immediate (0-15 Days)'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const textMsg = `*NEW REYNA INDIA ENGINEER REQUEST*\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Category: ${formData.category}\n` +
      `Timeline: ${formData.timeline}\n` +
      `Details: ${formData.message}`;

    // Open WhatsApp directly to 9688098250
    const waUrl = `https://wa.me/919688098250?text=${encodeURIComponent(textMsg)}`;
    window.open(waUrl, '_blank');

    // Also trigger mailto to ragularivu28@gmail.com
    const mailUrl = `mailto:ragularivu28@gmail.com?subject=${encodeURIComponent('Reyna India Enquiry: ' + formData.subject)}&body=${encodeURIComponent(textMsg)}`;
    window.location.href = mailUrl;
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2rem' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
              Talk to an Engineer / Request Quote
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: '0.2rem' }}>
              Reyna India technical team responds within 2 business hours.
            </p>
          </div>
          <button
            onClick={handleClose}
            style={{ background: 'transparent', color: '#64748B', padding: '0.25rem' }}
          >
            <X size={24} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <CheckCircle size={64} color="#25D366" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ fontSize: '1.4rem', color: '#0F172A', marginBottom: '0.5rem' }}>
              Enquiry Submitted Successfully!
            </h4>
            <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: '450px', margin: '0 auto 1.5rem auto' }}>
              Thank you, <strong>{formData.name}</strong>. Our senior structural/WTG engineer will review your requirement and call you at <strong>{formData.phone || formData.email}</strong> shortly.
            </p>
            <button className="btn btn-primary" onClick={handleClose}>
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Er. Suresh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.3rem' }}>
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
                    padding: '0.65rem 0.85rem',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.3rem' }}>
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.3rem' }}>
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. BPCL / Suzlon / Renewable EPC"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.3rem' }}>
                  Category of Requirement
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    backgroundColor: '#fff'
                  }}
                >
                  <option value="WTG Services">WTG Up-Tower Lifting Services</option>
                  <option value="Solar MMS">Solar Mounting Structures (MMS)</option>
                  <option value="Pre-Engineered Buildings">Pre-Engineered Buildings (PEB)</option>
                  <option value="Tower Dent Removal">Tower Dent Removal Tooling</option>
                  <option value="Hot-Dip Galvanizing">Hot-Dip Galvanizing Services</option>
                  <option value="Lifting Platforms">Man & Material Baskets / Platforms</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.3rem' }}>
                  Project Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    border: '1px solid #CBD5E1',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    backgroundColor: '#fff'
                  }}
                >
                  <option value="Immediate (0-15 Days)">Immediate Breakdown (0-15 Days)</option>
                  <option value="Within 1 Month">Within 1 Month</option>
                  <option value="1-3 Months">1 - 3 Months</option>
                  <option value="Tender / Budgetary Inquiry">Tender / Budgetary Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.3rem' }}>
                Requirement Details & Technical Specifications
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe project location, required capacities (e.g. 5 Ton / 35 Ton), wind turbine model, MW scale..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#64748B', marginTop: '0.2rem' }}>
              <ShieldCheck size={16} color="#06B6D4" /> Your technical details are kept strictly confidential under NDA.
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '0.5rem' }}>
              <button type="button" onClick={handleClose} className="btn btn-outline btn-sm">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Send Technical Enquiry <Send size={16} />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
