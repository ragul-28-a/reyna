# Reyna India - Corporate & Industrial Engineering Website

A complete, production-ready, fully responsive web application for **Reyna India** built with **React 18**, **Vite**, **Tailwind CSS**, **Lucide Icons**, and **React Router DOM**.

## 🚀 Live Preview & Vercel Deployment

- **Vercel Hosting Ready**: Includes pre-configured `vercel.json` SPA rewrite configuration.
- **Local Dev Server**: `http://localhost:3000/`

---

## 🛠️ Tech Stack & Key Features

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (`@tailwindcss/postcss`) + Modern Custom Industrial Design System
- **Icons**: Lucide React (`lucide-react`)
- **Routing**: React Router DOM (`react-router-dom`)
- **SEO & Schema**: Dynamic Head Manager (`SEO.jsx`), OpenGraph, Twitter Cards, `sitemap.xml`, `robots.txt`, and JSON-LD Structured Data
- **Contact & Lead Routing**:
  - Direct WhatsApp Notification to: `+91 96880 98250`
  - Direct Email Dispatch to: `ragularivu28@gmail.com`

---

## 📱 Responsive Across All Devices

- **Mobile Phones (320px - 640px)**
- **Tablets / iPads (641px - 1024px)**
- **Laptops (1025px - 1280px)**
- **Desktops (1280px+)**

---

## 📁 Project Structure

```
yaglob/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
├── src/
│   ├── components/
│   │   ├── common/ (SEO, QuoteModal, ProductDetailModal, WhatsAppButton)
│   │   ├── home/ (Hero, StatsCounter, BusinessVerticals, ExecutionProcess, FeaturedProducts, FeaturedProjects, ClientLogos, CertificationsBar, TestimonialsSection, FAQSection)
│   │   └── layout/ (Header, Footer)
│   ├── data/ (company, products, projects, services, faqs)
│   ├── pages/ (HomePage, AboutPage, ServicesPage, ProductsPage, ProjectsPage, ResourcesPage, ContactPage, NotFoundPage)
│   └── styles/ (main.css)
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── package.json
└── vite.config.js
```

---

## 📦 Local Setup & Deployment

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Local Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production / Vercel**:
   ```bash
   npm run build
   ```

4. **Push to GitHub**:
   ```bash
   git remote set-url origin https://github.com/ragul-28-a/reyna.git
   git push -u origin main
   ```
