import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { AlertTriangle, Home, ChevronRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Reyna India"
        description="The page you requested could not be found."
        canonical="https://www.reynaindia.com/404"
      />

      <section style={{ padding: '6rem 0', backgroundColor: '#F8FAFC', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          
          <AlertTriangle size={64} color="#F59E0B" style={{ margin: '0 auto 1.5rem auto' }} />

          <h1 style={{ fontSize: '3rem', color: '#0F172A', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
            404 - Page Not Found
          </h1>

          <p style={{ color: '#64748B', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            The requested technical page or URL does not exist or has been moved within our engineering portal.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={18} /> Return to Home
            </Link>
            <Link to="/products" className="btn btn-outline">
              Explore Products <ChevronRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
