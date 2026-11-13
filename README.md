# Zodiac Webs — Official Startup Website
> **We Build. You Grow.**  
> *Your Vision. Our Creation.*

Official digital agency marketing website and conversion engine for **Zodiac Webs**, engineering high-converting websites for startups, local businesses, cafés and restaurants, e-commerce brands, and professionals.

---

## 🌟 Brand Identity & Design Tokens

- **Brand Name**: Zodiac Webs
- **Core Tagline**: *We Build. You Grow.*
- **Brand Message**: *Your Vision. Our Creation.*
- **Value Proposition**: Turn visitors into paying customers with fast, high-converting, visually striking digital experiences.
- **Design Tokens**:
  - **Base Canvas**: `#050505` (Deep space obsidian)
  - **Surface**: `#111111` (Elevated section backgrounds)
  - **Elevated Card**: `#1A1A1A` (Card surfaces)
  - **Primary Accent**: `#FF7518` (Solar orange)
  - **Secondary Accent**: `#FFAD33` (Amber glow)
  - **Gradient**: `linear-gradient(135deg, #FF7518 0%, #FFAD33 100%)`
  - **Border Glow**: `rgba(255, 117, 24, 0.2)` → `rgba(255, 173, 51, 0.4)`
  - **Text**: `#FFFFFF` (Primary), `#B0B0B0` (Secondary)
  - **Typography**: Headings in `Outfit` (700/800, tight tracking `-0.02em`), Body in `Inter` (400/500, 16–18px, line-height 1.6–1.7, max ~65ch)
- **Official Brand Assets**:
  - Logo: `public/assets/logo.png` (circular badge with metallic beveled Z, cosmic orbital ring, constellation starbursts)
  - Brand Poster Reference: `public/assets/poster.jpg`
  - Favicon: `public/favicon.png`

---

## 🚀 Pages & Features

### 1. Home (`/`)
- **Fixed Glassmorphic Navbar**: Logo, navigation links (Home, Services, Portfolio, About, Contact), direct Instagram DM trigger, "Let's Build" CTA. Collapses into full-screen mobile drawer menu.
- **Hero Section**: 
  - Eyebrow: `Website Design & Development`
  - H1: `Turn Visitors Into Customers` (with gradient accent on "Customers")
  - Dual CTAs: "Let's Build Together" (primary gradient) & "Explore Our Services" (ghost)
  - "DM For Websites & Collabs" direct action trigger
  - **Floating Device Mockup**: Animated laptop and phone mockup showcasing responsive UI with subtle 60fps floating animation
- **4 Value Pillar Glow Cards**:
  1. *Modern & Responsive Websites*
  2. *SEO-Friendly Designs*
  3. *Fast & Reliable Performance*
  4. *Ongoing Support*
- **Services Preview Grid**: 6 cards linking directly to `/services` with key technical deliverables
- **Why Choose Zodiac Webs**: Craftsmanship Over Templates, Zero Bloat Architecture, Conversion-First Philosophy, Transparent Pricing, Security/SEO Standards, Direct Developer Collaboration
- **4-Step Process Timeline**: 01 Discovery → 02 UI/UX Architecture → 03 High-Speed Development → 04 Launch & Optimization
- **Featured Showcase**: Project cards with live architecture inspector modal
- **High-Conversion Banner**: "DM For Websites & Collabs" direct collaboration trigger
- **Footer**: Full site directory, Instagram Direct trigger, copyright, tagline, logo emblem

### 2. About (`/about`)
- Origin story: Why Zodiac Webs exists (bespoke craftsmanship over fragile, generic templates)
- Mission: *"Empowering ambitious businesses to dominate their digital footprint"*
- Vision: *"Your Vision. Our Creation."*
- Values: Craftsmanship over templates · Measurable ROI · Uncompromising speed · Radical honesty
- Engineering standards: Modern React 18, Tailwind CSS, Lighthouse 95+ target, semantic WCAG compliance

### 3. Services (`/services`)
- 6 Specialized Verticals:
  - *Business Websites*
  - *Café & Restaurant Websites*
  - *E-Commerce Stores*
  - *Portfolio & Personal Sites*
  - *Modern & Responsive Development*
  - *SEO, Performance & Ongoing Support*
- For each vertical: Overview, Core technical features, Measurable business ROI, responsive preview, and "Request a Quotation" CTA
- **Interactive "Estimate Your Project" Calculator**: Select project type, page scope, and growth add-ons to calculate an instant ballpark estimate and lock it into the quote form
- **FAQ Accordion**: Comprehensive answers on turnaround, technologies, custom integrations, and guarantees

### 4. Portfolio (`/portfolio`)
- **Animated Filter Tabs**: All · Business · Café & Food · E-Commerce · Portfolios (powered by Framer Motion layout animations)
- Explicit **DEMO** / **LIVE** badges to uphold strict agency integrity
- **Preview Modal**: Key benchmarks (speed, performance, Lighthouse), Challenge → Solution breakdown, deliverables, tech tags, and live demo link

### 5. Contact (`/contact`)
- **Enquiry Form with Validation** (React Hook Form + Zod):
  - Full Name / Company Name
  - Work Email Address
  - Phone / Instagram Handle
  - Primary Service selection
  - Target Budget Tier
  - Project Goals & Vision details
  - Inline error feedback & disabled submit state until valid
- **WhatsApp Click-to-Chat**: Automatically pre-fills formatted project parameters
- **Email Option with One-Click Copy-to-Clipboard**
- **Instagram Direct DM** (`@zodiacwebs`)
- **Success State**: Confetti animation, summary of submitted parameters, and "We respond within 24 hours" reassurance
- **Location**: "Global / Remote Studio · Operating Worldwide"

### 6. 404 Orbit Lost (`/*`)
- Constellation visual layout, branded return buttons to Home and Services

---

## 🛠️ Tech Stack & Engineering Standards

- **Framework**: React 18 + Vite (TypeScript with strict mode)
- **Styling**: Tailwind CSS with custom theme design tokens
- **Icons**: Lucide React
- **Motion**: Framer Motion (60fps entrance fade + translateY(20px), stagger children 0.08–0.12s, hover lift -4px with orange glow, prefers-reduced-motion compliance)
- **Forms & Validation**: `react-hook-form` + `zod` + `@hookform/resolvers`
- **Routing**: `react-router-dom` with code-splitting (`React.lazy()` + `Suspense`) and `ScrollToTop` on route change
- **Accessibility**: Skip-to-content link, WCAG AA contrast, orange visible focus rings (`focus-visible:ring-[#FF7518]`), keyboard-navigable dialogs with focus trap and Esc handling
- **SEO & Social Sharing**: Complete Open Graph, Twitter cards, canonical tags, `robots.txt`, and `sitemap.xml`

---

## 📦 Getting Started Locally

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18+ recommended) is installed.

### 2. Installation
```bash
git clone <repo-url>
cd APP
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env` and fill in your details:
```bash
cp .env.example .env
```

| Key | Description | Default / Example |
|---|---|---|
| `VITE_SITE_URL` | Canonical production domain | `https://zodiacwebs.com` |
| `VITE_SITE_NAME` | Website brand name | `Zodiac Webs` |
| `VITE_INSTAGRAM_HANDLE` | Official Instagram handle | `@zodiacwebs` |
| `VITE_INSTAGRAM_URL` | Instagram profile link | `https://instagram.com/zodiacwebs` |
| `VITE_INSTAGRAM_DM_URL` | Instagram direct message deep link | `https://ig.me/m/zodiacwebs` |
| `VITE_WHATSAPP_NUMBER` | WhatsApp number for chat (optional) | `15551234567` |
| `VITE_CONTACT_EMAIL` | Official contact email address | `hello@zodiacwebs.com` |

### 4. Running the Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Building for Production
```bash
npm run build
```
Optimized assets will be generated in `dist/`.

### 6. Previewing the Production Build
```bash
npm run preview
```

---

## 🚀 Production Deployment

### Vercel
1. Run `npx vercel`
2. Root directory: `./`
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify
1. Connect repository on Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Redirects: Create `public/_redirects` with `/* /index.html 200` for SPA routing.

### Cloudflare Pages
1. Build preset: `Vite`
2. Build command: `npm run build`
3. Output directory: `dist`

---

**© Zodiac Webs. All rights reserved. We Build. You Grow.**
