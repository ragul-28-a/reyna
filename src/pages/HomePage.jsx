import React from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import StatsCounter from '../components/home/StatsCounter';
import BusinessVerticals from '../components/home/BusinessVerticals';
import ExecutionProcess from '../components/home/ExecutionProcess';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ClientLogos from '../components/home/ClientLogos';
import CertificationsBar from '../components/home/CertificationsBar';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';

export default function HomePage({ onOpenQuoteModal, onSelectProduct }) {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Reyna India",
    "url": "https://www.reynaindia.com",
    "description": "Reyna India is the pioneer of WTG wind services, solar mounting structures, pre-engineered buildings, lifting equipment, and heavy engineering consultancy in India.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Engineering Products & Services Catalog",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WTG Up-Tower Component Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Solar Module Mounting Structures (MMS)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Tower Dent Removal Tool 35 Ton" } }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Reyna India | Pioneer of WTG Services & Heavy Engineering Solutions"
        description="Reyna India is the pioneer of WTG wind services, solar mounting structures, pre-engineered steel buildings, lifting platforms, and heavy engineering consultancy."
        canonical="https://www.reynaindia.com/"
        schemaJson={homeSchema}
      />

      <Hero onOpenQuoteModal={onOpenQuoteModal} />
      <StatsCounter />
      <ClientLogos />
      <BusinessVerticals />
      <ExecutionProcess />
      <FeaturedProducts onSelectProduct={onSelectProduct} onOpenQuoteModal={onOpenQuoteModal} />
      <FeaturedProjects />
      <CertificationsBar />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
