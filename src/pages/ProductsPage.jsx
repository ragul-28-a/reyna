import React, { useState, useMemo } from 'react';
import SEO from '../components/common/SEO';
import { Search, Filter, ChevronRight, Download, MessageSquare } from 'lucide-react';
import { productsData, productCategories } from '../data/products';

export default function ProductsPage({ onSelectProduct, onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return productsData.filter((prod) => {
      const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
      const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            prod.capacity.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Products Catalog | Reyna India - WTG Cranes, Solar MMS & Platforms"
        description="Browse Reyna India's technical product catalog: 3.5T nosecone cranes, 5T geared trolleys, 35T dent tools, hanging platforms, solar MMS racks, and PEB steel structures."
        canonical="https://www.reynaindia.com/products"
      />

      {/* Header Banner */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '4rem 0 5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
            Equipment & Structural Catalog
          </span>
          <h1 style={{ fontSize: '2.75rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            Technical Products & Engineering Systems
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}>
            Proof-tested lifting machinery, high-capacity hydraulic tools, CE certified suspended platforms, and hot-dip galvanized solar mounting structures.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section style={{ padding: '2rem 0 4rem 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            border: '1px solid #E2E8F0',
            marginBottom: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            {/* Category Filter Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {productCategories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      fontWeight: active ? 700 : 500,
                      backgroundColor: active ? '#0F172A' : '#F1F5F9',
                      color: active ? '#F59E0B' : '#475569',
                      border: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '280px' }}>
              <Search size={18} color="#64748B" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search products or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.55rem 0.75rem 0.55rem 2.4rem',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  fontSize: '0.875rem'
                }}
              />
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ color: '#0F172A', marginBottom: '0.5rem' }}>No products match your search</h3>
              <p style={{ color: '#64748B' }}>Try clearing your search query or selecting a different category filter.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn btn-outline btn-sm"
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid-3">
              {filteredProducts.map((prod) => (
                <div key={prod.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ position: 'relative', height: '220px', backgroundColor: '#0F172A', overflow: 'hidden' }}>
                      <img
                        src={prod.image}
                        alt={`${prod.name} - ${prod.capacity}`}
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

                      <div style={{ backgroundColor: '#F8FAFC', padding: '0.65rem', borderRadius: '6px', marginBottom: '1rem', border: '1px solid #E2E8F0' }}>
                        {prod.specs.map((sp, idx) => (
                          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.775rem', marginBottom: '0.2rem' }}>
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
                      onClick={() => onOpenQuoteModal(`Product Quote: ${prod.name}`)}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1 }}
                    >
                      Talk to Engineer
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
