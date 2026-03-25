import type { APIRoute } from 'astro';

const pages = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/home-service-estimator',
    changefreq: 'monthly',
    priority: '0.8',
  },
] as const;

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://belovedjohndev.github.io');
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
