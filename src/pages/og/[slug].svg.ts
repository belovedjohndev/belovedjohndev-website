import type { APIRoute, GetStaticPaths } from 'astro';
import { createSvgResponse, renderOgImage } from '../../lib/og';

const ogPages = {
  home: {
    eyebrow: 'Business Systems',
    title: 'Custom business systems that replace spreadsheets and manual workflows',
    description:
      'Internal tools, client portals, estimator flows, and automation for companies that need software shaped around real operations.',
    chips: ['Systems', 'Portals', 'Automation'],
  },
  services: {
    eyebrow: 'Services',
    title: 'What you can hire me to build',
    description:
      'Focused offers for custom business systems, client portals, estimator tools, and automation work.',
    chips: ['$3k+ Systems', '$2k+ Portals', '$1.5k+ Automation'],
  },
  'case-studies': {
    eyebrow: 'Case Studies',
    title: 'Proof built around business problems, not just screenshots',
    description:
      'Examples of systems, lead tools, and operational software framed around the problem, solution, and outcome.',
    chips: ['Problems', 'Solutions', 'Results'],
  },
  insights: {
    eyebrow: 'Insights',
    title: 'Short thinking on workflows, internal tools, and lead systems',
    description:
      'A consultant-style point of view on when software should replace spreadsheets, bad forms, and fragile manual processes.',
    chips: ['Spreadsheets', 'Lead Flow', 'Internal Tools'],
  },
  process: {
    eyebrow: 'Process',
    title: 'A practical delivery process for business software projects',
    description:
      'Clear discovery, sensible scope, and milestone-based delivery built around the workflow that needs fixing first.',
    chips: ['Discovery', 'Scope', 'Delivery'],
  },
  about: {
    eyebrow: 'About',
    title: 'Independent consultant mindset, systems-focused delivery',
    description:
      'Direct communication, operational thinking, maintainable architecture, and practical delivery for business-critical software.',
    chips: ['Direct Access', 'Maintainable', 'Practical'],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Start with the workflow problem you need the system to solve',
    description:
      'Use the structured project brief to describe the broken process, desired outcome, budget, and timeline.',
    chips: ['Project Brief', 'Budget', 'Timeline'],
  },
  estimator: {
    eyebrow: 'Focused Offer',
    title: 'Instant estimate and lead capture system for home service companies',
    description:
      'A guided estimate flow that creates more qualified leads, less intake friction, and better context for the office team.',
    chips: ['Lead Capture', 'Estimator', 'Home Services'],
  },
} as const;

export const getStaticPaths = (() =>
  Object.keys(ogPages).map((slug) => ({
    params: { slug },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const slug = params.slug as keyof typeof ogPages;
  const page = ogPages[slug];

  if (!page) {
    return new Response('Not found', { status: 404 });
  }

  return createSvgResponse(renderOgImage(page));
};
