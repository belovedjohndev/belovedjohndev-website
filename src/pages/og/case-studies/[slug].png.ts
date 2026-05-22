import type { APIRoute, GetStaticPaths } from 'astro';
import { caseStudies } from '../../../data/siteContent';
import { createPngResponse, renderOgImage } from '../../../lib/og';

export const getStaticPaths = (() =>
  caseStudies.map((study) => ({
    params: { slug: study.slug },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const study = caseStudies.find((entry) => entry.slug === params.slug);

  if (!study) {
    return new Response('Not found', { status: 404 });
  }

  return createPngResponse(
    renderOgImage({
      eyebrow: `${study.serviceLine} Case Study`,
      title: study.title,
      description: study.summary,
      footer: 'Case Study | Beloved John Dev',
      chips: study.proof,
    })
  );
};
