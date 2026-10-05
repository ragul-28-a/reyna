import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Download, MessageSquare } from 'lucide-react';
import { productsData } from '../../data/products';

export default function FeaturedProducts({ onSelectProduct, onOpenQuoteModal }) {
  const featured = productsData.slice(0, 6);

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-subtitle" style={{ textAlign: 'left' }}>Product Showcase</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>High-Demand Equipment & Structures</h2>
          </div>

          <Link to="/products" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            View All Products ({productsData.length}) <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid-3">
          {featured.map((prod) => (
            <div key={prod.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ position: 'relative', height: '210px', backgroundColor: '#0F172A', overflow: 'hidden' }}>
                  <img
                    src={prod.image}
                    alt={`${prod.name} - ${prod.capacity}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: '#F59E0B',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>
                    {prod.capacity}
                  </div>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0F172A' }}>
                    {prod.name}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {prod.shortDesc}
                  </p>

                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '0.75rem', marginBottom: '1rem' }}>
                    {prod.specs.slice(0, 2).map((sp, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                        <span style={{ color: '#64748B' }}>{sp.label}:</span>
                        <span style={{ fontWeight: 600, color: '#0F172A' }}>{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ padding: '0 1.25rem 1.25rem 1.25rem', display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => onSelectProduct(prod)}
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  View Specs
                </button>

                <button
                  onClick={() => onOpenQuoteModal(`Enquiry for ${prod.name}`)}
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1 }}
                >
                  Talk to Engineer
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
