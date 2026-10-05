import React, { useState, useMemo } from 'react';
import SEO from '../components/common/SEO';
import { MapPin, Calendar, CheckCircle2, ChevronRight, Filter } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';

export default function ProjectsPage({ onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <SEO
        title="Project Portfolio | Reyna India - BPCL Solar, WTG Erection & Dent Repairs"
        description="Explore Reyna India's completed project portfolio: 60 KW BPCL Hosur, 30 KW BPCL Ulundurpet, 1 MW Dindigul Erection, and 35T hydraulic tower dent repairs."
        canonical="https://www.reynaindia.com/projects"
      />

      {/* Header Banner */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '4rem 0 5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            Proven Track Record
          </span>
          <h1 style={{ fontSize: '2.75rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            Projects & Case Portfolio
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}>
            Demonstrating completed WTG up-tower component replacements, solar MMS projects for BPCL, and 24,000 sq.ft industrial PEB sheds.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '2rem 0 4rem 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            {projectCategories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: active ? 700 : 500,
                    backgroundColor: active ? '#0F172A' : '#FFFFFF',
                    color: active ? '#F59E0B' : '#475569',
                    border: '1px solid #CBD5E1',
                    boxShadow: active ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ position: 'relative', height: '240px', backgroundColor: '#0F172A', overflow: 'hidden' }}>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      color: '#F59E0B',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 700
                    }}>
                      Completed {proj.year}
                    </div>

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
                      <MapPin size={14} color="#06B6D4" /> {proj.location}
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>
                      {proj.client}
                    </span>

                    <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                      {proj.title}
                    </h3>

                    <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {proj.scope}
                    </p>

                    {/* Key Metrics */}
                    <div style={{
                      backgroundColor: '#F8FAFC',
                      borderRadius: '8px',
                      padding: '0.85rem',
                      display: 'grid',
                      gridTemplateColumns: `repeat(${proj.keyMetrics.length}, 1fr)`,
                      gap: '0.5rem',
                      border: '1px solid #E2E8F0',
                      textAlign: 'center',
                      marginBottom: '1.25rem'
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

                    {/* Highlights */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {proj.highlights.map((hl, hIdx) => (
                        <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#334155' }}>
                          <CheckCircle2 size={16} color="#06B6D4" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                  <button
                    onClick={() => onOpenQuoteModal(`Enquiry inspired by project: ${proj.title}`)}
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%' }}
                  >
                    Inquire About Similar Project Scope
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
