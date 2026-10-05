import React from 'react';
import { X, Download, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onRequestQuote }) {
  if (!product) return null;

  const handleDownloadBrochure = () => {
    // Simulated brochure download alert or link
    const element = document.createElement("a");
    const file = new Blob([
      `REYNA INDIA TECHNICAL DATASHEET\nProduct: ${product.name}\nCapacity: ${product.capacity}\n\nTechnical Specifications:\n` +
      product.specs.map(s => `- ${s.label}: ${s.value}`).join('\n') +
      `\n\nKey Features:\n` + product.features.map(f => `- ${f}`).join('\n') +
      `\n\nContact Reyna India Sales: info@reynaindia.com | +91 98765 43210`
    ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${product.id}_Datasheet.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', padding: 0 }}>
        
        {/* Header Image Banner */}
        <div style={{ position: 'relative', height: '240px', backgroundColor: '#0F172A', overflow: 'hidden' }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)'
          }} />

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>

          <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', right: '1.5rem' }}>
            <span className="badge badge-amber" style={{ marginBottom: '0.4rem' }}>
              {product.capacity}
            </span>
            <h2 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
              {product.name}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.75rem' }}>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {product.shortDesc}
          </p>

          {/* Technical Specifications Table */}
          <h4 style={{ fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.75rem', borderBottom: '2px solid #F59E0B', paddingBottom: '0.25rem', display: 'inline-block' }}>
            Technical Specifications
          </h4>

          <div style={{ backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0', padding: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
              {product.specs.map((spec, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '0.4rem' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                    {spec.label}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <h4 style={{ fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.75rem', borderBottom: '2px solid #F59E0B', paddingBottom: '0.25rem', display: 'inline-block' }}>
            Engineering Features & Benefits
          </h4>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
            {product.features.map((feature, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.95rem', color: '#334155' }}>
                <CheckCircle2 size={18} color="#06B6D4" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid #E2E8F0', paddingTop: '1.25rem' }}>
            <button
              onClick={handleDownloadBrochure}
              className="btn btn-outline btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={16} color="#06B6D4" /> Download Technical Specs Sheet
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(`Inquiry about ${product.name} (${product.capacity})`);
              }}
              className="btn btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Talk to an Engineer <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
