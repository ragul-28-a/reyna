import React from 'react';
import { companyDetails } from '../../data/company';

export default function ClientLogos() {
  return (
    <section style={{ padding: '3.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.5rem', display: 'block' }}>
          Trusted By Major OEMs, IPPs & Government Energy Corporations
        </span>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          {companyDetails.clients.map((client, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                padding: '0.85rem 1.75rem',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '1.1rem',
                color: '#1E293B',
                letterSpacing: '1px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              {client.logoText}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
