import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Search, Menu, X, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';
import { companyDetails } from '../../data/company';

export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/projects', label: 'Projects' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      {/* Top Info Bar */}
      <div style={{
        backgroundColor: '#090D16',
        color: '#94A3B8',
        fontSize: '0.825rem',
        padding: '0.4rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={13} color="#F59E0B" /> {companyDetails.phone}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Mail size={13} color="#06B6D4" /> {companyDetails.email}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }} className="hide-mobile">
              <MapPin size={13} color="#F59E0B" /> Guindy, Chennai | Hosur Yard
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#F59E0B', fontWeight: 600 }}>
              <ShieldCheck size={14} /> ISO 9001:2015 Certified
            </span>
            <a
              href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Reyna%20India,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                backgroundColor: '#25D366',
                color: '#fff',
                padding: '0.15rem 0.6rem',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '0.75rem'
              }}
            >
              <MessageSquare size={12} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        backgroundColor: isScrolled ? '#0F172A' : 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(245, 158, 11, 0.2)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.5rem' }}>
          
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              backgroundColor: '#F59E0B',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0F172A',
              fontWeight: 800,
              fontSize: '1.4rem',
              fontFamily: 'var(--font-heading)'
            }}>
              R
            </div>
            <div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px', fontFamily: 'var(--font-heading)' }}>
                REYNA <span style={{ color: '#F59E0B' }}>INDIA</span>
              </span>
              <span style={{ display: 'block', fontSize: '0.65rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                Heavy Engineering & WTG Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }} className="hide-tablet">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    color: active ? '#F59E0B' : '#E2E8F0',
                    fontWeight: active ? 700 : 500,
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    padding: '0.25rem 0'
                  }}
                >
                  {link.label}
                  {active && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#F59E0B',
                      borderRadius: '2px'
                    }} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              Get a Quote <ChevronRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '0.4rem',
                borderRadius: '6px'
              }}
              className="show-tablet"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#0F172A',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }} className="show-tablet fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: location.pathname === link.path ? '#F59E0B' : '#E2E8F0',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="btn btn-primary"
              style={{ marginTop: '0.5rem', width: '100%' }}
            >
              Talk to an Engineer
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
