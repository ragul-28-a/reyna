import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Sun, Building2, Wrench, ShieldAlert, Layers, ChevronRight } from 'lucide-react';

export default function BusinessVerticals() {
  const verticals = [
    {
      icon: Wind,
      title: 'WTG Services & Component Replacement',
      desc: 'Pioneer of up-tower lifting without ground cranes. Nosecone, gearbox, and bearing replacements across all major OEM wind turbine models.',
      link: '/services',
      color: '#F59E0B'
    },
    {
      icon: Sun,
      title: 'Solar Module Mounting Structures (MMS)',
      desc: 'Hot-dip galvanized structural racking systems for ground-mount solar parks and industrial rooftop solar arrays engineered for 25+ years life.',
      link: '/products?cat=solar-mms',
      color: '#06B6D4'
    },
    {
      icon: Building2,
      title: 'Pre-Engineered Buildings (PEB)',
      desc: 'Clear-span steel industrial sheds, manufacturing plants, and logistics warehouses complete with heavy EOT crane gantry supports.',
      link: '/products?cat=peb-steel',
      color: '#10B981'
    },
    {
      icon: Wrench,
      title: 'Lifting Equipment & Tower Cranes',
      desc: '35-Ton hydraulic tower dent removal tools, 5-Ton geared trolleys, chair platforms, and dual-hoist hanging platforms for high-elevation safety.',
      link: '/products?cat=wtg-lifting',
      color: '#8B5CF6'
    },
    {
      icon: Layers,
      title: 'Hot-Dip Galvanizing & Coating',
      desc: '12-Meter galvanizing bath facility delivering 80-120 micron uniform zinc coating complying with ASTM A123 / IS 2629 standards.',
      link: '/services',
      color: '#EC4899'
    },
    {
      icon: ShieldAlert,
      title: 'Custom Engineering & FEA Design',
      desc: 'Turnkey structural design consultancy, 3D STAAD.Pro wind tunnel modeling, non-destructive testing (NDT), and specialized engineering supply.',
      link: '/services',
      color: '#3B82F6'
    }
  ];

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#F8FAFC' }}>
      <div className="container">
        
        <span className="section-subtitle">Our Business Verticals</span>
        <h2 className="section-title">Specialized Engineering Solutions</h2>
        <p className="section-desc">
          Reyna India integrates technical design, custom fabrication, hot-dip galvanizing, and site execution under one corporate umbrella.
        </p>

        <div className="grid-3">
          {verticals.map((vert, idx) => {
            const Icon = vert.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    backgroundColor: `${vert.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <Icon size={28} color={vert.color} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#0F172A' }}>
                    {vert.title}
                  </h3>

                  <p style={{ fontSize: '0.925rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {vert.desc}
                  </p>
                </div>

                <Link
                  to={vert.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: '#0F172A'
                  }}
                >
                  Explore Solution <ChevronRight size={16} color="#F59E0B" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
