export interface ServiceOffer {
  slug: string;
  title: string;
  summary: string;
  description: string;
  bestFor: string;
  startingPrice: string;
  pricingNote: string;
  examples: string[];
  includes: string[];
  outcomes: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  summary: string;
  audience: string;
  proofPoints: Array<{
    value: string;
    label: string;
    detail: string;
  }>;
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
  features: string[];
  results: string[];
  stack: string[];
  image: string;
  alt: string;
  referenceLabel: string;
  referenceHref?: string;
  referenceText: string;
  referenceExternal?: boolean;
  confidential?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  headline: string;
  context: string;
  proof: string[];
}

export interface InsightSection {
  title: string;
  paragraphs: string[];
}

export interface InsightArticle {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  audience: string;
  takeaways: string[];
  intro: string;
  sections: InsightSection[];
}

export const contactLinks = {
  whatsapp:
    'https://wa.me/855963885424?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20business%20system%20project.',
  telegram: 'https://t.me/belovedjohndev',
  estimator:
    'https://wa.me/855963885424?text=Hi%2C%20I%27d%20like%20to%20discuss%20the%20home%20service%20estimator%20offer.',
  github: 'https://github.com/belovedjohndev',
};

export const homePainPoints = [
  'Spreadsheets are running important workflows',
  'Staff re-enter the same data across tools',
  'Quote requests arrive with poor context',
  'The website is disconnected from operations',
  'Reporting is manual and hard to trust',
  'Growth is creating process bottlenecks',
];

export const idealClients = [
  'Service businesses with manual workflows',
  'Agencies needing internal tools or client portals',
  'Teams relying on spreadsheets for operations',
  'Companies that need quoting or estimator flows',
  'Businesses that need automation between systems',
  'Founders who need custom software without agency overhead',
];

export const notIdealClients = [
  'One-page brochure sites with no operational need',
  'Cheap redesign requests with no business case',
  'Teams that want a generic template instead of a custom workflow',
];

export const serviceOffers: ServiceOffer[] = [
  {
    slug: 'custom-business-systems',
    title: 'Custom Business Systems',
    summary:
      'Replace spreadsheets, disconnected tools, and fragile manual workflows with one system built around how your business actually operates.',
    description:
      'This is the offer for companies that need internal software to run operations more clearly, with better visibility, fewer workarounds, and less dependency on manual coordination.',
    bestFor:
      'Businesses that have outgrown spreadsheets, patched-together tools, or admin processes that break under growth.',
    startingPrice: '$3,000+',
    pricingNote:
      'Typical range depends on workflow complexity, number of roles, and whether reporting, permissions, or integrations are involved.',
    examples: [
      'Internal dashboards for staff and management',
      'Admin systems for records, approvals, and reporting',
      'Operations software for inventory, workflows, and day-to-day execution',
    ],
    includes: [
      'Internal dashboards and staff portals',
      'Admin workflows for records, approvals, and reporting',
      'Role-based access and maintainable backend architecture',
      'Business rules designed around real operational processes',
    ],
    outcomes: [
      'Less manual coordination',
      'Cleaner data and reporting',
      'More dependable day-to-day operations',
    ],
  },
  {
    slug: 'client-portals-estimator-tools',
    title: 'Client Portals and Estimator Tools',
    summary:
      'Build practical tools that turn website traffic into better inquiries, cleaner quoting, and more structured client interactions.',
    description:
      'This is for businesses that need something more useful than a contact form: estimator flows, lead qualification, booking, portals, or structured intake that helps the office team act faster.',
    bestFor:
      'Service companies and operators who need client-facing tools that support sales and reduce back-and-forth.',
    startingPrice: '$2,000+',
    pricingNote:
      'Final scope depends on the number of steps in the flow, business rules, admin visibility, and whether the tool connects into existing systems.',
    examples: [
      'Guided quote and estimator flows',
      'Client portals with account or job visibility',
      'Booking and intake tools that collect usable lead context',
    ],
    includes: [
      'Guided estimate and quote flows',
      'Client portals and intake experiences',
      'Booking, qualification, and lead capture workflows',
      'Website systems that support the office team after submission',
    ],
    outcomes: [
      'Better lead quality',
      'Faster quoting handoff',
      'A website that contributes to operations',
    ],
  },
  {
    slug: 'automation-integrations',
    title: 'Automation and Integrations',
    summary:
      'Connect processes, reduce repetitive work, and move data between systems with cleaner, more reliable workflows.',
    description:
      'This is the offer for teams that are wasting time on copy-paste work, repetitive admin steps, or disconnected tools that should already be talking to each other.',
    bestFor:
      'Teams that waste time on repetitive handling, copy-paste work, or disconnected software steps.',
    startingPrice: '$1,500+',
    pricingNote:
      'Pricing depends on how many systems are involved, the reliability requirements, and whether cleanup, reporting, or custom admin tooling is part of the work.',
    examples: [
      'Workflow automation between tools and teams',
      'Reporting pipelines, imports, and exports',
      'Notifications, internal utilities, and API integrations',
    ],
    includes: [
      'Workflow automation and custom utilities',
      'Reporting pipelines, imports, and exports',
      'API integrations and notifications',
      'Operational tooling for staff visibility and follow-up',
    ],
    outcomes: [
      'Less repetitive admin work',
      'Fewer avoidable mistakes',
      'Better flow between teams and tools',
    ],
  },
];

export const supportingCapabilities = [
  'Reporting dashboards',
  'API and backend development',
  'Role-based access control',
  'Data cleanup and migration utilities',
  'Security hardening and deployment support',
  'Operational websites with lead-focused flows',
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'home-service-estimate-engine',
    title: 'Home Service Estimate Engine',
    category: 'Focused Offer and Demo System',
    summary:
      'A guided estimate and lead capture experience designed for home service businesses that need more qualified quote requests.',
    audience:
      'Home service companies such as HVAC, roofing, plumbing, solar, restoration, and remodeling teams.',
    proofPoints: [
      {
        value: 'Better-fit leads',
        label: 'before the office team follows up',
        detail: 'The estimator collects structured job details before contact information is submitted.',
      },
      {
        value: 'Less intake friction',
        label: 'for staff handling quote requests',
        detail: 'The flow replaces vague form submissions with context the team can actually review and route.',
      },
      {
        value: 'Dual-purpose asset',
        label: 'for both outreach and proof',
        detail: 'The project works as a niche offer page and as live software evidence during sales conversations.',
      },
    ],
    problem:
      'Generic contact forms were creating weak quote requests, repetitive intake work, and poor lead context for the office team.',
    approach:
      'I treated the estimator as both a productized service offer and working software proof so prospects could understand the business value and see the flow in action.',
    solution:
      'Built a focused estimator offer page tied to a live demo showing guided intake, estimate logic, and structured lead capture for service businesses.',
    outcome:
      'The project now works as both portfolio proof and a niche sales asset, giving prospects a clearer picture of what they could buy rather than just what I can code.',
    features: [
      'Guided estimate flow',
      'Structured lead capture',
      'Reusable offer architecture',
      'Admin visibility for lead review',
    ],
    results: [
      'Clearer pre-qualification before the office team steps in',
      'More useful lead data than a standard quote form',
      'A focused sales page that supports outreach and discovery calls',
    ],
    stack: ['Astro', 'Widget frontend', 'API-backed estimate flow'],
    image: '/assets/images/home-service-demo.png',
    alt: 'Home service estimate demo showing the guided lead capture flow',
    referenceLabel: 'Offer page',
    referenceHref: '/home-service-estimator',
    referenceText: 'View the live estimator offer',
    referenceExternal: false,
  },
  {
    slug: 'church-management-system',
    title: 'Church Management System',
    category: 'Custom Business System',
    summary:
      'A full-stack management platform for member records, events, attendance, announcements, and secure internal coordination.',
    audience:
      'Private organizations that need centralized records, role-based access, and less administrative friction.',
    proofPoints: [
      {
        value: '~60%',
        label: 'less administrative workload',
        detail: 'Manual record handling and day-to-day coordination were significantly reduced after rollout.',
      },
      {
        value: 'One system',
        label: 'replaced scattered records',
        detail: 'Member, attendance, event, and announcement workflows moved into one operational platform.',
      },
      {
        value: 'Role-based access',
        label: 'for safer internal use',
        detail: 'Staff and leadership could work inside the same platform with permissions shaped around their responsibilities.',
      },
    ],
    problem:
      'The organization was handling members, events, attendance, and announcements through disconnected manual processes, leading to duplicated work and inconsistent records.',
    approach:
      'I designed the system around a clear API-first architecture so business rules stayed centralized while the interface remained focused on usability and long-term maintainability.',
    solution:
      'Built a full-stack management platform covering member records, event scheduling, attendance tracking, announcements, and secure role-based access for staff and leadership.',
    outcome:
      'Administrative workload dropped by roughly 60 percent, and the organization moved from scattered records to a single operational system that supports day-to-day coordination.',
    features: [
      'Role-based access control',
      'Centralized records and attendance',
      'Event scheduling and announcements',
      'Operational reporting for leadership',
    ],
    results: [
      'Roughly 60 percent less administrative workload',
      'One system replacing scattered records',
      'Clearer day-to-day coordination for staff and leadership',
    ],
    stack: ['Django REST Framework', 'Next.js', 'TypeScript'],
    image: '/assets/images/religious-org.png',
    alt: 'Church management platform interface with structured navigation',
    referenceLabel: 'Reference',
    referenceText: 'Private and confidential',
    confidential: true,
  },
  {
    slug: 'travel-agency-website',
    title: 'Travel Agency Website',
    category: 'Operational Website',
    summary:
      'A lead-focused business website designed to create trust faster and give mobile visitors a clearer path to inquiry.',
    audience:
      'Service businesses that need their website to improve credibility, contact flow, and lead generation.',
    proofPoints: [
      {
        value: 'Stronger first impression',
        label: 'for new visitors comparing providers',
        detail: 'The site was rebuilt to feel more credible and more structured from the first screen.',
      },
      {
        value: 'Clearer mobile inquiry path',
        label: 'for fast contact decisions',
        detail: 'The layout and contact flow were designed so mobile users could reach out without friction.',
      },
      {
        value: 'Low-maintenance delivery',
        label: 'without platform overhead',
        detail: 'The implementation gave the client a practical sales asset without introducing unnecessary maintenance burden.',
      },
    ],
    problem:
      'The agency needed a stronger digital presence and a clearer inquiry path because prospective customers were not getting enough structure, trust signals, or fast contact options.',
    approach:
      'I treated the site as an operational sales asset rather than a simple brochure, prioritizing mobile clarity, fast loading, direct contact paths, and maintainability.',
    solution:
      'Delivered a static business website with clear service sections, trust-building content, responsive layouts, and contact flows designed to turn interest into real inquiries.',
    outcome:
      'The business gained a more credible online presence and a smoother path from first visit to direct inquiry, especially for mobile users comparing providers and reaching out quickly.',
    features: [
      'Lead-focused structure',
      'Mobile-first responsive layout',
      'Low-maintenance implementation',
      'Clear contact and inquiry paths',
    ],
    results: [
      'Stronger first impression for new visitors',
      'Simpler inquiry path for mobile users',
      'More business value than a basic brochure site',
    ],
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
    image: '/assets/images/travel-agency.png',
    alt: 'Travel agency website showing service sections and contact flow',
    referenceLabel: 'Live reference',
    referenceHref: 'https://blessedjourneyglobal.com',
    referenceText: 'blessedjourneyglobal.com',
    referenceExternal: true,
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery and workflow review',
    description:
      'We start with the business problem, the current process, and the point where spreadsheets, inboxes, or disconnected tools are creating friction.',
  },
  {
    number: '02',
    title: 'Scope, architecture, and delivery plan',
    description:
      'I translate the workflow into a practical system shape, define the first useful scope, and outline how the work will be delivered in sensible milestones.',
  },
  {
    number: '03',
    title: 'Build the core workflow first',
    description:
      'The first priority is the part of the system that removes the biggest operational pain, not padding the project with low-value extras.',
  },
  {
    number: '04',
    title: 'Review, refine, and test',
    description:
      'As the system takes shape, we review it against real use cases, tighten edge cases, and make sure the workflow is clear for the people actually using it.',
  },
  {
    number: '05',
    title: 'Launch and support',
    description:
      'After launch, I stay available for fixes, refinements, and practical support so the handoff into real operations is stable and clear.',
  },
];

export const aboutPrinciples = [
  {
    title: 'Direct communication',
    description:
      'Clients work directly with the builder, which keeps decisions fast and grounded in real technical tradeoffs.',
  },
  {
    title: 'Operational thinking first',
    description:
      'I design around workflow, roles, handoffs, and data quality before worrying about cosmetic complexity.',
  },
  {
    title: 'Maintainable architecture',
    description:
      'Clear structure, sensible dependencies, and role-based security matter more than trend-driven choices.',
  },
  {
    title: 'Practical delivery',
    description:
      'I prefer milestones, clear priorities, and software that solves the immediate business problem before expanding scope.',
  },
];

export const contactChecklist = [
  'What the business does',
  'Where the current workflow is breaking down',
  'What tools or spreadsheets are involved today',
  'Who will use the system',
  'Any deadline, budget, or launch goal you already know',
];

export const contactExpectations = [
  'A reply with follow-up questions or next steps',
  'A recommendation on whether the project is a good fit',
  'A clearer idea of scope before any build starts',
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'The website gave us a much stronger first impression and made it easier for serious inquiries to reach us. The structure is clearer, the site feels more professional, and mobile visitors can act quickly.',
    author: 'Travel Agency Client',
    role: 'Owner',
    company: 'Travel and Tourism Business',
    headline: 'Stronger credibility and a clearer inquiry path',
    context: 'For a service business that needed its website to work more like a sales asset.',
    proof: [
      'Clearer structure for first-time visitors',
      'Faster mobile contact flow',
      'A more professional online presence',
    ],
  },
  {
    quote:
      'The management system replaced scattered admin work with one clear process. Member records, events, attendance, and communication are now much easier to handle, and the time savings have been significant.',
    author: 'Organization Client',
    role: 'Administrator',
    company: 'Private Membership Organization',
    headline: 'One system replaced scattered administrative work',
    context: 'For an organization managing records, events, attendance, and internal coordination.',
    proof: [
      'Significant time savings',
      'Less duplicated administrative work',
      'Clearer day-to-day coordination',
    ],
  },
  {
    quote:
      'Communication was direct, timelines were clear, and the work stayed grounded in what the business actually needed. That made the whole process feel reliable from start to finish.',
    author: 'Website Client',
    role: 'Business Owner',
    company: 'Service Business',
    headline: 'Direct communication and practical delivery built trust',
    context: 'For a client who needed clarity, reliability, and a project grounded in real business needs.',
    proof: [
      'Direct access to the builder',
      'Clear scope and timelines',
      'Decisions tied to practical business value',
    ],
  },
];

export const insights: InsightArticle[] = [
  {
    slug: 'when-spreadsheets-become-the-bottleneck',
    category: 'Operations',
    title: 'When Spreadsheets Stop Being a Tool and Start Being the Bottleneck',
    summary:
      'Spreadsheets are useful until they become the place where core operations, approvals, and handoffs quietly break down.',
    readingTime: '4 min read',
    audience: 'For teams managing important workflows in sheets, inboxes, and manual follow-up.',
    takeaways: [
      'Repeated copy-paste work is usually a systems problem, not a staff problem',
      'If reporting depends on one careful person, the workflow is already fragile',
      'A custom system should remove friction before it adds features',
    ],
    intro:
      'Most businesses do not wake up one day and decide they need custom software. The usual pattern is slower: spreadsheets start as a practical fix, then more people depend on them, and eventually important work is being coordinated through tabs, inboxes, and memory.',
    sections: [
      {
        title: 'The spreadsheet itself is usually not the real problem',
        paragraphs: [
          'The issue is rarely that a spreadsheet exists. The issue is that it becomes the unofficial system for approvals, status tracking, reporting, and handoff between people who need different levels of visibility.',
          'That is when simple updates start creating operational risk. One wrong edit, one missed note, or one delayed handoff can affect quoting, scheduling, reporting, or customer follow-up.',
        ],
      },
      {
        title: 'Three signs the workflow has outgrown the tool',
        paragraphs: [
          'If staff are re-entering the same information in multiple places, the workflow is already wasting time. If managers cannot trust the numbers without checking manually, reporting is already too fragile. If important context only lives in one person\'s head, the system is already underbuilt.',
          'Those are the moments when a business should stop asking for a prettier spreadsheet and start defining the workflow the software actually needs to support.',
        ],
      },
      {
        title: 'What a better replacement looks like',
        paragraphs: [
          'A useful replacement is not bigger for the sake of being bigger. It gives each role clearer visibility, preserves business rules in one place, and reduces the number of manual steps needed to keep work moving.',
          'That often means a focused internal tool, not a giant platform. The best first version is usually the one that removes the most painful handoff or reporting gap first.',
        ],
      },
    ],
  },
  {
    slug: 'why-most-quote-forms-create-bad-leads',
    category: 'Lead Flow',
    title: 'Why Most Quote Forms Create Bad Leads',
    summary:
      'A generic contact form may capture interest, but it rarely gives the business enough context to quote, prioritize, or route the request well.',
    readingTime: '3 min read',
    audience: 'For service businesses that get inquiries but not enough useful lead information.',
    takeaways: [
      'More submissions do not matter if the team still has to restart the conversation manually',
      'Lead quality improves when the workflow collects context before contact details',
      'Estimator and intake tools work best when they support the office team after submission',
    ],
    intro:
      'A lot of websites claim to generate leads, but what they actually generate is inbox traffic. If every new inquiry still requires the team to ask the same basic questions, the form is not doing enough work.',
    sections: [
      {
        title: 'The problem with generic forms',
        paragraphs: [
          'Most quote forms are built to be short, not useful. They ask for a name, phone number, and message, then leave the office team to discover scope, urgency, location, and fit later.',
          'That creates friction for both sides. The customer has not been guided well, and the team still has to do manual intake before they can judge whether the opportunity is serious.',
        ],
      },
      {
        title: 'What a better lead flow does',
        paragraphs: [
          'A stronger lead flow collects practical context before the final submission. That could mean service type, scope signals, location, project timing, or a guided estimate path that gives the visitor a clearer next step.',
          'The key is not complexity. It is usefulness. The workflow should reduce guesswork, not make the visitor fill out a mini application.',
        ],
      },
      {
        title: 'Why this matters operationally',
        paragraphs: [
          'The website should not stop helping the moment the lead is captured. A better tool improves the handoff into the office process by sending more structured information, clearer qualification context, and better routing signals.',
          'That is when a website starts acting like an operational asset instead of a digital brochure with a submit button.',
        ],
      },
    ],
  },
  {
    slug: 'internal-tools-vs-forcing-your-workflow-into-saas',
    category: 'Systems',
    title: 'Internal Tools vs Forcing Your Workflow Into Off-the-Shelf SaaS',
    summary:
      'Sometimes the right move is buying software. Sometimes the business keeps paying for compromises because the workflow never really fits the product.',
    readingTime: '4 min read',
    audience: 'For teams deciding whether to keep bending process around a generic tool.',
    takeaways: [
      'Buying software is efficient until the workflow mismatches start multiplying',
      'Workarounds, shadow processes, and duplicate entry are hidden software costs',
      'A focused internal tool can be smaller and more useful than a broad platform',
    ],
    intro:
      'Off-the-shelf products are often the right starting point. They are cheaper to adopt quickly and can solve a lot of common needs. The problem starts when the team has to keep inventing side processes just to make the product usable.',
    sections: [
      {
        title: 'The hidden cost of mismatch',
        paragraphs: [
          'When a system does not fit the workflow, the gap gets filled with spreadsheets, messages, manual approvals, and side notes. That may feel manageable at first, but it slowly turns the software into just one part of a much messier system.',
          'At that stage, the company is paying not only for the tool but for the friction around the tool.',
        ],
      },
      {
        title: 'When a custom internal tool starts making sense',
        paragraphs: [
          'The case for custom work becomes stronger when the workflow itself is a meaningful part of the business. That includes quoting logic, approvals, internal coordination, reporting rules, or staff roles that do not map cleanly to a generic product.',
          'In those cases, a focused internal system can remove more friction than another year of compromises around a product that never really fit.',
        ],
      },
      {
        title: 'The right question to ask',
        paragraphs: [
          'The better question is not “can SaaS do this?” The better question is “how much operational friction are we still carrying because the software does not match how the business actually works?”',
          'That framing usually leads to better decisions than comparing feature checklists alone.',
        ],
      },
    ],
  },
  {
    slug: 'what-to-define-before-building-a-custom-system',
    category: 'Planning',
    title: 'What to Define Before Building a Custom System',
    summary:
      'The best custom software projects start with workflow clarity, not a long wish list of features.',
    readingTime: '3 min read',
    audience: 'For founders and operators preparing to scope custom software for the first time.',
    takeaways: [
      'You do not need perfect requirements, but you do need a clear workflow problem',
      'Roles, handoffs, and reporting needs shape better systems than feature lists',
      'The first version should solve the hardest operational pain first',
    ],
    intro:
      'Many teams hesitate to start a software project because they think they need fully documented requirements before talking to a developer. In practice, that is not usually true.',
    sections: [
      {
        title: 'Start with the current process',
        paragraphs: [
          'A useful starting point is simple: how does the work happen today, where does it slow down, and where does information get lost, re-entered, or checked manually?',
          'That tells you more about the real shape of the system than jumping straight into interface ideas or feature wish lists.',
        ],
      },
      {
        title: 'Define who needs what',
        paragraphs: [
          'Good system design depends heavily on role clarity. Who enters information? Who reviews it? Who approves it? Who needs a dashboard? Who only needs notifications? These questions matter because they shape permissions, interfaces, and reporting from the start.',
          'Without that clarity, projects often collect features before they understand workflow.',
        ],
      },
      {
        title: 'Scope the first useful version',
        paragraphs: [
          'The first version should not try to solve everything. It should remove the biggest operational bottleneck first and create a cleaner path for the next improvement.',
          'That approach usually creates better outcomes than trying to launch a perfect system all at once.',
        ],
      },
    ],
  },
];
