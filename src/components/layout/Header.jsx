import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';
import { companyDetails } from '../../data/company';

export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
        fontSize: '0.8rem',
        padding: '0.4rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap', gap: '0.5rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', overflow: 'hidden' }}>
            <a href={`tel:${companyDetails.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#CBD5E1', whitespace: 'nowrap' }}>
              <Phone size={13} color="#F59E0B" /> {companyDetails.phone}
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }} className="hide-mobile">
              <Mail size={13} color="#06B6D4" /> {companyDetails.email}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#F59E0B', fontWeight: 600 }} className="hide-mobile">
              <ShieldCheck size={14} /> ISO 9001:2015
            </span>
            <a
              href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Reyna%20India,%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                backgroundColor: '#25D366',
                color: '#fff',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '0.75rem',
                whiteSpace: 'nowrap'
              }}
            >
              <MessageSquare size={12} /> WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <nav style={{
        backgroundColor: isScrolled ? '#0F172A' : 'rgba(15, 23, 42, 0.98)',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(245, 158, 11, 0.2)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.25rem' }}>
          
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#F59E0B',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0F172A',
              fontWeight: 800,
              fontSize: '1.3rem',
              fontFamily: 'var(--font-heading)',
              flexShrink: 0
            }}>
              R
            </div>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.5px', fontFamily: 'var(--font-heading)', display: 'block', lineHeight: 1.1 }}>
                REYNA <span style={{ color: '#F59E0B' }}>INDIA</span>
              </span>
              <span style={{ display: 'block', fontSize: '0.6rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 600 }}>
                Heavy Engineering & WTG
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn btn-primary btn-sm hide-mobile"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
            >
              Get a Quote <ChevronRight size={15} />
            </button>

            {/* Mobile Menu Hamburger / Close Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                padding: '0.45rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
              className="show-tablet"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} color="#F59E0B" /> : <Menu size={22} color="#FFFFFF" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer (Vertical Flex Layout) */}
        {mobileMenuOpen && (
          <div
            className="show-tablet fade-in"
            style={{
              backgroundColor: '#0F172A',
              borderTop: '1px solid rgba(245, 158, 11, 0.2)',
              padding: '1rem 1.25rem 1.5rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              width: '100%',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
            }}
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    color: active ? '#F59E0B' : '#E2E8F0',
                    backgroundColor: active ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                    fontWeight: active ? 700 : 500,
                    fontSize: '1rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: active ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} color={active ? '#F59E0B' : '#64748B'} />
                </Link>
              );
            })}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="btn btn-primary"
              style={{ marginTop: '0.75rem', width: '100%', padding: '0.85rem' }}
            >
              Talk to an Engineer
            </button>
          </div>
        )}
      </nav>

    </header>
  );
}
