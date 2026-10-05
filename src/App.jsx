import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import QuoteModal from './components/common/QuoteModal';
import ProductDetailModal from './components/common/ProductDetailModal';
import WhatsAppButton from './components/common/WhatsAppButton';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenQuote = (subject = '') => {
    setQuoteSubject(subject);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteSubject('');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onOpenQuoteModal={handleOpenQuote} />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenQuoteModal={handleOpenQuote} onSelectProduct={setSelectedProduct} />}
          />
          <Route
            path="/about"
            element={<AboutPage onOpenQuoteModal={handleOpenQuote} />}
          />
          <Route
            path="/services"
            element={<ServicesPage onOpenQuoteModal={handleOpenQuote} />}
          />
          <Route
            path="/products"
            element={<ProductsPage onSelectProduct={setSelectedProduct} onOpenQuoteModal={handleOpenQuote} />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage onOpenQuoteModal={handleOpenQuote} />}
          />
          <Route
            path="/resources"
            element={<ResourcesPage onOpenQuoteModal={handleOpenQuote} />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
            path="/sitemap"
            element={<SitemapPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>

      <Footer onOpenQuoteModal={handleOpenQuote} />

      {/* Global Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialSubject={quoteSubject}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(sub) => handleOpenQuote(sub)}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />
    </div>
  );
}
