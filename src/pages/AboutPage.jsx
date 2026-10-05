import React from 'react';
import SEO from '../components/common/SEO';
import { ShieldCheck, Award, Users, Target, Compass, CheckCircle2, ChevronRight, Building } from 'lucide-react';
import { companyDetails } from '../data/company';

export default function AboutPage({ onOpenQuoteModal }) {
  return (
    <>
      <SEO
        title="About Us | Reyna India - WTG Engineering & Heavy Fabrication Leader"
        description="Learn about Reyna India's 15+ years of engineering leadership, our directors, vision, mission, and state-of-the-art hot-dip galvanizing facilities."
        canonical="https://www.reynaindia.com/about"
      />

      {/* Page Header */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '4rem 0 5rem 0', textIndent: '0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
            Corporate Overview
          </span>
          <h1 style={{ fontSize: '2.75rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            Engineering Precision & Renewable Innovation
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Positioning Reyna India around experienced Civil & Mechanical Engineers delivering high-altitude lifting, solar racking, and heavy structural solutions.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="about-grid-2">
            <div>
              <span className="section-subtitle" style={{ textAlign: 'left' }}>Who We Are</span>
              <h2 style={{ fontSize: '2.25rem', color: '#0F172A', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                The Pioneer of WTG Up-Tower Services in India
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Founded in 2009, <strong>Reyna India</strong> has grown to become India's foremost specialized engineering company dedicated to Wind Turbine Generator (WTG) services, lifting equipment supply, solar module mounting structures (MMS), and pre-engineered steel buildings (PEB).
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem', fontSize: '1.05rem' }}>
                Our core philosophy centers on <strong>zero-downtime technical engineering</strong>. By designing custom up-tower lifting gear and 35-Ton hydraulic dent removal fixtures, we eliminate the exorbitant cost of ground crane mobilization for wind farm operators and EPC developers across South Asia.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 color="#06B6D4" size={20} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E293B' }}>ISO 9001:2015 & OHSAS Certified Quality</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 color="#06B6D4" size={20} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E293B' }}>500+ Successfully Completed Projects</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 color="#06B6D4" size={20} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E293B' }}>1.2 GW Solar MMS Manufactured</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 color="#06B6D4" size={20} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E293B' }}>24/7 Field Breakdown Response</span>
                </div>
              </div>

              <button onClick={() => onOpenQuoteModal()} className="btn btn-primary">
                Talk to Our Technical Directors <ChevronRight size={16} />
              </button>
            </div>

            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                border: '1px solid #E2E8F0'
              }}>
                <img
                  src="/images/hero_bg.jpg"
                  alt="Reyna India Manufacturing & Galvanizing Facility"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="about-grid-2">
            
            <div className="card" style={{ padding: '2.5rem', borderLeft: '4px solid #F59E0B' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Compass size={32} color="#F59E0B" />
                <h3 style={{ fontSize: '1.5rem', color: '#0F172A' }}>Our Vision</h3>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1rem' }}>
                To be South Asia's most trusted engineering authority in renewable energy support services, providing cutting-edge up-tower lifting machinery, durable solar structures, and zero-defect structural steel solutions.
              </p>
            </div>

            <div className="card" style={{ padding: '2.5rem', borderLeft: '4px solid #06B6D4' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Target size={32} color="#06B6D4" />
                <h3 style={{ fontSize: '1.5rem', color: '#0F172A' }}>Our Mission</h3>
              </div>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1rem' }}>
                To empower wind turbine owners, solar developers, and EPC contractors with innovative tooling, strict ISO quality adherence, fast turnaround times, and continuous high-altitude safety compliance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Directors & Engineering Leadership */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <span className="section-subtitle">Leadership Team</span>
          <h2 className="section-title">Board of Directors & Senior Engineers</h2>
          <p className="section-desc">
            Led by experienced Civil and Mechanical Engineers with decades of hands-on expertise in heavy structural design and wind farm maintenance.
          </p>

          <div className="grid-3">
            {companyDetails.directors.map((dir, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem', textAlign: 'center', borderTop: '4px solid #F59E0B' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#0F172A',
                  color: '#F59E0B',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                  fontWeight: 800,
                  fontSize: '1.8rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {dir.name.split(' ').slice(-1)[0][0]}
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.25rem' }}>
                  {dir.name}
                </h3>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#F59E0B', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {dir.role}
                </span>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748B', fontWeight: 600, marginBottom: '1rem' }}>
                  {dir.qualification}
                </span>

                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>
                  {dir.bio}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
