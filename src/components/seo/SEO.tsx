import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = siteConfig.description,
  canonical,
  ogImage = siteConfig.logo,
  schema
}) => {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name} — ${siteConfig.tagline}`
    : `${siteConfig.name} — Website Design & Development | ${siteConfig.tagline}`;

  const currentUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`;

  // Organization Schema
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    slogan: siteConfig.tagline,
    openingHours: 'Mo-Sa 09:00-19:00',
    priceRange: '₹₹',
    areaServed: 'Worldwide'
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
};
