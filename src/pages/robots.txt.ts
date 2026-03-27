import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const fallbackSite =
    process.env.SITE_URL ?? process.env.CF_PAGES_URL ?? 'https://belovedjohndev.pages.dev';
  const baseUrl = (site ?? new URL(fallbackSite)).toString().replace(/\/$/, '');

  const body = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
