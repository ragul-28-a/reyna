import React, { useEffect } from 'react';

export default function SEO({
  title = "Reyna India | Pioneer of WTG Services & Heavy Engineering Solutions",
  description = "Reyna India is the pioneer of WTG wind services, solar mounting structures, pre-engineered buildings, lifting equipment, and heavy engineering consultancy in India.",
  keywords = "Reyna India, WTG Services, Wind Energy India, Solar Mounting Structures, Tower Cranes, Pre-engineered Buildings, Lifting Equipment, BPCL Projects",
  canonical = "https://www.reynaindia.com/",
  ogImage = "https://www.reynaindia.com/images/hero_bg.jpg",
  ogType = "website",
  schemaJson = null
}) {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Helper function to set or update meta tag
    const updateMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attrName, attrVal.replace(/"/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Meta Description & Keywords
    updateMetaTag('meta[name="description"]', 'content', description);
    updateMetaTag('meta[name="keywords"]', 'content', keywords);

    // Open Graph
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:url"]', 'content', canonical);
    updateMetaTag('meta[property="og:image"]', 'content', ogImage);
    updateMetaTag('meta[property="og:type"]', 'content', ogType);

    // Twitter
    updateMetaTag('meta[property="twitter:title"]', 'content', title);
    updateMetaTag('meta[property="twitter:description"]', 'content', description);
    updateMetaTag('meta[property="twitter:url"]', 'content', canonical);
    updateMetaTag('meta[property="twitter:image"]', 'content', ogImage);

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Dynamic JSON-LD Schema
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Reyna India",
      "legalName": "Reyna India Engineering Services Pvt. Ltd.",
      "url": "https://www.reynaindia.com",
      "logo": "https://www.reynaindia.com/favicon.svg",
      "description": "Pioneer of WTG wind services, solar mounting structures, pre-engineered buildings, lifting equipment, and heavy engineering solutions.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Industrial Estate, Guindy",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600032",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil", "Hindi"]
      },
      "sameAs": [
        "https://www.reynaindia.com"
      ]
    };

    const targetSchema = schemaJson || defaultSchema;

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(targetSchema);

  }, [title, description, keywords, canonical, ogImage, ogType, schemaJson]);

  return null;
}
