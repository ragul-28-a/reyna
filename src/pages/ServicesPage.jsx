import React from 'react';
import SEO from '../components/common/SEO';
import { Wind, Flame, Hammer, Settings, Sun, Layers, ShieldCheck, ChevronRight, MessageSquare } from 'lucide-react';
import { servicesData } from '../data/services';

const iconMap = {
  Wind: Wind,
  Flame: Flame,
  Hammer: Hammer,
  Settings: Settings,
  Sun: Sun,
  Layers: Layers,
  ShieldCheck: ShieldCheck
};

export default function ServicesPage({ onOpenQuoteModal }) {
  return (
    <>
      <SEO
        title="Specialized Services | Reyna India - WTG Up-Tower, Solar & Galvanizing"
        description="Explore Reyna India's technical services: WTG up-tower lifting, 35T hydraulic tower dent repair, up-tower welding, solar MMS design, and hot-dip galvanizing."
        canonical="https://www.reynaindia.com/services"
      />

      {/* Header Banner */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '4rem 0 5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
            Engineering Capabilities
          </span>
          <h1 style={{ fontSize: '2.75rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            Specialized Technical & Field Services
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}>
            In-situ WTG component replacement, 35-Ton hydraulic dent restoration, structural welding, and 12-meter bath hot-dip galvanizing.
          </p>
        </div>
      </section>

      {/* Services Cards List */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {servicesData.map((service, idx) => {
              const Icon = iconMap[service.icon] || ShieldCheck;
              return (
                <div
                  key={service.id}
                  className="card"
                  style={{
                    padding: '2.5rem',
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr 240px',
                    gap: '2rem',
                    alignItems: 'center',
                    borderLeft: idx % 2 === 0 ? '4px solid #F59E0B' : '4px solid #06B6D4'
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '14px',
                    backgroundColor: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={34} color={idx % 2 === 0 ? '#F59E0B' : '#06B6D4'} />
                  </div>

                  {/* Info */}
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {service.category}
                    </span>
                    <h3 style={{ fontSize: '1.4rem', color: '#0F172A', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {service.summary}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.5rem' }}>
                      {service.details.map((detail, dIdx) => (
                        <span key={dIdx} style={{ fontSize: '0.825rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <span style={{ width: '6px', height: '6px', backgroundColor: '#F59E0B', borderRadius: '50%' }} />
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <button
                      onClick={() => onOpenQuoteModal(`Enquiry for Service: ${service.title}`)}
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%' }}
                    >
                      Talk to an Engineer
                    </button>

                    <a
                      href={`https://wa.me/919688098250?text=Hello%20Reyna%20India,%20I%20need%20details%20on%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}
                    >
                      <MessageSquare size={14} /> Direct WhatsApp
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
