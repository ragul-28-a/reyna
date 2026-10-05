import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqsData } from '../../data/faqs';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <span className="section-subtitle">Got Questions?</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-desc">
          Everything you need to know about Reyna India’s WTG technical services, product specifications, and project logistics.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqsData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  backgroundColor: isOpen ? '#F8FAFC' : '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'var(--transition-fast)'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={20} color="#F59E0B" style={{ flexShrink: 0 }} />
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp size={20} color="#06B6D4" /> : <ChevronDown size={20} color="#64748B" />}
                </button>

                {isOpen && (
                  <div style={{ padding: '0 1.5rem 1.25rem 3.25rem', color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
