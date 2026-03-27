import type { APIRoute, GetStaticPaths } from 'astro';
import { insights } from '../../../data/siteContent';
import { createSvgResponse, renderOgImage } from '../../../lib/og';

export const getStaticPaths = (() =>
  insights.map((article) => ({
    params: { slug: article.slug },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const article = insights.find((entry) => entry.slug === params.slug);

  if (!article) {
    return new Response('Not found', { status: 404 });
  }

  return createSvgResponse(
    renderOgImage({
      eyebrow: `${article.category} Insight`,
      title: article.title,
      description: article.summary,
      footer: `${article.readingTime} | Beloved John Dev`,
      chips: article.takeaways.slice(0, 3),
    })
  );
};
