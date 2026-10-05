import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { projectsData } from '../../data/projects';

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 4);

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#F1F5F9' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-subtitle" style={{ textAlign: 'left' }}>Proven Field Work</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>Featured Project Executions</h2>
          </div>

          <Link to="/projects" className="btn btn-dark" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            View Full Portfolio <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {featured.map((proj) => (
            <div key={proj.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ position: 'relative', height: '220px', backgroundColor: '#0F172A', overflow: 'hidden' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    color: '#FFFFFF',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <MapPin size={14} color="#F59E0B" /> {proj.location}
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <span className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>
                    {proj.client}
                  </span>

                  <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {proj.scope}
                  </p>

                  {/* Metrics Row */}
                  <div style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '8px',
                    padding: '0.85rem',
                    display: 'grid',
                    gridTemplateColumns: `repeat(${proj.keyMetrics.length}, 1fr)`,
                    gap: '0.5rem',
                    border: '1px solid #E2E8F0',
                    textAlign: 'center'
                  }}>
                    {proj.keyMetrics.map((met, mIdx) => (
                      <div key={mIdx}>
                        <span style={{ display: 'block', fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase' }}>
                          {met.label}
                        </span>
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>
                          {met.value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                <Link
                  to={`/projects?id=${proj.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: '#0F172A'
                  }}
                >
                  View Case Details <ChevronRight size={16} color="#F59E0B" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
