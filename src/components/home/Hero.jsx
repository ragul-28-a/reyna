import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, MessageSquare, ArrowUpRight, Award } from 'lucide-react';
import { companyDetails } from '../../data/company';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#0F172A',
      color: '#FFFFFF',
      padding: '5rem 0 6rem 0',
      backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.15) 0%, transparent 40%)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div className="hero-grid">
          
          {/* Left Hero Text */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#F59E0B',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              <Award size={16} /> The Pioneer of WTG Up-Tower Services in India
            </div>

            <h1 style={{
              fontSize: '3.25rem',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-heading)'
            }}>
              Heavy Engineering, <br />
              <span className="text-gradient">WTG Services & Solar MMS</span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: '#CBD5E1',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '620px'
            }}>
              Reyna India is the leading technical engineering specialist in WTG component replacement, 35-Ton tower dent removal, hot-dip galvanized solar mounting structures (MMS), and pre-engineered buildings (PEB).
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn btn-primary btn-lg"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Talk to an Engineer <ChevronRight size={18} />
              </button>

              <Link to="/products" className="btn btn-outline btn-lg" style={{ color: '#FFFFFF', borderColor: '#475569' }}>
                Explore Products Catalog
              </Link>
            </div>

            {/* Micro Highlights */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} color="#F59E0B" />
                <span style={{ fontSize: '0.875rem', color: '#E2E8F0', fontWeight: 600 }}>ISO 9001:2015 Quality Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} color="#06B6D4" />
                <span style={{ fontSize: '0.875rem', color: '#E2E8F0', fontWeight: 600 }}>CE Proof Tested Lifting Equipment</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Showcase Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              backgroundColor: '#1E293B'
            }}>
              <img
                src="/images/hero_bg.jpg"
                alt="Reyna India WTG Crane & Engineering Site"
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)'
              }} />

              {/* Floating Floating Stat Pill */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '1.25rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>
                    Featured Capability
                  </span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                    Up-Tower Gearbox & Bearing Lift
                  </span>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#F59E0B' }}>
                    Zero Ground Crane Mobilization Required
                  </span>
                </div>
                <Link to="/services" style={{
                  backgroundColor: '#F59E0B',
                  color: '#0F172A',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ArrowUpRight size={20} />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
