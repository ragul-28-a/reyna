import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "R. Venkatesh",
      role: "Head of Operations & Maintenance",
      company: "Renewable Wind Major - Tamil Nadu Zone",
      feedback: "Reyna India’s 3.5 Ton nosecone replacement crane saved us over ₹22 Lakhs in crane mobilization during a critical breakdown in Muppandal. Their up-tower crew operated with surgical precision."
    },
    {
      name: "S. Murugan",
      role: "Project Manager (Solar EPC)",
      company: "BPCL Project Division",
      feedback: "The 60 KW solar MMS rooftop installation at our Hosur facility was delivered with flawless hot-dip galvanizing and zero disruption to plant logistics. True engineering professionals."
    },
    {
      name: "Er. Arvind Swamy",
      role: "Chief Engineer – Heavy Structural",
      company: "Wind Turbine Manufacturing OEM",
      feedback: "Their 35-Ton hydraulic tower dent removal tool cold-rectified a 45mm tower shell deformation in-situ within 48 hours. Saved our logistics schedule from a 5-week section re-order delay."
    }
  ];

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#F8FAFC' }}>
      <div className="container">
        
        <span className="section-subtitle">Client Feedback</span>
        <h2 className="section-title">What Industry Leaders Say</h2>
        <p className="section-desc">
          Hear from wind farm operation managers, solar EPC leads, and industrial project directors across India.
        </p>

        <div className="grid-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #E2E8F0'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.2rem', color: '#F59E0B', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <Quote size={32} color="#06B6D4" style={{ opacity: 0.3, marginBottom: '0.5rem' }} />

                <p style={{ fontSize: '0.95rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  "{t.feedback}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                  {t.name}
                </h4>
                <span style={{ display: 'block', fontSize: '0.8rem', color: '#F59E0B', fontWeight: 600 }}>
                  {t.role}
                </span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B' }}>
                  {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
