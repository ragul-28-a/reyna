import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight, MessageSquare, ExternalLink } from 'lucide-react';
import { companyDetails } from '../../data/company';

export default function Footer({ onOpenQuoteModal }) {
  return (
    <footer style={{ backgroundColor: '#090D16', color: '#94A3B8', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '3px solid #F59E0B' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Col 1: About Company */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#F59E0B',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0F172A',
                fontWeight: 800,
                fontSize: '1.2rem',
                fontFamily: 'var(--font-heading)'
              }}>
                R
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                REYNA <span style={{ color: '#F59E0B' }}>INDIA</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', color: '#94A3B8' }}>
              Pioneer of specialized WTG up-tower services, solar module mounting structures (MMS), pre-engineered buildings (PEB), and heavy engineering lifting platforms across India.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ color: '#F59E0B', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} /> ISO 9001:2015 & OHSAS 18001 Certified
              </span>
              <span style={{ color: '#06B6D4', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} /> CE Proof Tested Lifting Equipment
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '2px solid #F59E0B', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link to="/about" style={{ color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ChevronRight size={14} color="#F59E0B" /> About Reyna India</Link></li>
              <li><Link to="/services" style={{ color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ChevronRight size={14} color="#F59E0B" /> Specialized Services</Link></li>
              <li><Link to="/products" style={{ color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ChevronRight size={14} color="#F59E0B" /> Products Catalog</Link></li>
              <li><Link to="/projects" style={{ color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ChevronRight size={14} color="#F59E0B" /> Project Portfolio</Link></li>
              <li><Link to="/resources" style={{ color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ChevronRight size={14} color="#F59E0B" /> Technical Downloads</Link></li>
              <li><Link to="/contact" style={{ color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ChevronRight size={14} color="#F59E0B" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Verticals */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '2px solid #F59E0B', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Core Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><Link to="/products?cat=wtg-lifting" style={{ color: '#CBD5E1' }}>WTG Up-Tower Cranes</Link></li>
              <li><Link to="/products?cat=solar-mms" style={{ color: '#CBD5E1' }}>Solar Mounting Structures (MMS)</Link></li>
              <li><Link to="/products?cat=peb-steel" style={{ color: '#CBD5E1' }}>Pre-Engineered Buildings (PEB)</Link></li>
              <li><Link to="/products?cat=platforms" style={{ color: '#CBD5E1' }}>Tower Dent Removal Tools (35T)</Link></li>
              <li><Link to="/services" style={{ color: '#CBD5E1' }}>Hot-Dip Galvanizing (80-120µ)</Link></li>
              <li><Link to="/services" style={{ color: '#CBD5E1' }}>Up-Tower Component Replacement</Link></li>
            </ul>
          </div>

          {/* Col 4: Corporate Office & Yard */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '2px solid #F59E0B', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Contact & Yard
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', color: '#CBD5E1' }}>
                <MapPin size={18} color="#F59E0B" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>Corporate Office:</strong> Guindy Industrial Estate, Chennai - 600032, Tamil Nadu</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', color: '#CBD5E1' }}>
                <MapPin size={18} color="#06B6D4" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span><strong>Galvanizing Plant:</strong> SIPCOT Industrial Park, Hosur - 635126, Tamil Nadu</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', color: '#CBD5E1' }}>
                <Phone size={16} color="#F59E0B" style={{ flexShrink: 0 }} />
                <span>{companyDetails.phone} / {companyDetails.altPhone}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', color: '#CBD5E1' }}>
                <Mail size={16} color="#06B6D4" style={{ flexShrink: 0 }} />
                <span>{companyDetails.email}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary btn-sm"
              style={{ marginTop: '1.25rem', width: '100%' }}
            >
              Request Engineering Quote
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} Reyna India Engineering Services Pvt. Ltd. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/contact" style={{ color: '#94A3B8' }}>Contact Us</Link>
            <a href="/sitemap.xml" target="_blank" rel="noreferrer" style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              Sitemap <ExternalLink size={12} />
            </a>
            <a href="/robots.txt" target="_blank" rel="noreferrer" style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              Robots.txt <ExternalLink size={12} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
