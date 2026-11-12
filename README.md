# Zodiac Webs - Modern Landing Page

A high-converting, single-page dark-themed landing page engineered for **Zodiac Webs** (web design and development agency).

Built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**, fully prepared for deployment on **Vercel**.

---

## 🚀 Features

- **Dark Cosmic Aesthetics**:
  - Cosmic background: `#0A0A0A` to `#050B14`
  - Neon Accents: `#FF6B00` (Neon Orange) and `#FFD700` (Gold)
  - Text: `#FFFFFF` (White) and `#A0AAB2` (Silver)
  - Typography: **Space Grotesk**
- **Lightweight Motion**:
  - Ambient floating background orbs
  - Fade-up reveals on viewport enter
  - Neon glow hover states on interactive cards and buttons
  - Full support for `prefers-reduced-motion`
- **Sections**:
  1. **Navbar**: Glowing "Z" emblem, "Zodiac Webs" brand, quick navigation, mobile drawer menu (>= 44px touch targets).
  2. **Hero**: Headline *"Turn Visitors into Customers."*, subheadline *"We Build. You Grow."*, glowing "Z" logo, and primary CTA *"Start Your Project"* which smoothly scrolls to the contact section.
  3. **Services**: 4 distinct service cards with custom features and badges:
     - Business Websites
     - Cafe & Restaurants
     - E-commerce Stores
     - Portfolio & Personal Sites
  4. **Why Us**: 4 core competitive advantages:
     - Modern & Responsive (100% fluid)
     - SEO-Friendly (Top search ranking architecture)
     - Fast & Reliable (<0.8s target loads)
     - Ongoing Support (24/7 direct partner access)
  5. **Work**: 3 curated project cards with mockup frames, niche tags, tech stacks, and metrics:
     - Aura Dining & Lounge (Cafe & Restaurant)
     - Apex Nova Logistics (Enterprise Business)
     - Luxe Minimalist (E-commerce Store)
  6. **Contact**: Interactive contact hub with:
     - Live form validation (Name, Email, Project Details) with instant visual feedback and success state
     - **DM on Instagram**: `https://ig.me/m/zodiac.webs`
     - **Profile Link**: `https://www.instagram.com/zodiac.webs` (`@zodiac.webs`)
     - **Chat on WhatsApp**: `wa.me` instant messaging button
  7. **Footer**: Brand mark, quick links, direct channels, dynamic copyright notice, and back-to-top button.

---

## ⚙️ Configuration

Update your contact channels directly in `src/config/contact.js`:

```js
export const CONTACT = {
  instagramUrl: "https://www.instagram.com/zodiac.webs",
  instagramDm: "https://ig.me/m/zodiac.webs",
  whatsappNumber: "REPLACE_WITH_NUMBER", // e.g. "1234567890"
  email: "REPLACE_WITH_EMAIL",           // e.g. "hello@zodiacwebs.com"
};
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run local dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Deploying to Vercel

### Option 1: Vercel CLI
```bash
npx vercel
```

### Option 2: Git Repository Import
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import this repository.
4. Framework preset: **Vite** (auto-detected).
5. Click **Deploy**.
