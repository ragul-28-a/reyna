import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyDetails } from '../../data/company';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Reyna%20India,%20I%20would%20like%20to%20talk%20to%20an%20engineer%20about%20your%20services/products.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Contact Reyna India on WhatsApp"
      title="Talk to a Reyna Engineer on WhatsApp"
    >
      <MessageSquare size={30} fill="#FFFFFF" color="#25D366" />
    </a>
  );
}
