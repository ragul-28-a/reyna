import React from 'react';
import SEO from '../components/common/SEO';
import { Download, FileText, ShieldCheck, ExternalLink, ChevronRight } from 'lucide-react';

export default function ResourcesPage({ onOpenQuoteModal }) {
  const downloads = [
    {
      title: "Reyna India Corporate Engineering Catalog 2026",
      category: "Corporate Brochure",
      size: "4.8 MB PDF",
      desc: "Complete overview of WTG up-tower services, solar MMS, PEB structures, and hot-dip galvanizing plant capacities."
    },
    {
      title: "WTG Nosecone & Gearbox Replacement Crane Technical Sheet",
      category: "Equipment Specs",
      size: "2.1 MB PDF",
      desc: "3.5 Ton SWL lifting schematic, modular assembly step guide, FEA calculations, and proof test certificates."
    },
    {
      title: "35-Ton Hydraulic Tower Dent Removal Fixture Datasheet",
      category: "Tooling Datasheet",
      size: "1.8 MB PDF",
      desc: "Operating instructions, curvature die selector chart, hydraulic pump specs, and 3D laser ovality report sample."
    },
    {
      title: "Solar Module Mounting Structures (MMS) Technical Catalog",
      category: "Solar Racking",
      size: "3.4 MB PDF",
      desc: "Cold-formed galvanized steel profiles, wind speed rating tables (IS 875), ballast roof systems, and 25-yr warranty details."
    },
    {
      title: "ISO 9001:2015 & OHSAS 18001 Quality & Safety Certificates",
      category: "Quality Compliance",
      size: "1.2 MB PDF",
      desc: "Official Bureau of Indian Standards (BIS) and Joint Inspection Group (JIG) accredited quality compliance documents."
    },
    {
      title: "CE Proof Test Certificates - Suspended Platforms & Winches",
      category: "Safety Certificates",
      size: "2.9 MB PDF",
      desc: "Statutory Form-9 & Form-10 proof load test validation for chair platforms, dual hoists, and material baskets."
    }
  ];

  const handleDownload = (docTitle) => {
    const element = document.createElement("a");
    const file = new Blob([
      `REYNA INDIA TECHNICAL DOCUMENTATION\nDocument Title: ${docTitle}\nWebsite: https://www.reynaindia.com/\n\nFor technical queries or CAD drawing requests, email info@reynaindia.com.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${docTitle.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <SEO
        title="Resources & Downloads | Reyna India Technical Brochures & Certificates"
        description="Download Reyna India technical datasheets, product brochures, ISO quality certificates, and solar MMS specification catalogs."
        canonical="https://www.reynaindia.com/resources"
      />

      {/* Header Banner */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '4rem 0 5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
            Technical Documentation
          </span>
          <h1 style={{ fontSize: '2.75rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            Brochures, Spec Sheets & Certificates
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}>
            Access official technical documentation, ISO quality certificates, and structural engineering specification sheets.
          </p>
        </div>
      </section>

      {/* Resources Cards Grid */}
      <section style={{ padding: '5rem 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          
          <div className="grid-3">
            {downloads.map((doc, idx) => (
              <div key={idx} className="card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      backgroundColor: '#0F172A',
                      color: '#F59E0B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FileText size={24} />
                    </div>

                    <span className="badge badge-slate">
                      {doc.size}
                    </span>
                  </div>

                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#06B6D4', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {doc.category}
                  </span>

                  <h3 style={{ fontSize: '1.15rem', color: '#0F172A', marginTop: '0.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                    {doc.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    {doc.desc}
                  </p>
                </div>

                <button
                  onClick={() => handleDownload(doc.title)}
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
                >
                  <Download size={16} /> Download File
                </button>

              </div>
            ))}
          </div>

          <div style={{
            marginTop: '4rem',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '16px',
            padding: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                Need Custom CAD Drawings or FEA Rigging Reports?
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>
                Our design team can provide tailored CAD models and site-specific structural calculations.
              </p>
            </div>

            <button onClick={() => onOpenQuoteModal('Request Custom CAD / FEA Drawing')} className="btn btn-primary">
              Talk to a Design Engineer <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
