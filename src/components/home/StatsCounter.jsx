import React from 'react';
import { companyDetails } from '../../data/company';

export default function StatsCounter() {
  return (
    <section style={{ backgroundColor: '#1E293B', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '2.5rem 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {companyDetails.metrics.map((metric, idx) => (
            <div key={idx} style={{ padding: '0.5rem' }}>
              <span style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#F59E0B',
                display: 'block',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1
              }}>
                {metric.value}
              </span>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.4rem', display: 'block' }}>
                {metric.label}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.2rem', display: 'block' }}>
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
