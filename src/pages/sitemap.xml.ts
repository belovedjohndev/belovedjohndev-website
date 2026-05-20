import type { APIRoute } from 'astro';
import { caseStudies, insights, intentLandingPages } from '../data/siteContent';

const pages = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/services',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/services/custom-business-systems',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/services/client-portals-estimator-tools',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/services/automation-integrations',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/case-studies',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/insights',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/process',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/about',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/contact',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/home-service-estimator',
    changefreq: 'monthly',
    priority: '0.8',
  },
  ...intentLandingPages.map((page) => ({
    path: `/${page.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  })),
  ...caseStudies.map((study) => ({
    path: `/case-studies/${study.slug}`,
    changefreq: 'monthly',
    priority: '0.7',
  })),
  ...insights.map((article) => ({
    path: `/insights/${article.slug}`,
    changefreq: 'monthly',
    priority: '0.6',
  })),
] as const;

export const GET: APIRoute = ({ site }) => {
  const fallbackSite = import.meta.env.SITE || 'https://belovedjohndev.com';
  const baseUrl = site ?? new URL(fallbackSite);
  const lastmod = new Date().toISOString().split('T')[0];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${new URL(page.path, baseUrl).toString()}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
