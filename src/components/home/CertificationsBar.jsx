import React from 'react';
import { ShieldCheck, Award, FileCheck } from 'lucide-react';
import { companyDetails } from '../../data/company';

export default function CertificationsBar() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#090D16', color: '#FFFFFF' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-subtitle" style={{ color: '#F59E0B' }}>Quality Assurance & Safety Standards</span>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>Certified Excellence & Statutory Compliance</h2>
        </div>

        <div className="grid-4">
          {companyDetails.certifications.map((cert, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#1E293B',
                borderRadius: '10px',
                padding: '1.5rem',
                border: '1px solid rgba(245, 158, 11, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <ShieldCheck size={26} color="#F59E0B" />
                <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>
                  {cert.title}
                </h4>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
