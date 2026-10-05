import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { Compass, ExternalLink, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';
import { productCategories, productsData } from '../data/products';
import { projectCategories, projectsData } from '../data/projects';
import { servicesData } from '../data/services';

export default function SitemapPage() {
  return (
    <>
      <SEO
        title="Visual Site Map | Reyna India - Web Directory"
        description="Comprehensive website directory and visual sitemap of Reyna India products, services, projects, resources, and contact pages."
        canonical="https://www.reynaindia.com/sitemap"
      />

      {/* Header Banner */}
      <section style={{ backgroundColor: '#0F172A', color: '#FFFFFF', padding: '4rem 0 5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
            Website Navigation Directory
          </span>
          <h1 style={{ fontSize: '2.75rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            Reyna India Visual Site Map
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}>
            A complete index of all pages, technical service categories, product catalogs, and case study projects across our portal.
          </p>

          <div style={{ marginTop: '1.5rem' }}>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
              style={{ color: '#F59E0B', borderColor: '#F59E0B' }}
            >
              View XML Sitemap for Search Engines <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Main Sitemap Directories */}
      <section style={{ padding: '4rem 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          
          <div className="grid-3" style={{ gap: '2rem' }}>
            
            {/* Main Navigation Pages */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid #F59E0B' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                Core Pages
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
                <li><Link to="/" style={{ color: '#0F172A', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}><ChevronRight size={16} color="#F59E0B" /> Home Page</Link></li>
                <li><Link to="/about" style={{ color: '#0F172A', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}><ChevronRight size={16} color="#F59E0B" /> About Us & Leadership</Link></li>
                <li><Link to="/services" style={{ color: '#0F172A', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}><ChevronRight size={16} color="#F59E0B" /> Specialized Services</Link></li>
                <li><Link to="/products" style={{ color: '#0F172A', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}><ChevronRight size={16} color="#F59E0B" /> Products Catalog</Link></li>
                <li><Link to="/projects" style={{ color: '#0F172A', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}><ChevronRight size={16} color="#F59E0B" /> Projects Portfolio</Link></li>
                <li><Link to="/resources" style={{ color: '#0F172A', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}><ChevronRight size={16} color="#F59E0B" /> Technical Downloads</Link></li>
                <li><Link to="/contact" style={{ color: '#0F172A', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}><ChevronRight size={16} color="#F59E0B" /> Contact Us & Request Quote</Link></li>
              </ul>
            </div>

            {/* Technical Services Directory */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid #06B6D4' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                Technical Services Directory
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                {servicesData.map((s) => (
                  <li key={s.id}>
                    <Link to="/services" style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={14} color="#06B6D4" style={{ flexShrink: 0 }} /> {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment & Product Categories */}
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid #10B981' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                Equipment & Product Categories
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                {productsData.map((p) => (
                  <li key={p.id}>
                    <Link to="/products" style={{ color: '#475569', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={14} color="#10B981" style={{ flexShrink: 0 }} /> {p.name} ({p.capacity})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
