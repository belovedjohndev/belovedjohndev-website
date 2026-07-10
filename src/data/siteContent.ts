export interface RelatedLink {
  href: string;
  label: string;
}

export interface ServicePage {
  slug: string;
  title: string;
  summary: string;
  heroTitle: string;
  heroSupportingCopy: string;
  businessProblemTitle: string;
  businessProblemIntro: string;
  businessProblemBody: string;
  problemStatement: string;
  audienceSummary: string;
  signsYouNeedIt: string[];
  deliverables: string[];
  firstPhase: string[];
  firstPhaseNote: string;
  useCases: string[];
  techApproach: string[];
  startingScope: string;
  pricingGuidanceTitle: string;
  pricingGuidanceIntro: string;
  pricingGuidancePoints: string[];
  pricingGuidanceClosing: string;
  previewTag: string;
  previewSummary: string;
  previewDeliverables: string[];
  decisionSituation: string;
  decisionOutcome: string;
  decisionBestFit: string;
  ctaTitle: string;
  ctaCopy: string;
  relatedCaseStudySlug: string;
  relatedIndustryLink?: RelatedLink;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  projectOverview: string[];
  industry: string;
  companySize: string;
  projectType: string;
  goal: string[];
  homepageLabel?: string;
  homepageSummary?: string;
  problemOneLiner: string;
  outcomeOneLiner: string;
  homepageBuilt?: string[];
  homepageOutcome?: string;
  clientType: string;
  serviceLine: string;
  proof: string[];
  businessProblem: string;
  oldWorkflow: string[];
  scopeDelivered: string[];
  keyFeatures: string[];
  architectureSummary: string;
  technicalShape: string[];
  constraints: string[];
  keyDecisions: string[];
  outcomes: string[];
  demonstrates: string[];
  image: string;
  alt: string;
  screenshots?: CaseStudyScreenshot[];
  referenceLabel: string;
  referenceHref?: string;
  referenceText: string;
  referenceExternal?: boolean;
  relatedIndustryLink?: RelatedLink;
  confidential?: boolean;
}

export interface CaseStudyScreenshot {
  image: string;
  alt: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
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

export interface ContactProjectType {
  title: string;
  summary: string;
}

export interface ContactMethod {
  label: string;
  href: string;
  value: string;
  description: string;
  external?: boolean;
}

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactPageContent {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    support: string;
    responseTitle: string;
    responseBody: string;
    responsePoints: string[];
  };
  bestFit: {
    eyebrow: string;
    title: string;
    intro: string;
    projectTypes: ContactProjectType[];
    supportTitle: string;
    supportItems: string[];
  };
  checklist: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  inquiryForm: {
    eyebrow: string;
    title: string;
    intro: string;
    deliveryNote: string;
    projectTypeOptions: readonly ContactFormOption[];
    timelineOptions: readonly ContactFormOption[];
    budgetRangeOptions: readonly ContactFormOption[];
  };
  expectation: {
    eyebrow: string;
    title: string;
    copy: string;
    support: string;
  };
  fitReassurance: {
    eyebrow: string;
    title: string;
    copy: string;
  };
  nextSteps: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  alternateContact: {
    eyebrow: string;
    title: string;
    intro: string;
    methods: ContactMethod[];
  };
}

export interface WhatIBuildHighlight {
  title: string;
  description: string;
}

export interface WorkingModelItem {
  title: string;
  description: string;
}

export interface IntentLandingPage {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  fitTitle: string;
  fitIntro: string;
  fitItems: string[];
  buildTitle: string;
  buildItems: string[];
  proofTitle: string;
  proofBody: string;
  ctaTitle: string;
  ctaCopy: string;
  relatedServiceSlug: string;
}

export const contactLinks = {
  email: 'support@belovedjohndev.com',
  mailto:
    'mailto:support@belovedjohndev.com?subject=Project%20Inquiry%20from%20Beloved%20John%20Dev',
  whatsapp:
    'https://wa.me/855963885424?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20business%20systems%20project.',
  telegram: 'https://t.me/belovedjohndev',
  estimator:
    'https://wa.me/855963885424?text=Hi%2C%20I%27d%20like%20to%20discuss%20the%20home%20service%20estimator%20offer.',
  github: 'https://github.com/belovedjohndev',
  demo: 'https://demo.belovedjohndev.com/',
};

export const ctaLabels = {
  primary: 'Start a Project Conversation',
  secondary: 'View Case Studies',
};

export const primaryCtaHref = '/contact#project-inquiry';

export const sitePositioning = {
  eyebrow: 'Custom business systems',
  title: 'Your workflow has outgrown the tools holding it together.',
  lead:
    'I build internal systems, client portals, estimator tools, and workflow automation for service companies that need software built around real operations — not templates.',
  support:
    'The site is intentionally positioned around operational software work, not generic brochure-site projects.',
};

export const operationalSymptoms = [
  'Quotes still go out by email or phone',
  'Staff re-enter the same information in multiple places',
  'Job tracking lives in a spreadsheet nobody trusts',
  'The contact form does not collect enough to qualify a lead',
  'Reporting requires someone to manually pull and compile',
  'Administrative work grows every time you add a client',
];

export const whyWorkWithMe = [
  {
    title: 'Direct builder access',
    description:
      'You work directly with the person designing and building the system, which keeps decisions fast and grounded in the actual technical tradeoffs.',
  },
  {
    title: 'Workflow-first scoping',
    description:
      'Projects are scoped around the workflow problem first, not around unnecessary features that make the build larger without making it more useful.',
  },
  {
    title: 'Maintainability and security in mind',
    description:
      'Systems are built with maintainability, security, and long-term use in mind so the software still helps the business after launch.',
  },
  {
    title: 'Serious custom work without agency overhead',
    description:
      'This is a good fit for companies that need serious custom work without the extra layers and overhead of a large agency.',
  },
  {
    title: 'Operations-first focus',
    description:
      'The focus is on systems that support operations, not just websites that look good but stay disconnected from how the business actually runs.',
  },
];

export const heroProofPoints = [
  'Custom-coded systems',
  'Direct builder access',
  'Architecture-first',
  'Production delivery',
];

export const whatIBuildHighlights: WhatIBuildHighlight[] = [
  {
    title: 'Custom Business Systems',
    description:
      'Internal dashboards, admin tools, job tracking systems, inventory tools, reporting systems, and workflow platforms.',
  },
  {
    title: 'Client Portals & Estimator Tools',
    description:
      'Guided quote flows, booking request systems, customer portals, lead capture tools, and intake systems.',
  },
  {
    title: 'Automation & Integrations',
    description:
      'Email notifications, CRM sync, reporting automation, data pipelines, and workflow tools that reduce copy-paste work.',
  },
];

export const workingModelItems: WorkingModelItem[] = [
  {
    title: 'Direct technical owner',
    description: 'You work directly with the person planning and building the system.',
  },
  {
    title: 'Scoped first phase',
    description: 'The first build focuses on the highest-value workflow before expanding.',
  },
  {
    title: 'Production-minded delivery',
    description:
      'Data structure, permissions, maintainability, and handoff are considered from the start.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery and workflow review',
    description:
      'We look at how the business currently operates, who is involved, and where the main friction points are. A full spec is not required.',
  },
  {
    number: '02',
    title: 'Scope and architecture',
    description:
      'I recommend a practical first phase centered on the highest-value workflow, then define the structure needed to support it.',
  },
  {
    number: '03',
    title: 'Build the core system first',
    description:
      'The first version focuses on the most important operational problem so the system becomes useful before it grows wider.',
  },
  {
    number: '04',
    title: 'Refine and expand',
    description:
      'After the core system is in use, we review real usage and decide what to improve next based on actual friction.',
  },
];

export const nextStepTimeline = processSteps.map((step) => ({
  step: step.number,
  title: step.title,
  description: step.description,
}));

export const servicePages: ServicePage[] = [
  {
    slug: 'custom-business-systems',
    title: 'Custom Business Systems',
    summary:
      'Operations are being managed through spreadsheets, inboxes, and manual coordination.',
    heroTitle: 'Custom internal systems built around how your business actually operates.',
    heroSupportingCopy:
      'When important workflows are managed in spreadsheets, inboxes, or disconnected tools, mistakes increase, reporting becomes difficult, and growth creates more administrative work instead of less. Custom internal systems replace manual coordination with structured workflows and clear visibility.',
    businessProblemTitle: 'When operations depend on spreadsheets and manual coordination',
    businessProblemIntro:
      'Many growing companies reach a point where spreadsheets, shared drives, and inbox threads are no longer enough to manage day-to-day operations. Information gets duplicated, tasks get missed, and reporting requires manual effort every week.',
    businessProblemBody:
      'A custom business system centralizes your workflow so your team can track work, manage data, and see what is happening in the business without relying on manual processes.',
    problemStatement:
      'Operations are being managed through spreadsheets, inboxes, and manual coordination.',
    audienceSummary:
      'Companies that need clearer operations, better visibility, and less dependency on manual workarounds.',
    signsYouNeedIt: [
      'A spreadsheet is acting like a CRM, tracker, approval queue, or reporting system.',
      'Important work slows down whenever one careful staff member is unavailable.',
      'Managers cannot get reliable visibility without manual checking.',
      'The workflow has business-specific rules that generic software does not fit well.',
    ],
    deliverables: [
      'Internal dashboards',
      'Admin tools',
      'Job tracking systems',
      'Reporting tools',
      'Workflow systems designed around how your business actually operates',
    ],
    firstPhase: [
      'Workflow review and scope definition',
      'Core data model and permissions design',
      'Build of the primary staff workflow',
      'Deployment of a first usable internal release',
      'Basic reporting',
      'Documentation and handoff',
    ],
    firstPhaseNote:
      'Most projects start with a focused first phase that solves the most important workflow problem, then expand later if needed.',
    useCases: [
      'Job tracking systems',
      'Internal CRM for managing clients and projects',
      'Inventory tracking system',
      'Staff task tracking dashboard',
      'Reporting and analytics dashboard',
      'Membership or records management system',
    ],
    techApproach: [
      'Systems are designed around your workflow, not forced into a template',
      'Database structure is planned first to protect data integrity',
      'Role-based access and permissions are considered early',
      'Systems are built for maintainability and future expansion',
      'Security and data protection are considered in the architecture',
      'The goal is long-term operational use, not a short-term prototype',
    ],
    startingScope: 'Typical first phase: workflow review, core model, primary admin flow, and first usable release.',
    pricingGuidanceTitle: 'Engagement / Pricing Guidance',
    pricingGuidanceIntro:
      'Typical first phases for custom business systems start in the $3,000 - $10,000 range depending on scope and complexity.',
    pricingGuidancePoints: [
      'Smaller internal tools may be less',
      'Larger multi-role systems may be more',
    ],
    pricingGuidanceClosing:
      'After the first phase, many clients continue with additional phases as the system becomes part of daily operations.',
    previewTag: 'Internal Systems',
    previewSummary:
      'When operations are managed through spreadsheets, inboxes, and manual coordination, the team needs a real system, not another workaround.',
    previewDeliverables: [
      'Internal dashboards',
      'Job and client tracking',
      'Admin tools and reporting',
      'Workflow platforms',
    ],
    decisionSituation:
      'The internal team is relying on spreadsheets, inboxes, and manual coordination to keep important work moving.',
    decisionOutcome:
      'Better visibility, clearer workflows, less manual admin, and more reliable day-to-day operations.',
    decisionBestFit:
      'Service companies, agencies, and operations-heavy teams that need a structured internal system around real business rules.',
    ctaTitle: 'If your business is running on spreadsheets and workarounds, we should talk.',
    ctaCopy:
      'Start with the workflow problem and the main operational friction. From there, we can define the right first phase and whether the system should expand over time.',
    relatedCaseStudySlug: 'church-management-system',
    relatedIndustryLink: {
      href: '/industries/schools-nonprofits/',
      label: 'school, ministry, and nonprofit systems',
    },
  },
  {
    slug: 'client-portals-estimator-tools',
    title: 'Client Portals & Estimator Tools',
    summary:
      'A contact form is not giving your team enough information to quote, qualify, or move quickly.',
    heroTitle: 'Client portals and estimator tools that capture better information and reduce back-and-forth.',
    heroSupportingCopy:
      'Instead of relying on basic contact forms, structured intake tools and portals help you collect the right information, qualify leads, and connect customer input directly to your internal workflow.',
    businessProblemTitle: 'When the website creates interest but not enough usable information',
    businessProblemIntro:
      'Many service companies rely on contact forms that do not collect enough detail for quoting, routing, or qualifying a lead properly. The team then has to follow up just to gather basic information before real work can begin.',
    businessProblemBody:
      'Client portals and estimator tools create a clearer path for the customer while giving your team more structured information to work with from the start.',
    problemStatement:
      'A contact form is not giving your team enough information to quote, qualify, or move quickly.',
    audienceSummary:
      'Service companies that want better leads, better information, and less back-and-forth before a project starts.',
    signsYouNeedIt: [
      'Quote requests arrive without the details needed to route or price the work.',
      'The team repeats the same early-stage questions in every sales conversation.',
      'Customers need a clearer self-service path for estimates, records, or project visibility.',
      'Your site gets inquiries, but does not help operations after submission.',
    ],
    deliverables: [
      'Estimator tools',
      'Intake flows',
      'Booking flows',
      'Client portals that capture structured information',
      'Workflow-connected lead capture',
    ],
    firstPhase: [
      'Intake or estimator flow',
      'Pricing or logic configuration',
      'Lead capture and database',
      'Admin view for submissions',
      'Email notifications',
      'Basic analytics',
      'Deployment to website',
    ],
    firstPhaseNote:
      'The first phase is usually designed to improve how leads or customer requests enter the business before expanding into deeper portal functionality.',
    useCases: [
      'Estimate tools',
      'Guided quote forms',
      'Client portals',
      'Booking flows',
      'Project intake systems',
      'Lead qualification flows',
      'Customer dashboards',
      'Document upload portals',
    ],
    techApproach: [
      'Customer-facing tools are designed to connect directly to your internal workflow, not sit alongside it',
      'Form logic, data structure, and lead routing are planned before interface polish',
      'Systems are built so information can be stored, reviewed, and expanded over time',
      'Maintainability matters because these tools often become part of the daily sales process',
      'Analytics, notifications, and admin visibility are treated as part of the system, not afterthoughts',
      'The goal is better information and less back-and-forth before work starts',
    ],
    startingScope: 'Typical first phase: intake mapping, customer flow, admin review, and launch support.',
    pricingGuidanceTitle: 'Engagement / Pricing Guidance',
    pricingGuidanceIntro:
      'Typical first phases for client portals and estimator tools often start in the $2,000 - $8,000 range depending on logic, admin requirements, and integration needs.',
    pricingGuidancePoints: [
      'Smaller intake or estimator tools may be less',
      'Portal builds with more roles, visibility, or workflow logic may be more',
    ],
    pricingGuidanceClosing:
      'Many of these projects begin with a focused intake or estimator system, then expand into a broader portal or workflow layer later.',
    previewTag: 'Client-Facing Tools',
    previewSummary:
      'When a contact form is not giving your team enough information to quote, qualify, or move quickly, the intake path needs to do more work.',
    previewDeliverables: [
      'Guided estimator flows',
      'Intake and booking systems',
      'Client dashboards',
      'Lead qualification tools',
    ],
    decisionSituation:
      'The website or intake process does not collect enough useful information before follow-up.',
    decisionOutcome:
      'Better lead context, cleaner qualification, less back-and-forth, and a better client experience.',
    decisionBestFit:
      'Service businesses that need stronger quote requests, guided intake, client portals, or customer-facing workflow tools.',
    ctaTitle: 'If your website needs to collect better information and reduce intake friction, we should talk.',
    ctaCopy:
      'Bring the current lead flow, quote process, or client handoff. From there, we can define the right first phase for a better intake or portal system.',
    relatedCaseStudySlug: 'estimate-engine',
    relatedIndustryLink: {
      href: '/industries/hvac/',
      label: 'HVAC estimator and lead intake systems',
    },
  },
  {
    slug: 'saas-mvp-development',
    title: 'SaaS MVP Development',
    summary:
      'You need a focused first version of a SaaS product or productized workflow, not a vague full-platform build.',
    heroTitle: 'SaaS MVP development for founders and service businesses that need a focused first version.',
    heroSupportingCopy:
      'A useful SaaS MVP should prove the core workflow, reduce launch risk, and create a maintainable product foundation without pretending the first release needs every future feature. I build focused React and TypeScript MVPs around the first workflow that needs to work reliably.',
    businessProblemTitle: 'When the product idea is clear, but the first version is too broad',
    businessProblemIntro:
      'Founders, agencies, and service businesses often know the workflow they want to productize, but the first build can expand too quickly into dashboards, roles, billing, settings, and edge cases before the core value has been validated.',
    businessProblemBody:
      'A focused SaaS MVP defines the smallest useful product slice, protects the core data model, and ships the first workflow in a way that can support learning, demos, early users, and future expansion.',
    problemStatement:
      'You need a focused first version of a SaaS product or productized workflow, not a vague full-platform build.',
    audienceSummary:
      'Founders, agencies, and service businesses that need a scoped SaaS MVP with clear product boundaries and maintainable architecture.',
    signsYouNeedIt: [
      'The product idea is real, but the first version keeps expanding before anything ships.',
      'You need a clickable, usable MVP for demos, pilots, or early customer validation.',
      'A service workflow could become a repeatable product if the first version is scoped carefully.',
      'You need technical ownership that can push back on unnecessary features and protect the product foundation.',
    ],
    deliverables: [
      'SaaS MVP scoping and feature prioritization',
      'React and TypeScript product interfaces',
      'User dashboards and admin workflows',
      'Authentication-ready application structure',
      'Database-backed product workflows',
      'Launch-ready first release for validation and iteration',
    ],
    firstPhase: [
      'Product workflow review and MVP scope definition',
      'Core user roles, data model, and permission boundaries',
      'Build of the primary product workflow',
      'Admin or operator view for managing the first release',
      'Deployment of a usable MVP',
      'Technical notes for iteration, handoff, and future phases',
    ],
    firstPhaseNote:
      'The first phase is intentionally scoped around the workflow that proves the product direction. Billing, advanced automation, and secondary roles can be added later when they are justified.',
    useCases: [
      'SaaS MVP for a productized service workflow',
      'Founder MVP for customer demos or pilot users',
      'Agency-built MVP for a client product idea',
      'Internal tool being turned into a customer-facing product',
      'Niche portal or dashboard product',
      'Resource platform, workflow app, or lightweight multi-user SaaS',
    ],
    techApproach: [
      'Scope starts with the core product workflow, not a long feature wishlist',
      'React and TypeScript are used for maintainable product interfaces',
      'Data modeling and role boundaries are planned before screens multiply',
      'The first release is built to support demos, pilots, and product learning without fake scale assumptions',
      'Architecture leaves room for later billing, onboarding, admin controls, and integrations',
      'The goal is a useful MVP foundation that can be improved responsibly after real feedback',
    ],
    startingScope: 'Typical first phase: MVP scope, core workflow, user/admin views, deployment, and iteration notes.',
    pricingGuidanceTitle: 'Engagement / Pricing Guidance',
    pricingGuidanceIntro:
      'Typical first phases for SaaS MVP development often start in the $4,000 - $12,000 range depending on user roles, workflow complexity, and launch requirements.',
    pricingGuidancePoints: [
      'Lean MVPs with one core workflow may be less',
      'Products with multiple roles, dashboards, or complex data rules may be more',
    ],
    pricingGuidanceClosing:
      'The first phase should be scoped tightly enough to launch and learn, then expanded only when the product direction is clearer.',
    previewTag: 'SaaS MVPs',
    previewSummary:
      'When a product idea or service workflow needs a focused first version, the MVP should prove the core workflow before becoming a full platform.',
    previewDeliverables: [
      'React TypeScript MVPs',
      'User and admin workflows',
      'Product dashboards',
      'Launch-ready first releases',
    ],
    decisionSituation:
      'A founder, agency, or service business needs the first usable version of a SaaS or productized workflow.',
    decisionOutcome:
      'A focused MVP with clearer scope, lower launch risk, and a maintainable foundation for product validation.',
    decisionBestFit:
      'Founders, agencies, and service businesses that need a practical SaaS MVP or custom software MVP before committing to a larger platform.',
    ctaTitle: 'If you need a focused SaaS MVP instead of a vague full-platform build, we should talk.',
    ctaCopy:
      'Bring the product idea, the first workflow that must work, and what you need to validate. From there, we can define a practical MVP scope and build path.',
    relatedCaseStudySlug: 'readyfolio-resource-portal',
  },
  {
    slug: 'automation-integrations',
    title: 'Automation & Integrations',
    summary:
      'Your team is spending too much time moving information between tools or repeating administrative work.',
    heroTitle: 'Automation and integrations that reduce manual work and connect your tools.',
    heroSupportingCopy:
      'If your team is copying data between systems, sending the same emails repeatedly, or manually compiling reports, automation can save time and reduce errors.',
    businessProblemTitle: 'When good tools still create too much manual work',
    businessProblemIntro:
      'A lot of teams already have useful software in place, but the workflow between those tools still depends on copy-paste work, repeated admin tasks, and manual follow-up.',
    businessProblemBody:
      'Automation and integrations reduce that operational drag by moving information more reliably, keeping systems in sync, and removing repetitive handling from the team.',
    problemStatement:
      'Your team is spending too much time moving information between tools or repeating administrative work.',
    audienceSummary:
      'Teams losing time to repetitive admin work and disconnected software.',
    signsYouNeedIt: [
      'Copy-paste between CRM, email, and spreadsheets',
      'Manual lead assignment',
      'Manual reporting',
      'Repetitive admin tasks',
      'Tools that do not talk to each other',
      'Missed follow-ups or notifications',
    ],
    deliverables: [
      'Integrations',
      'Automated notifications',
      'Reporting pipelines',
      'Workflow automation that reduces manual handling',
      'System sync tooling',
    ],
    firstPhase: [
      'Review current tools',
      'Identify repetitive processes',
      'Design automation workflow',
      'Build integrations',
      'Testing and monitoring',
      'Documentation',
    ],
    firstPhaseNote:
      'The first phase usually focuses on one or two high-friction processes so the business gets a practical win before expanding automation further.',
    useCases: [
      'CRM integrations',
      'Email automation',
      'Lead routing systems',
      'Automated reports',
      'Data sync between systems',
      'Notification systems',
      'API integrations',
      'Scheduled data processing',
    ],
    techApproach: [
      'Automation is designed around reliability first, not just speed',
      'Integrations are planned around system boundaries, failure cases, and traceability',
      'The workflow is reviewed before building so the automation supports the real process',
      'Monitoring and basic safeguards are important when information moves between systems',
      'Maintainability matters because automation often becomes invisible but business-critical',
      'The goal is to reduce manual work without creating a brittle hidden layer',
    ],
    startingScope: 'Typical first phase: tool audit, one high-value integration path, rollout, and monitoring notes.',
    pricingGuidanceTitle: 'Engagement / Pricing Guidance',
    pricingGuidanceIntro:
      'Typical first phases for automation and integrations often start in the $1,500 - $6,000 range depending on the number of systems involved and the reliability requirements.',
    pricingGuidancePoints: [
      'Simple automation layers may be less',
      'Multi-system integrations or more sensitive workflows may be more',
    ],
    pricingGuidanceClosing:
      'Many clients start with one repetitive or error-prone workflow, then add more automation in later phases once the first integration proves useful.',
    previewTag: 'Workflow Automation',
    previewSummary:
      'When the tools exist but the movement between them is still manual, automation can reduce repeated handling and missed follow-up.',
    previewDeliverables: [
      'CRM and email integrations',
      'Automated notifications and reports',
      'Data sync and pipeline tools',
      'Repetitive admin workflow automation',
    ],
    decisionSituation:
      'The tools exist, but staff still move information manually between systems.',
    decisionOutcome:
      'Less repetitive admin work, fewer errors, and more reliable handoffs and reporting.',
    decisionBestFit:
      'Teams that already use useful tools but still rely on copy-paste work, manual updates, or fragile reporting handoffs.',
    ctaTitle: 'If your team is stuck doing repetitive admin work between tools, we should talk.',
    ctaCopy:
      'Bring the current systems, the repeated task, and where information keeps getting stuck. From there, we can define a practical first automation phase.',
    relatedCaseStudySlug: 'multi-tenant-estimate-engine',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'estimate-engine',
    title: 'Indoor Comfort Team HVAC Estimate Engine',
    summary:
      'A guided HVAC estimator flow that captures homeowner contact details, system context, package interest, and submission details before office follow-up.',
    projectOverview: [
      'Indoor Comfort Team needed an estimate path that could sit inside an existing HVAC website and guide homeowners through the information the office team needs before follow-up.',
      'The project was shaped as a lead-first estimator, not a generic quote form. The workflow captures contact details, system type, home size, heating fuel, package interest, and submission status in a sequence that is easier for homeowners to complete and easier for staff to review.',
    ],
    industry: 'HVAC / Home Services',
    companySize: 'Local HVAC contractor',
    projectType: 'HVAC estimator and lead intake workflow',
    goal: [
      'Collect homeowner contact details before the estimator logic begins',
      'Guide visitors through HVAC system type, sizing, and fuel configuration',
      'Present package options in a structured way without hiding follow-up behind a generic form',
      'Submit qualified estimate requests to the HVAC team for review',
      'Integrate the estimator experience with the existing Indoor Comfort Team website',
    ],
    homepageLabel: 'HVAC Estimator / Lead Intake System',
    homepageSummary:
      'Built a guided HVAC estimate flow for Indoor Comfort Team to collect better job context before office follow-up.',
    problemOneLiner:
      'A standard website form could not capture the HVAC-specific context needed before a useful estimate conversation.',
    outcomeOneLiner:
      'The finished estimator guides homeowners through contact capture, system configuration, estimate options, and submission confirmation before handoff.',
    homepageBuilt: [
      'Guided estimate flow',
      'Structured lead capture',
      'System type and sizing steps',
      'Package option presentation',
      'Website-integrated estimate entry point',
    ],
    homepageOutcome:
      'Turned the HVAC estimate request path into a guided workflow that collects contact details, system context, and package interest before the office team follows up.',
    clientType: 'HVAC contractor handling estimate requests and office-based lead qualification',
    serviceLine: 'Client Portals & Estimator Tools',
    proof: ['Guided HVAC estimator', 'Structured lead capture', 'Website-integrated workflow'],
    businessProblem:
      'HVAC estimate requests need more context than a name, phone number, and message. Without guided intake, staff often have to repeat the same questions about system type, home size, configuration, and customer expectations before they can move the lead forward.',
    oldWorkflow: [
      'Homeowners could reach the website, but the estimate path did not walk them through HVAC-specific details.',
      'The office team still needed to ask repeated intake questions after a request came in.',
      'Package expectations and equipment context were not captured in a structured sequence before follow-up.',
    ],
    scopeDelivered: [
      'A focused HVAC estimate entry experience on the existing website',
      'Lead-first contact capture before system configuration',
      'System type, home size, and heating fuel selection steps',
      'Package option presentation for homeowner review',
      'Submission confirmation and business handoff messaging',
    ],
    keyFeatures: [
      'Website estimate entry page',
      'Contact information step',
      'System type selection',
      'Home size and tonnage selection',
      'Heating fuel configuration',
      'Estimated package option presentation',
      'Submission success state',
      'Lead handoff for office follow-up',
    ],
    architectureSummary:
      'The estimator was structured as a deterministic, step-based workflow that can live alongside an existing HVAC website while keeping business rules and submission handling maintainable.',
    technicalShape: [
      'Step-based frontend flow for contact capture and HVAC configuration',
      'Deterministic option logic based on selected system details',
      'Server-side validation for submitted customer details',
      'Clear submission state after the request is sent',
      'Integration path designed for the existing HVAC website',
      'Configuration kept maintainable so package and workflow changes do not require a redesign',
    ],
    constraints: [
      'The estimator needed to match the existing HVAC website instead of feeling like an unrelated app',
      'The workflow had to collect useful lead context without creating a long, confusing form',
      'Option presentation needed to guide the homeowner without promising a final installed price',
      'The handoff had to be clear so the business could follow up after submission',
    ],
    keyDecisions: [
      'Captured contact information early so the business had a reachable lead before deeper configuration.',
      'Split HVAC qualification into focused steps instead of one large form.',
      'Used package options to frame the next conversation without claiming the estimator replaces staff review.',
      'Kept the first release focused on estimate intake and handoff rather than CRM replacement, dispatching, or financing workflows.',
    ],
    outcomes: [
      'A clearer estimate request path for homeowners',
      'More structured system context before office follow-up',
      'A production-ready proof point for HVAC estimator and lead intake work',
    ],
    demonstrates: [
      'Ability to turn a contractor website CTA into a guided qualification workflow',
      'Careful separation between estimate guidance and final business confirmation',
      'Practical integration of customer-facing UX, business rules, validation, and handoff',
    ],
    image: '/images/industries/hvac/estimate-entry.webp',
    alt: 'Indoor Comfort Team HVAC estimate entry page',
    screenshots: [
      {
        image: '/images/industries/hvac/estimate-entry.webp',
        alt: 'Indoor Comfort Team HVAC estimate entry page',
        label: 'Estimator entry point on the HVAC website',
      },
      {
        image: '/images/industries/hvac/contact-step.webp',
        alt: 'Indoor Comfort Team estimator contact information step',
        label: 'Lead-first contact capture',
      },
      {
        image: '/images/industries/hvac/system-type-step.webp',
        alt: 'Indoor Comfort Team HVAC system type selection',
        label: 'System type selection',
      },
      {
        image: '/images/industries/hvac/system-size-step.webp',
        alt: 'Indoor Comfort Team system size selection',
        label: 'Home size and tonnage selection',
      },
      {
        image: '/images/industries/hvac/fuel-type-step.webp',
        alt: 'Indoor Comfort Team heating fuel type selection',
        label: 'Heating fuel configuration',
      },
      {
        image: '/images/industries/hvac/options-step.webp',
        alt: 'Indoor Comfort Team estimated package options',
        label: 'Package option presentation',
      },
      {
        image: '/images/industries/hvac/submission-success.webp',
        alt: 'Indoor Comfort Team estimate submission confirmation',
        label: 'Successful lead submission',
      },
    ],
    referenceLabel: 'Live demo',
    referenceHref: 'https://demo.belovedjohndev.com/',
    referenceText: 'Open the live estimate demo',
    referenceExternal: true,
    relatedIndustryLink: {
      href: '/industries/hvac/',
      label: 'Explore HVAC estimator and workflow solutions',
    },
  },
  {
    slug: 'agbi-academic-ministry-portal',
    title: 'AGBI Academic & Ministry Operations Portal',
    summary:
      'A custom internal portal for Abundant Grace Bible Institute to manage student records, academic terms, field ministry deployment, extension batches, graduation reviews, audit logs, and staff access.',
    projectOverview: [
      'AGBI Portal is a custom internal academic and ministry operations system for Abundant Grace Bible Institute. It helps staff manage student records, academic terms, field ministry deployment, extension program batches, graduation reviews, audit logs, and user access.',
      'The system is positioned as operational software, not a generic dashboard. It separates registry, academic setup, ministry workflows, extension attendance, graduation review, and administration into clear staff-facing areas.',
    ],
    industry: 'Bible Institute / Education / Ministry Administration',
    companySize: 'Small academic and ministry administration team',
    projectType: 'Academic administration and ministry workflow portal',
    goal: [
      'Centralize student registry records and academic stages',
      'Manage academic years and Year 1 semester terms',
      'Track Year 2 and Year 3 field study sessions',
      'Record ministry deployments and extension program batches',
      'Support manual graduation review and role-aware administration',
    ],
    homepageLabel: 'Internal Academic Operations System',
    homepageSummary:
      'Built a role-aware internal portal for academic records, ministry deployment, extension attendance, graduation review, audit logs, and staff administration.',
    problemOneLiner:
      'AGBI needed one structured system to manage academic records, ministry deployment, extension attendance, graduation review, and staff administration instead of relying on scattered manual records and disconnected workflows.',
    outcomeOneLiner:
      'Built a role-aware internal portal that centralizes student registry, academic setup, ministry workflows, graduation review, audit logs, and staff user management in one operational system.',
    homepageBuilt: [
      'Student registry and academic stage tracking',
      'Academic year and Year 1 semester setup',
      'Field ministry deployment records',
      'Extension batches with attendance workflow support',
      'Graduation review, audit logs, and staff administration',
    ],
    homepageOutcome:
      'Centralized academic records, ministry deployment, extension attendance, graduation review, audit logs, and staff administration in one role-aware internal portal.',
    clientType:
      'Bible institute staff managing academic records, field ministry, extension students, graduation review, and administrative access',
    serviceLine: 'Custom Business Systems',
    proof: [
      'Student registry',
      'Academic setup',
      'Field ministry tracking',
      'Extension batches',
      'Graduation reviews',
      'Audit logs',
      'User management',
      'Role-aware access',
    ],
    businessProblem:
      'AGBI manages more than a simple student list. The school has academic-year records, Year 1 terms, Year 2 and Year 3 field ministry workflows, extension batches with strict attendance requirements, and graduation review rules that require manual leadership approval. Without a structured internal system, these workflows are harder to track, audit, and manage consistently.',
    oldWorkflow: [
      'Student, academic, ministry, and graduation records could become separated across manual records or disconnected tracking methods.',
      'Field ministry deployment and extension attendance required clear status tracking after Year 1 training.',
      'Graduation could not be treated as automatic because leadership recommendation and approval were required.',
      'Administrative actions needed better traceability for accountability and review.',
      'Staff access needed to be controlled by role instead of handled informally.',
    ],
    scopeDelivered: [
      'Student registry with academic stage and deployment status tracking',
      'Academic setup for academic years and Year 1 semesters',
      'Field study session management for Year 2 and Year 3 students',
      'Ministry deployment records',
      'Extension program batch management',
      'Graduation review workflow with manual recommendation and approval steps',
      'Audit logs for administrative and registrar actions',
      'User management for staff accounts and access control',
      'Light and dark mode interface support',
    ],
    keyFeatures: [
      'Student registry',
      'Academic year setup',
      'Year 1 semester tracking',
      'Field study sessions',
      'Deployment records',
      'Extension program batches',
      'Graduation review queue',
      'Manual approval workflow',
      'Audit logs',
      'User management',
      'Role-aware administration',
      'Light/dark mode',
    ],
    architectureSummary:
      'AGBI Portal was structured as a role-aware internal operations system with separate workflow areas for registry, academics, ministry deployment, extension programs, graduation review, auditing, and staff administration. The system centralizes domain rules so academic and ministry records can be managed consistently from one portal.',
    technicalShape: [
      'ASP.NET Core Web API backend',
      'React/Vite frontend',
      'PostgreSQL database',
      'Entity-based data model for students, academic years, terms, deployments, field study sessions, extension batches, reviews, users, and audit logs',
      'Role-aware access for administrative and registrar workflows',
      'Manual graduation review state handling',
      'Audit logging for administrative actions',
      'Light/dark mode UI support',
    ],
    constraints: [
      'Graduation could not be automatic; it required manual recommendation and approval.',
      'Extension students needed strict attendance-day tracking before deployment.',
      'Year 2 and Year 3 field study workflows had different requirements from Year 1 academic tracking.',
      'The portal needed to remain understandable for non-technical staff.',
      'Sensitive student and staff records required role-aware access and audit visibility.',
    ],
    keyDecisions: [
      'Separated student registry, academic setup, ministry deployment, extension, graduation, and administration into clear workflow areas.',
      "Kept graduation review manual to match the institute's leadership approval process.",
      'Added audit logs so administrative and registrar actions can be reviewed later.',
      'Used role-aware administration to separate normal staff workflows from admin-only controls.',
      'Included light/dark mode to support different staff preferences and working conditions.',
    ],
    outcomes: [
      'Centralized academic and ministry administration into one internal portal.',
      'Made student stage, deployment, extension, and graduation status easier to review.',
      'Created clearer workflows for academic setup, field study, extension batches, and graduation review.',
      'Added admin visibility through audit logs and user management.',
      'Reduced reliance on scattered manual tracking across important school workflows.',
    ],
    demonstrates: [
      'Internal operations software design',
      'Education/ministry domain modeling',
      'Role-aware admin workflows',
      'Student registry and academic tracking',
      'Manual approval workflow design',
      'Audit logging and accountability',
      'ASP.NET Core, React, and PostgreSQL full-stack delivery',
    ],
    image: '/assets/images/agbi-screenshot-02.webp',
    alt: 'AGBI Portal dashboard showing academic, ministry, and administration workflows',
    screenshots: [
      {
        image: '/assets/images/agbi-screenshot-07.webp',
        alt: 'AGBI Portal student registry showing student records and academic stages',
        label: 'Student registry and academic stage tracking',
      },
      {
        image: '/assets/images/agbi-screenshot-01.webp',
        alt: 'AGBI Portal academic setup showing academic years and Year 1 semesters',
        label: 'Academic setup for years and semesters',
      },
      {
        image: '/assets/images/agbi-screenshot-04.webp',
        alt: 'AGBI Portal graduation review workflow with manual review queue',
        label: 'Manual graduation review workflow',
      },
      {
        image: '/assets/images/agbi-screenshot-11.webp',
        alt: 'AGBI Portal audit logs showing administrative action history',
        label: 'Audit logs and action history',
      },
      {
        image: '/assets/images/agbi-screenshot-12.webp',
        alt: 'AGBI Portal user management showing staff accounts and roles',
        label: 'Staff user management and role-aware administration',
      },
      {
        image: '/assets/images/agbi-screenshot-05.webp',
        alt: 'AGBI Portal light mode sign-in screen for staff access',
        label: 'Staff sign-in in light mode',
      },
      {
        image: '/assets/images/agbi-screenshot-06.webp',
        alt: 'AGBI Portal dark mode sign-in screen for staff access',
        label: 'Staff sign-in in dark mode',
      },
    ],
    referenceLabel: 'Private internal system',
    referenceText: 'No public link available',
    relatedIndustryLink: {
      href: '/industries/schools-nonprofits/',
      label: 'Explore school, ministry, and nonprofit systems',
    },
    confidential: true,
  },
  {
    slug: 'church-management-system',
    title: 'Church Management System',
    summary:
      'A role-based internal platform for records, attendance, events, and internal coordination built to replace scattered administrative workflows.',
    projectOverview: [
      'This project involved designing and building a centralized internal system for a private organization that needed to manage member records, attendance, events, and announcements in one place.',
      'The goal was to replace disconnected manual processes with a structured internal platform that gave staff and administrators clearer workflows, stronger visibility, and more dependable records.',
    ],
    industry: 'Private Organization / Membership Administration',
    companySize: 'Small administrative team with multiple internal roles',
    projectType: 'Internal management system',
    goal: [
      'Centralize member records and profiles',
      'Track attendance through a structured workflow',
      'Manage events and announcements in one system',
      'Reduce duplicated administrative work',
      'Provide reporting and role-based visibility for administrators',
    ],
    homepageLabel: 'Internal Management System',
    homepageSummary:
      'Designed and built a centralized internal system to manage member records, attendance, events, and announcements for a private organization.',
    problemOneLiner:
      'Member records, attendance, events, and reports were managed across disconnected tools with limited central visibility.',
    outcomeOneLiner:
      'Consolidated them into a role-based internal platform with shared records, reporting, and clearer staff workflows.',
    homepageBuilt: [
      'Role-based access',
      'Member records and profiles',
      'Attendance tracking',
      'Event and announcement management',
      'Reporting tools for administrators',
    ],
    homepageOutcome:
      'Centralized records, attendance, events, announcements, and role-based access into one internal system, reducing duplicated admin work and improving staff visibility.',
    clientType: 'Private organization with member records, event scheduling, and internal administration needs',
    serviceLine: 'Custom Business Systems',
    proof: ['Role-based access', 'API-first architecture', 'Operational consolidation'],
    businessProblem:
      'Critical records, attendance tracking, event management, and communication were spread across manual processes that created duplicated work and inconsistent data.',
    oldWorkflow: [
      'Member and attendance records were handled through disconnected manual tools.',
      'Leadership visibility depended on fragmented updates and time-consuming admin coordination.',
      'Administrative tasks required repeated handling across separate processes.',
    ],
    scopeDelivered: [
      'Centralized member records and attendance workflows',
      'Event scheduling and announcement management',
      'Role-based access for staff and leadership',
      'Operational reporting views tied to the same backend rules',
    ],
    keyFeatures: [
      'Role-based access',
      'Member records and profiles',
      'Attendance tracking',
      'Event and announcement management',
      'Reporting tools for administrators',
      'Centralized internal data model',
    ],
    architectureSummary:
      'The platform was structured as a role-based internal management system with centralized business rules, an API-first backend, and interfaces tailored to the organization’s internal roles.',
    technicalShape: [
      'API-first backend architecture',
      'Role-aware frontend application for internal staff use',
      'Centralized business rules for records, attendance, events, and permissions',
      'Operational reporting views tied to the same system',
      'Full-stack delivery designed for long-term maintainability',
    ],
    constraints: [
      'The system needed to support multiple internal roles with different visibility needs',
      'Sensitive organizational data required careful access control',
      'Project details had to remain generalized to respect client privacy',
    ],
    keyDecisions: [
      'Centralized business logic so operational rules stayed consistent across the system.',
      'Used role-based access to protect sensitive data while keeping workflows practical.',
      'Focused the first build on the most repeated administrative pain before expanding features.',
    ],
    outcomes: [
      'Roughly 60 percent less administrative workload',
      'One clear system replacing scattered record handling',
      'Better day-to-day coordination for staff and leadership',
    ],
    demonstrates: [
      'Ability to scope and deliver real internal software for operations-heavy organizations',
      'Architecture thinking that prioritizes roles, records, and maintainability',
      'Comfort handling business-critical workflows beyond simple marketing sites',
    ],
    image: '/assets/images/religious-org.png',
    alt: 'Internal management platform with structured navigation and records views',
    referenceLabel: 'Availability',
    referenceText: 'Private and confidential',
    relatedIndustryLink: {
      href: '/industries/schools-nonprofits/',
      label: 'Explore school, ministry, and nonprofit systems',
    },
    confidential: true,
  },
  {
    slug: 'catch-the-vision-ministry-website',
    title: 'Catch the Vision Ministry Website',
    summary:
      'A public-facing ministry website built to communicate mission, outreach locations, current campaign priorities, and clear supporter next steps.',
    projectOverview: [
      'Catch the Vision Ministry needed a clearer public website for explaining the ministry, showing where it serves, presenting the Cambodia 2026 mission, and giving supporters practical next steps.',
      'The project is public-facing communication work, not an internal operations platform. It organizes mission context, outreach locations, campaign details, partnership paths, and contact information into one responsive website.',
    ],
    industry: 'Ministry / Nonprofit Website',
    companySize: 'Volunteer-based ministry',
    projectType: 'Public-facing ministry website',
    goal: [
      'Explain the ministry mission clearly',
      'Show outreach locations and current campaign context',
      'Present ways supporters can pray, give, share, or connect',
      'Make contact options easier to find',
      'Create a responsive website that can support ministry communication',
    ],
    homepageLabel: 'Ministry Website',
    homepageSummary:
      'Built a public-facing ministry website for mission communication, outreach context, campaign details, and supporter next steps.',
    problemOneLiner:
      'The ministry needed a clearer way to explain its purpose, show where it serves, present the Cambodia 2026 mission, and guide visitors toward prayer, giving, sharing, or direct contact.',
    outcomeOneLiner:
      'Created a public-facing website that organizes the ministry message, outreach locations, campaign context, and supporter pathways in one place.',
    homepageBuilt: [
      'Mission-focused homepage',
      'Ministry overview',
      'Outreach and activities sections',
      'Mission locations',
      'Campaign feature',
      'Supporter pathways and contact section',
    ],
    homepageOutcome:
      'Organized the ministry mission, outreach context, campaign details, and supporter next steps into one responsive public website.',
    clientType: 'Ministry or nonprofit organization communicating mission, outreach, and supporter pathways',
    serviceLine: 'Custom Business Systems',
    proof: ['Mission website', 'Campaign communication', 'Supporter pathways'],
    businessProblem:
      'A ministry website needs to do more than look presentable. It has to explain the mission, show where the work is happening, make the current campaign understandable, and guide supporters toward the next action without creating confusion.',
    oldWorkflow: [
      'Mission context, outreach details, and supporter next steps were not organized in one clear public flow.',
      'Visitors needed a simpler path to understand the Cambodia 2026 mission and ways to partner.',
      'Contact and supporter actions needed to be easier to find from the same website experience.',
    ],
    scopeDelivered: [
      'Mission-focused homepage hero',
      'About and ministry overview section',
      'Service and outreach activity cards',
      'Mission location and campaign sections',
      'Partnership pathways for prayer, giving, sharing, and contact',
      'Contact section and footer navigation',
      'Responsive public website layout',
    ],
    keyFeatures: [
      'Mission introduction',
      'Ministry overview',
      'Ways-we-serve section',
      'Mission locations',
      'Cambodia 2026 campaign section',
      'Ways to partner',
      'Contact pathways',
      'Responsive layout',
    ],
    architectureSummary:
      'The website was structured as a static public ministry site with reusable content sections, clear page hierarchy, and a responsive layout focused on mission communication and supporter navigation.',
    technicalShape: [
      'Static public website build',
      'Section-based page composition',
      'Responsive layout for mobile and desktop visitors',
      'Image-led mission and campaign presentation',
      'Clear anchor-style pathways for mission, partner, and contact content',
      'Deployment-ready public site structure',
    ],
    constraints: [
      'The project needed to communicate ministry purpose without inventing fundraising or outreach metrics.',
      'Supporter pathways had to be clear without implying unverified campaign outcomes.',
      'The site needed to stay focused on public communication rather than internal operations scope.',
      'Copy and presentation needed to respect the ministry context.',
    ],
    keyDecisions: [
      'Kept the site focused on mission, outreach, campaign context, and supporter pathways.',
      'Used screenshots and sections to make the ministry story easier to scan.',
      'Separated public-facing website proof from deeper internal systems proof in the portfolio.',
    ],
    outcomes: [
      'A clearer public website for explaining the ministry and its current campaign.',
      'More organized presentation of outreach locations and ways to partner.',
      'A focused proof item for nonprofit and ministry communication work.',
    ],
    demonstrates: [
      'Public-facing ministry website design',
      'Mission and campaign communication structure',
      'Supporter pathway organization',
      'Responsive static site delivery',
      'Ability to support nonprofit communication alongside internal systems work',
    ],
    image: '/images/industries/schools-nonprofits/catch-the-vision-hero.webp',
    alt: 'Catch the Vision Ministry website hero section with mission message and partnership calls to action',
    screenshots: [
      {
        image: '/images/industries/schools-nonprofits/catch-the-vision-full-page.webp',
        alt: 'Catch the Vision Ministry full page website overview',
        label: 'Full-page ministry website overview',
      },
      {
        image: '/images/industries/schools-nonprofits/catch-the-vision-hero.webp',
        alt: 'Catch the Vision Ministry hero and mission introduction',
        label: 'Hero and mission introduction',
      },
      {
        image: '/images/industries/schools-nonprofits/catch-the-vision-about-and-serve.webp',
        alt: 'Catch the Vision Ministry about section and ways served',
        label: 'About the ministry and ways served',
      },
      {
        image: '/images/industries/schools-nonprofits/catch-the-vision-mission-locations.webp',
        alt: 'Catch the Vision Ministry mission locations and campaign section',
        label: 'Mission locations and Cambodia 2026 campaign',
      },
      {
        image: '/images/industries/schools-nonprofits/catch-the-vision-join-and-contact.webp',
        alt: 'Catch the Vision Ministry partnership and contact sections',
        label: 'Partnership and contact pathways',
      },
    ],
    referenceLabel: 'Project type',
    referenceText: 'Public-facing ministry website project',
    relatedIndustryLink: {
      href: '/industries/schools-nonprofits/',
      label: 'Explore school, ministry, and nonprofit systems',
    },
  },
  {
    slug: 'custom-project-management-web-app',
    title: 'Custom Project Management Web App',
    summary:
      'A custom project management web app built as an internal workflow system for organizing projects, tracking work, and improving visibility across active tasks.',
    projectOverview: [
      'This project involved building a custom project management web app to help teams organize projects, track work, manage progress, and reduce scattered coordination across messages and spreadsheets.',
      'The demo is framed as a custom business system and internal workflow app, not a landing page. It shows how a focused browser-based tool can make project information, task progress, and workflow status easier to review from one place.',
    ],
    industry: 'Professional Services / Internal Operations',
    companySize: 'Small team managing project-based work',
    projectType: 'Internal project management system',
    goal: [
      'Organize project information in one focused web app',
      'Make task status and progress easier to review',
      'Reduce scattered coordination across messages and spreadsheets',
      'Show a workflow-focused system aligned with operational software needs',
    ],
    homepageLabel: 'Project Management Web App',
    homepageSummary:
      'Built a custom project management web app to help teams organize projects, track work, manage progress, and reduce scattered coordination across messages and spreadsheets.',
    problemOneLiner:
      'Project work was harder to coordinate because tasks, status, and progress lived across scattered tools.',
    outcomeOneLiner:
      'Built a workflow-first project app with dashboards, task tracking, and deadline visibility for one shared operational view.',
    homepageBuilt: [
      'Custom project dashboard',
      'Project and task organization',
      'Status and progress tracking',
      'Workflow-focused web app interface',
      'Live demo available',
    ],
    homepageOutcome:
      'Clearer project visibility, better task organization, and a more structured workflow for managing work from one place.',
    clientType: 'Teams that need a focused internal app for project coordination and workflow visibility',
    serviceLine: 'Custom Business Systems',
    proof: ['Project dashboard', 'Task tracking', 'Workflow-focused web app'],
    businessProblem:
      'Project work can become difficult to manage when updates, tasks, files, and decisions are spread across messages, spreadsheets, and disconnected tools. The goal was to create a focused web app that keeps project information and task progress easier to manage from one place.',
    oldWorkflow: [
      'Project details were scattered across multiple places.',
      'Task status and progress were harder to review quickly.',
      'Team coordination depended too much on manual updates.',
      'There was no focused system shaped around the project workflow.',
    ],
    scopeDelivered: [
      'Custom project dashboard',
      'Project and task organization',
      'Status and progress tracking',
      'Workflow-focused web app interface',
      'Clearer visibility into active work',
      'Live demo available',
    ],
    keyFeatures: [
      'Project dashboard',
      'Task tracking',
      'Status management',
      'Progress visibility',
      'Workflow organization',
      'Responsive web app interface',
    ],
    architectureSummary:
      'The system was structured as a custom project management web app focused on organizing project information, task progress, and workflow visibility in a browser-based interface.',
    technicalShape: [
      'Custom frontend web application',
      'Project and task workflow views',
      'Structured UI for progress tracking',
      'Responsive interface for browser-based use',
      'Public demo for reviewing the workflow',
    ],
    constraints: [
      'The demo needed to communicate the app concept clearly.',
      'The interface needed to feel organized and practical.',
      "The project should support the site's positioning around custom workflow systems.",
      'Public demo copy must avoid claiming private client results.',
    ],
    keyDecisions: [
      'Framed the demo as an operational workflow app instead of a generic website.',
      'Focused the interface around project visibility and task organization.',
      'Kept the public proof asset simple enough to review quickly.',
    ],
    outcomes: [
      'Clearer project visibility',
      'Better task organization',
      'More structured workflow management',
    ],
    demonstrates: [
      'Building custom workflow applications',
      'Designing project dashboards',
      'Creating internal-tool style web apps',
      'Structuring software around operational clarity',
    ],
    image: '/assets/images/production-frontend-dashboard.webp',
    alt: 'Production frontend app dashboard showing project metrics, recent activity, deadlines, and team performance',
    referenceLabel: 'Live demo',
    referenceHref: 'https://websitedemo-drab.vercel.app/',
    referenceText: 'Open the live project management demo',
    referenceExternal: true,
  },
  {
    slug: 'sen-monorom-local-guide',
    title: 'Sen Monorom Local Guide',
    summary:
      'A verified local business directory for Sen Monorom, Mondulkiri, built to help visitors find owner-confirmed cafes, restaurants, guesthouses, tours, and local services.',
    projectOverview: [
      'This project involved building a local business directory platform for Sen Monorom, Mondulkiri. The goal was to help visitors browse useful local categories while giving small businesses and independent operators a clearer path to be discovered.',
      'The site is positioned as a custom local directory platform rather than a brochure website. It organizes verified listings, owner-confirmed business information, and visitor-focused category navigation into a fast, practical web app.',
    ],
    industry: 'Local Tourism / Business Directory',
    companySize: 'Local small businesses and independent operators',
    projectType: 'Local business directory platform',
    goal: [
      'Create a practical directory for Sen Monorom visitors',
      'Organize local businesses by category',
      'Use owner-confirmed information instead of copied directory data',
      'Give local businesses a simple way to request a listing',
      'Build a lightweight SEO-friendly local guide',
    ],
    homepageLabel: 'Local Directory Platform',
    homepageSummary:
      'Built a local business directory platform for Sen Monorom to organize verified listings across cafes, restaurants, guesthouses, tours, and local services.',
    problemOneLiner:
      'Local business information was scattered across social pages, maps, and informal recommendations.',
    outcomeOneLiner:
      'Created a focused directory platform for verified listings, category browsing, and owner listing requests.',
    homepageBuilt: [
      'Category-based local business directory',
      'Verified business listing structure',
      'Business detail cards',
      'Submit-business flow',
      'Mobile-friendly browsing experience',
    ],
    homepageOutcome:
      'Created a focused local discovery platform that helps visitors find verified businesses while giving local owners a simple path to request a listing.',
    clientType: 'Local businesses, tourism operators, and visitors in Sen Monorom, Mondulkiri',
    serviceLine: 'Custom Business Systems',
    proof: ['Local directory platform', 'Verified listing structure', 'Search-friendly local guide'],
    businessProblem:
      'Visitors often rely on scattered Facebook pages, old directory listings, map results, and word-of-mouth when looking for local businesses in Sen Monorom. Local owners also need a simple way to be discovered without managing a full website.',
    oldWorkflow: [
      'Business information was scattered across social pages, maps, and informal recommendations.',
      'Visitors had to check multiple places to find cafes, restaurants, tours, and services.',
      'Local business details could be outdated or copied from unverified sources.',
      'Small local operators did not always have a simple listing path.',
    ],
    scopeDelivered: [
      'Category-based local business directory',
      'Verified business listing structure',
      'Business detail cards',
      'Submit-business flow',
      'Tourism-focused homepage',
      'Mobile-friendly browsing experience',
      'Search-friendly local directory structure',
    ],
    keyFeatures: [
      'Verified local listings',
      'Category pages for cafes, restaurants, guesthouses, tours, and motorbike rentals',
      'Business detail cards',
      'Owner-confirmed status labels',
      'Contact and map links',
      'Submit-business call to action',
      'Fast public browsing performance',
    ],
    architectureSummary:
      'The site was structured as a lightweight local directory platform with category-based pages, reusable listing patterns, and simple maintenance for speed and reliability.',
    technicalShape: [
      'Astro site build',
      'Category-based content structure',
      'Reusable listing card patterns',
      'Mobile-first layout',
      'SEO-focused page structure',
      'External links for maps, phone, Facebook, and business websites',
      'Lightweight Vercel deployment',
    ],
    constraints: [
      'Business details needed to be presented carefully because local information can change.',
      'Listings should be owner-confirmed where possible.',
      'The site needed to stay lightweight and simple to maintain.',
      'The project should avoid pretending to be a complete tourism authority while still being useful.',
    ],
    keyDecisions: [
      'Positioned the site around verified local information instead of scraped directory content.',
      'Used category-based browsing to make the guide easier for visitors.',
      'Added a submission path so local owners can request a listing.',
      'Kept the platform lightweight and fast for simple public access.',
    ],
    outcomes: [
      'Created a practical local discovery platform for visitors',
      'Gave local businesses a simple listing pathway',
      'Organized verified local information into a clear category structure',
      'Built a reusable foundation for expanding the directory over time',
    ],
    demonstrates: [
      'Building local directory platforms',
      'Structuring content-heavy local guide sites',
      'Creating business listing systems',
      'Designing visitor-focused category navigation',
      'Turning local market research into a working digital product',
    ],
    image: '/assets/images/sen-monorom-local-guide.webp',
    alt: 'Sen Monorom Local Guide homepage showing a waterfall hero section for local business listings.',
    referenceLabel: 'Live site',
    referenceHref: 'https://senmonoromlocalguide.vercel.app/',
    referenceText: 'Open the live local guide',
    referenceExternal: true,
  },
  {
    slug: 'multi-tenant-estimate-engine',
    title: 'Multi-Tenant Estimate Engine',
    summary:
      'A SaaS-like estimate platform designed to support multiple client configurations, reusable intake logic, and embeddable deployment across service business websites.',
    projectOverview: [
      'This project focused on designing a reusable estimate platform rather than a one-off form. The goal was to create a system that could support multiple service companies with configurable pricing logic, shared backend infrastructure, and lightweight website embedding.',
      'It was effectively a product-style system: one engine, multiple client configurations, and a workflow that could serve both lead capture and operational review.',
    ],
    industry: 'Home Services / Productized Internal Platform',
    companySize: 'Builder-owned product system for multiple small service businesses',
    projectType: 'Multi-tenant estimate engine',
    goal: [
      'Create a reusable estimate engine instead of rebuilding a new form for each company',
      'Support client-specific pricing and package logic',
      'Centralize lead storage and notification workflows',
      'Make the tool embeddable across multiple websites',
      'Demonstrate product and SaaS-capable architecture thinking',
    ],
    clientType: 'Service businesses needing reusable lead qualification and estimate infrastructure',
    serviceLine: 'Automation & Integrations',
    proof: ['Multi-tenant architecture', 'Config-driven workflows', 'Embeddable product thinking'],
    homepageLabel: 'Multi-Tenant Estimate Platform',
    homepageSummary:
      'Designed a reusable estimate engine that could be configured for multiple service businesses instead of building separate quote forms for each one.',
    problemOneLiner:
      'Each new estimator deployment risked becoming a separate build with repeated quote logic and duplicated maintenance.',
    outcomeOneLiner:
      'Created a reusable multi-tenant estimate platform with shared backend logic, client configuration, and embeddable deployment.',
    homepageBuilt: [
      'Multi-client configuration model',
      'Embeddable widget architecture',
      'Shared backend logic for estimate calculation',
      'Lead storage and notification workflows',
      'Admin visibility per client configuration',
    ],
    homepageOutcome:
      'Created a product-style system that could support multiple deployments while reducing repeated build work.',
    businessProblem:
      'Building a one-off estimator for each company would duplicate work, fragment logic, and make updates harder over time. A more scalable approach was to create a reusable engine that could be configured per client and deployed across multiple sites.',
    oldWorkflow: [
      'Each new estimator deployment risked becoming a separate build with repeated logic',
      'Configuration changes would have to be managed manually per site',
      'Lead capture and estimate logic would become harder to maintain across clients',
      'There was no shared platform model for reuse or operational visibility',
    ],
    scopeDelivered: [
      'Config-driven estimate engine',
      'Multi-client configuration model',
      'Embeddable widget architecture',
      'Centralized lead storage and admin visibility',
      'Notification workflows for new submissions',
      'Reusable deployment pattern for additional client sites',
    ],
    keyFeatures: [
      'Configurable pricing rules per client',
      'Embeddable frontend widget',
      'Centralized backend logic',
      'Per-client lead storage and review',
      'Notification workflows',
      'Reusable deployment architecture',
      'Shared system with client-specific configuration',
    ],
    architectureSummary:
      'The system was designed as a multi-tenant estimate platform with shared backend infrastructure, client-specific configuration, and an embeddable frontend layer that could be deployed across multiple websites.',
    technicalShape: [
      'Embeddable frontend widget for website integration',
      'Backend service handling estimate logic and lead submission',
      'Centralized data storage for leads and per-client configuration',
      'Client-aware routing for notifications and admin review',
      'Reusable architecture supporting additional deployments',
    ],
    constraints: [
      'The system needed to support multiple client websites without becoming fragile',
      'Configuration needed to stay manageable for non-technical adjustments',
      'The widget needed to stay lightweight enough for real-world site embedding',
      'Architecture needed to support repeatable deployment without copy-paste sprawl',
    ],
    keyDecisions: [
      'Separated estimate logic from individual website implementations',
      'Used configuration to drive client-specific behavior instead of cloning the application',
      'Designed the system for repeatable deployment from the beginning',
      'Treated the project like a reusable platform rather than a one-off project asset',
    ],
    outcomes: [
      'Reduced repeated implementation work for future estimator deployments',
      'Created a clearer platform foundation for productized lead qualification',
      'Demonstrated a SaaS-like architecture approach rather than one-off project thinking',
    ],
    demonstrates: [
      'Designing systems around business workflow',
      'Building structured lead intake systems',
      'Multi-tenant system architecture',
      'Database-backed web applications',
      'Embeddable tools that integrate with existing websites',
      'Automation of intake and notification workflows',
    ],
    image: '/assets/images/home-service-demo.png',
    alt: 'Estimate engine interface representing reusable multi-tenant architecture',
    referenceLabel: 'Availability',
    referenceHref: '/home-service-estimator',
    referenceText: 'View related estimator offer',
    referenceExternal: false,
  },
  {
    slug: 'readyfolio-resource-portal',
    title: 'ReadyFolio Resource Portal',
    summary:
      'A portfolio builder and resource portal for beginner VAs and freelancers, combining public profile creation, downloadable resources, portfolio setup workflows, and admin resource management.',
    projectOverview: [
      'ReadyFolio is a portal-style product system for beginner VAs and freelancers who need a structured way to build a simple public portfolio and access practical client-ready resources.',
      'The build combines a public landing page, authenticated portfolio workspace, resource library, downloadable templates, publishing controls, and admin-side resource inventory visibility.',
    ],
    industry: 'Freelancer Education / Resource Platform',
    companySize: 'Solo-built product system for beginner freelancers and VAs',
    projectType: 'Portfolio builder and resource portal',
    goal: [
      'Give beginner freelancers a structured place to create a public portfolio profile',
      'Organize services, skills, sample work, and contact links in one workspace',
      'Provide categorized downloadable resources and templates',
      'Give admins visibility into resource inventory and download activity',
      'Keep publishing controls explicit so incomplete profiles can stay private',
    ],
    homepageLabel: 'Resource Portal / Portfolio Builder',
    homepageSummary:
      'Built a portfolio workspace and resource portal that helps beginner freelancers create a public profile, organize services and sample work, access practical resources, and manage portfolio publishing.',
    problemOneLiner:
      'Beginner freelancers needed a structured place to build a simple public portfolio, access client-ready resources, and manage profile content without using a website builder or receiving scattered files manually.',
    outcomeOneLiner:
      'Created a centralized portal where users can build a client-ready portfolio, access practical resources, and where admins can manage resource files and download visibility from one place.',
    homepageBuilt: [
      'Public profile builder',
      'Portfolio setup checklist',
      'Categorized resource library',
      'Downloadable resources and templates',
      'Admin resource inventory and download visibility',
    ],
    homepageOutcome:
      'Created one central workspace for beginner freelancers to build a client-ready profile, download practical resources, and manage publishing without a full website builder.',
    clientType:
      'Beginner VAs, freelancers, students, and career shifters building a client-ready profile',
    serviceLine: 'Custom Business Systems',
    proof: [
      'Portfolio workspace',
      'Resource library',
      'Admin inventory',
      'Download tracking',
      'Publishing controls',
      'Password reset',
    ],
    businessProblem:
      'Beginner freelancers often need a simple way to present services, skills, sample work, and contact links, but using a full website builder is too much friction. Resource materials also become hard to manage when they are shared manually across folders, messages, or separate downloads.',
    oldWorkflow: [
      'Users had to build a portfolio manually or rely on scattered social/profile links.',
      'Course materials, templates, and client documents could become disconnected from the portfolio-building workflow.',
      'Admins had limited visibility into which resources existed, how they were categorized, and what users were downloading.',
      'Publishing a clean, shareable profile required too many separate steps for beginners.',
    ],
    scopeDelivered: [
      'Public landing page for ReadyFolio',
      'User account and portfolio workspace',
      'Profile, services, skills, sample work, and contact link sections',
      'Portfolio setup checklist and publishing flow',
      'Resource library with categories and downloadable files',
      'Admin resource inventory',
      'Resource analytics and download visibility',
      'Password reset and account support foundation',
    ],
    keyFeatures: [
      'Public profile builder',
      'Portfolio setup checklist',
      'Service and skills management',
      'Sample work management',
      'Contact link management',
      'Resource library',
      'Category filters',
      'Downloadable PDFs and templates',
      'Admin resource inventory',
      'Download analytics',
      'Publishing controls',
      'Password reset flow',
    ],
    architectureSummary:
      'ReadyFolio was structured as a portal-style application with a user-facing portfolio workspace, a categorized resource library, and an admin resource inventory layer. The system separates public portfolio presentation from authenticated editing and admin resource management, so users can build their profile while admins maintain downloadable materials from a controlled interface.',
    technicalShape: [
      'React/Vite frontend for the authenticated portal experience',
      'Backend API for account, profile, resource, and admin workflows',
      'PostgreSQL-backed data model for users, portfolio content, resources, categories, and downloads',
      'Role-aware admin area for resource inventory and operational visibility',
      'Downloadable resource management with file metadata',
      'Password reset foundation for account recovery',
      'Publishing controls so users can keep profiles private until ready',
    ],
    constraints: [
      'The product needed to stay beginner-friendly and avoid the complexity of a full website builder.',
      'Resource files needed to be organized clearly without exposing private server paths.',
      'Admin screens needed to show useful resource inventory details without overwhelming the operator.',
      'The public profile workflow needed to support incomplete drafts before publishing.',
      'The system needed to communicate practical value without promising income or guaranteed client results.',
    ],
    keyDecisions: [
      'Focused the product around a simple portfolio workflow instead of a full website builder.',
      'Separated resource access from profile editing so users can both build their page and download practical materials.',
      'Added an admin resource inventory so resources can be managed and reviewed without touching code.',
      'Kept publishing controls explicit so users can keep their page private until the profile is ready.',
      'Used categorized resources to make beginner materials easier to find and apply.',
    ],
    outcomes: [
      'Created one central workspace for beginner freelancers to build a client-ready profile.',
      'Organized practical resources into a searchable and category-based library.',
      'Added admin visibility into resources, categories, and download activity.',
      'Reduced the need to manually share files or explain portfolio setup steps one by one.',
      'Created a reusable product foundation that can expand with more resources and workflow features.',
    ],
    demonstrates: [
      'Portal-style product thinking',
      'User dashboard and admin dashboard design',
      'Resource library workflows',
      'Role-aware application structure',
      'Downloadable file and resource management',
      'Beginner-friendly workflow design',
      'Building a practical SaaS-style MVP without overcomplicating the first version',
    ],
    image: '/assets/images/readyfolio-homepage-hero.webp',
    alt: 'ReadyFolio landing page showing the portfolio builder and public profile preview',
    screenshots: [
      {
        image: '/assets/images/readyfolio-more-01.webp',
        alt: 'ReadyFolio portfolio workspace showing setup checklist and profile sections',
        label: 'Portfolio workspace and setup checklist',
      },
      {
        image: '/assets/images/readyfolio-more-02.webp',
        alt: 'ReadyFolio resource library showing categorized downloadable resources',
        label: 'Categorized resource library',
      },
      {
        image: '/assets/images/readyfolio-more-03.webp',
        alt: 'ReadyFolio admin resource inventory showing resource analytics and file management',
        label: 'Admin resource inventory and analytics',
      },
    ],
    referenceLabel: 'Private product demo',
    referenceText: 'No public link available',
  },
];

export const featuredCaseStudySlugs = [
  'estimate-engine',
  'agbi-academic-ministry-portal',
  'readyfolio-resource-portal',
] as const;

export const faqItems = [
  {
    question: 'What kinds of projects are the best fit?',
    answer:
      'Internal systems, client portals, estimator flows, workflow automation, and software that improves handoffs, reporting, or lead quality. The common thread is a clear operational problem with a real friction point.',
  },
  {
    question: 'Do you build brochure websites or marketing pages?',
    answer:
      'No. The work is deliberately positioned around custom systems, client-facing workflow tools, and operational software. If a template solves the problem, I am not the right builder.',
  },
  {
    question: 'Can you improve an existing workflow instead of rebuilding everything?',
    answer:
      'Yes. Some projects need a rebuild, but others only need the weakest handoff, intake flow, or spreadsheet-heavy process replaced first. I prefer the smallest useful phase that creates real operational improvement.',
  },
  {
    question: 'Do I need a full specification to reach out?',
    answer:
      'No. If you can describe the current workflow, the people involved, and where the process is breaking down, that is usually enough to define a sensible first phase.',
  },
  {
    question: 'What happens after I contact you?',
    answer:
      'You get a practical reply with fit feedback, follow-up questions if needed, and direction on the first useful step. The early goal is to clarify the workflow problem, not force a giant scope.',
  },
];

export const aboutPrinciples = [
  {
    title: 'Direct ownership',
    description:
      'You work directly with the person responsible for shaping the scope, making system decisions, and delivering the first useful phase.',
  },
  {
    title: 'Workflow before interface',
    description:
      'The work starts with roles, data quality, approvals, and handoffs so the interface supports the real process.',
  },
  {
    title: 'Business systems mindset',
    description:
      'The strongest projects reduce admin load, improve lead quality, or create clearer operational visibility for the team.',
  },
  {
    title: 'Scoped for usefulness',
    description:
      'A strong first phase should solve a real bottleneck before the system expands into lower-priority features.',
  },
];

export const contactChecklist = [
  'The current workflow problem and where the process is breaking down',
  'Which tools, spreadsheets, forms, or manual steps are involved today',
  'The desired outcome after the first phase is in place',
  'Any timeline, budget direction, or rollout constraints you already know',
];

export const contactExpectations = [
  'I review the project context and check fit.',
  'I reply with fit feedback, specific questions, or a first-phase recommendation.',
  'If the fit is good, we can schedule a short call to clarify the workflow and scope.',
  'From there, you receive a practical proposal for the first useful phase.',
];

export const fitSignals = [
  'Service companies managing jobs, clients, or field work',
  'Agencies needing internal tools or client portals',
  'Teams relying on spreadsheets for operations',
  'Businesses that need estimator tools, intake flows, or dashboards',
  'Companies that want their site connected to real workflow',
];

export const notFitSignals = [
  'Single-page brochure sites or design-only requests',
  'Very small projects where a template solves the problem',
  'Projects that do not require custom logic, data, or workflow',
];

export const idealClients = fitSignals;
export const notIdealClients = notFitSignals;

export const buyerGuidance = {
  intro:
    'Good custom systems projects usually start with a clear operational problem, a practical first phase, and enough business context to judge fit quickly.',
  projectShape: [
    'A real workflow is creating manual work, weak visibility, or repeated handoffs.',
    'The first phase can focus on one important process before expanding.',
    'The system needs custom logic, structured data, or integration with existing tools.',
  ],
  timelineGuidance: [
    'Small automation and intake phases can often move faster than broader internal platforms.',
    'Larger systems should leave time for workflow review, data modeling, permissions, and rollout.',
    'A clear first workflow helps keep scope and timeline practical.',
  ],
  scopingGuidance:
    'Most projects are priced after reviewing the workflow, required roles, integrations, and what the first phase must improve.',
};

export const serviceOffers = servicePages.map((service) => ({
  title: service.title,
  startingPrice: service.pricingGuidanceIntro.match(/\$[0-9,]+(?:\s*-\s*\$[0-9,]+)?/)?.[0] ?? 'Scoped after review',
}));

export const testimonials = caseStudies.map((study) => ({
  headline: study.title,
  context: study.clientType,
  proof: study.proof,
  quote: study.homepageOutcome ?? study.summary,
  author: study.confidential ? 'Private client' : 'Project sample',
  role: study.serviceLine,
  company: study.industry,
}));

export const contactPageContent: ContactPageContent = {
  hero: {
    eyebrow: 'Consulting intake',
    title: 'Start with the workflow that needs better software.',
    lead:
      'Use this page to start a serious project conversation about internal systems, client portals, estimator tools, or automation tied to real operations.',
    support:
      'A complete specification is not required. Send the current workflow, where it breaks down, and what should improve.',
    responseTitle: "You'll get a practical reply, not a sales sequence.",
    responseBody:
      'I review the project context and reply with the clearest next step.',
    responsePoints: [
      'Fit feedback',
      'Follow-up questions if needed',
      'Direction on the first useful phase',
      'Usually within about 24 hours',
    ],
  },
  bestFit: {
    eyebrow: 'Best-fit project types',
    title: 'Projects I can usually help with',
    intro:
      'These are the types of workflow and systems projects that are usually the best fit.',
    projectTypes: [
      {
        title: 'Internal systems',
        summary:
          'Custom staff-facing software for operations that have outgrown spreadsheets, inbox coordination, and manual tracking.',
      },
      {
        title: 'Client portals / estimator tools',
        summary:
          'Structured intake, quoting, and self-service workflows that collect better information and reduce repetitive back-and-forth.',
      },
      {
        title: 'Automation / integrations',
        summary:
          'Connected workflows that move data between forms, spreadsheets, CRMs, inboxes, and third-party tools without manual re-entry.',
      },
    ],
    supportTitle: 'Typical fit signals',
    supportItems: fitSignals,
  },
  checklist: {
    eyebrow: 'What to send',
    title: 'Tell me what workflow needs to improve.',
    intro:
      'Share the current process, the tools involved, what is breaking, and what should improve.',
    items: contactChecklist,
  },
  inquiryForm: {
    eyebrow: 'Structured inquiry form',
    title: 'Send the project context.',
    intro:
      'Send enough context to judge fit and shape the first useful phase. A complete specification is not required.',
    deliveryNote:
      'Use this form to send the key project context. A complete specification is not required.',
    projectTypeOptions: [
      { value: 'internal-system', label: 'Internal system' },
      { value: 'client-portal-estimator', label: 'Client portal / estimator' },
      { value: 'automation-integration', label: 'Automation / integration' },
      { value: 'not-sure-yet', label: 'Not sure yet' },
    ],
    timelineOptions: [
      { value: 'asap', label: 'ASAP' },
      { value: '1-3-months', label: '1-3 months' },
      { value: '3-6-months', label: '3-6 months' },
      { value: 'just-exploring', label: 'Just exploring' },
    ],
    budgetRangeOptions: [
      { value: '1500-3k', label: '$1.5k-$3k' },
      { value: '3k-6k', label: '$3k-$6k' },
      { value: '6k-10k', label: '$6k-$10k' },
      { value: '10k-plus', label: '$10k+' },
      { value: 'not-sure-yet', label: 'Not sure yet' },
    ],
  },
  expectation: {
    eyebrow: 'What to expect',
    title: 'Here’s what to expect.',
    copy:
      'After submitting, I read the project context and reply with a practical next step. That may be fit feedback, a few specific questions about the workflow, or a recommendation for the first useful phase.',
    support: 'No sales sequence. No template response. The goal is clarity.',
  },
  fitReassurance: {
    eyebrow: 'Fit check',
    title: 'Not sure if this is a fit?',
    copy:
      'The clearest signal is whether the workflow has a specific breakdown point — a handoff, a manual process, an intake problem, or a visibility gap. If it does, it is worth sending the context.',
  },
  nextSteps: {
    eyebrow: 'What happens next',
    title: 'What happens next',
    intro:
      'After the form is submitted, the next step is practical review, not an automated sales sequence.',
    items: contactExpectations,
  },
  alternateContact: {
    eyebrow: 'Alternate contact methods',
    title: 'Prefer a direct message?',
    intro:
      'Prefer a shorter first message? Send a sentence or two about the workflow problem and I’ll reply with the right next step.',
    methods: [
      {
        label: 'Email',
        href: contactLinks.mailto,
        value: contactLinks.email,
        description:
          'Best for structured project context, attachments, and a more formal first message.',
      },
      {
        label: 'WhatsApp',
        href: contactLinks.whatsapp,
        value: '+855 96 388 5424',
        description:
          'Useful if you want to begin with a shorter outline and continue the intake conversation quickly.',
        external: true,
      },
      {
        label: 'Telegram',
        href: contactLinks.telegram,
        value: '@belovedjohndev',
        description:
          'A good option for direct follow-up questions or opening the conversation before a call.',
        external: true,
      },
    ],
  },
};

export const intentLandingPages: IntentLandingPage[] = [
  {
    slug: 'custom-estimator-tools',
    title: 'Custom Estimator Tools for Service Businesses | Beloved John Dev',
    metaDescription:
      'Custom-coded estimator tools that collect better lead information, guide quote requests, and connect customer intake to your internal workflow.',
    eyebrow: 'Custom estimator tools',
    heroTitle: 'Estimator tools that collect stronger quote requests before your team follows up.',
    heroLead:
      'I build guided estimate flows for service businesses that need more than a basic quote form. The goal is better lead context, cleaner routing, and a smoother handoff into the office workflow.',
    fitTitle: 'Best fit when quote requests arrive without enough context',
    fitIntro:
      'A custom estimator makes sense when the team repeats the same early questions, needs structured job details, or wants the website to qualify requests before manual follow-up.',
    fitItems: [
      'Your contact form does not capture service type, scope, urgency, or fit clearly.',
      'The office team has to restart discovery after every new inquiry.',
      'Pricing or package logic needs to guide the visitor without exposing every internal rule.',
      'Submissions should create structured lead records and notifications, not just inbox messages.',
    ],
    buildTitle: 'What the first phase can include',
    buildItems: [
      'Guided estimate or quote request flow',
      'Structured job detail capture',
      'Lead storage and admin review',
      'Email notifications and routing rules',
      'Configurable estimate or package logic',
      'Website deployment and launch support',
    ],
    proofTitle: 'Built for operational use, not just conversion polish',
    proofBody:
      'The strongest estimator tools help the buyer understand the next step while giving your team usable information before follow-up. That is why the workflow, data model, notifications, and admin review matter as much as the customer-facing screen.',
    ctaTitle: 'If quote requests are weak or repetitive, start with the intake problem.',
    ctaCopy:
      'Send the current quote flow, the questions your team repeats, and what a successful first phase should improve.',
    relatedServiceSlug: 'client-portals-estimator-tools',
  },
  {
    slug: 'custom-client-portals',
    title: 'Custom Client Portals for Service Companies | Beloved John Dev',
    metaDescription:
      'Custom client portals that give customers a clearer self-service path while helping your team manage intake, records, requests, and communication.',
    eyebrow: 'Custom client portals',
    heroTitle: 'Client portals built around the information your customers and team actually need.',
    heroLead:
      'I build focused customer-facing portals for service companies that need structured intake, request management, status visibility, document handling, or recurring client workflows.',
    fitTitle: 'Best fit when email threads and forms are carrying too much work',
    fitIntro:
      'A portal is useful when customers need a clearer path and your team needs the submitted information to connect to real internal workflows.',
    fitItems: [
      'Customers submit requests through scattered emails, forms, or messages.',
      'Staff need a single place to review customer details, documents, or service history.',
      'The same customer questions or uploads happen repeatedly.',
      'Client-facing access needs role-aware permissions and maintainable records.',
    ],
    buildTitle: 'What the first phase can include',
    buildItems: [
      'Client login or structured access flow',
      'Request intake and review screens',
      'Customer records and document fields',
      'Admin dashboard for staff follow-up',
      'Notifications for new activity',
      'Permission and data model planning',
    ],
    proofTitle: 'A portal should reduce coordination load',
    proofBody:
      'The point is not to add another place for customers to click. The point is to make requests, records, and handoffs clearer for both sides so the business spends less time chasing context.',
    ctaTitle: 'If clients need a clearer self-service path, start with the workflow.',
    ctaCopy:
      'Send the current customer handoff, what customers need access to, and what staff should see after the first phase.',
    relatedServiceSlug: 'client-portals-estimator-tools',
  },
  {
    slug: 'internal-business-systems',
    title: 'Internal Business Systems for Service Companies | Beloved John Dev',
    metaDescription:
      'Custom internal business systems for service companies that need dashboards, job tracking, records management, reporting, and workflow tools beyond spreadsheets.',
    eyebrow: 'Internal business systems',
    heroTitle: 'Internal systems for service companies that have outgrown spreadsheet operations.',
    heroLead:
      'I build staff-facing tools, dashboards, records systems, job trackers, and workflow platforms that centralize the information your team depends on every day.',
    fitTitle: 'Best fit when operations depend on workarounds',
    fitIntro:
      'A custom internal system makes sense when spreadsheets, inboxes, or generic software are creating duplicated work, weak visibility, or fragile handoffs.',
    fitItems: [
      'A spreadsheet is acting like a CRM, approval queue, tracker, or reporting system.',
      'Managers cannot see reliable status without manual checking.',
      'Staff re-enter the same details across several places.',
      'The workflow has business-specific rules that generic tools do not fit well.',
    ],
    buildTitle: 'What the first phase can include',
    buildItems: [
      'Core data model and workflow mapping',
      'Admin dashboard or staff workspace',
      'Records, job, inventory, or task tracking',
      'Role-based permissions',
      'Basic reporting and search',
      'Deployment, documentation, and handoff',
    ],
    proofTitle: 'The first release should solve the highest-value workflow',
    proofBody:
      'The best internal systems usually start smaller than a full platform. A focused first phase can replace the most painful handoff, reporting gap, or records workflow before the system expands.',
    ctaTitle: 'If daily operations rely on spreadsheets and memory, start there.',
    ctaCopy:
      'Send the current workflow, the tools involved, what is breaking, and what a successful first phase should improve.',
    relatedServiceSlug: 'custom-business-systems',
  },
  {
    slug: 'workflow-automation-for-service-businesses',
    title: 'Workflow Automation for Service Businesses | Beloved John Dev',
    metaDescription:
      'Workflow automation for service businesses that need cleaner notifications, CRM sync, reporting automation, data movement, and less copy-paste work.',
    eyebrow: 'Workflow automation',
    heroTitle: 'Automation that removes repetitive admin work from service business workflows.',
    heroLead:
      'I build practical automation and integrations that move information between forms, spreadsheets, CRMs, email, dashboards, and internal tools with fewer manual steps.',
    fitTitle: 'Best fit when the tools exist but the handoffs are still manual',
    fitIntro:
      'Automation is most useful when the same information is copied, routed, checked, or reported by hand again and again.',
    fitItems: [
      'Leads or requests need to route to the right person automatically.',
      'Staff copy data between forms, spreadsheets, email, and CRM tools.',
      'Reports require manual compiling every week or month.',
      'Important notifications or follow-ups are easy to miss.',
    ],
    buildTitle: 'What the first phase can include',
    buildItems: [
      'Workflow and tool audit',
      'One high-value automation path',
      'Email or internal notifications',
      'CRM, form, spreadsheet, or API sync',
      'Scheduled reports or data processing',
      'Testing, monitoring notes, and documentation',
    ],
    proofTitle: 'Automation should be reliable enough to disappear into the workflow',
    proofBody:
      'Good automation is not just faster. It is traceable, maintainable, and designed around what happens when data is missing, a third-party tool fails, or the workflow changes later.',
    ctaTitle: 'If copy-paste work is slowing the team down, map the repeated task first.',
    ctaCopy:
      'Send the current tools, the repeated admin step, and what should happen automatically after the first phase.',
    relatedServiceSlug: 'automation-integrations',
  },
  {
    slug: 'custom-booking-systems',
    title: 'Custom Booking Systems for Service Companies | Beloved John Dev',
    metaDescription:
      'Custom booking systems for service companies that need structured scheduling requests, intake rules, notifications, and cleaner handoff into operations.',
    eyebrow: 'Custom booking systems',
    heroTitle: 'Booking systems that connect scheduling requests to the real service workflow.',
    heroLead:
      'I build custom booking and request systems for service companies that need more context, routing, and operational control than a generic calendar widget can provide.',
    fitTitle: 'Best fit when booking is tied to qualification or internal coordination',
    fitIntro:
      'A custom booking system is useful when the request needs service details, location rules, package selection, staff routing, or admin review before the next step.',
    fitItems: [
      'Customers need a clearer way to request service without a long email exchange.',
      'Booking requests need qualification before confirmation.',
      'The office team needs structured details before scheduling or dispatch.',
      'Notifications, routing, or status tracking need to match your internal process.',
    ],
    buildTitle: 'What the first phase can include',
    buildItems: [
      'Booking request or intake flow',
      'Service type and location rules',
      'Admin review dashboard',
      'Customer and staff notifications',
      'Lead or request storage',
      'Website integration and launch support',
    ],
    proofTitle: 'Booking should improve operations, not just collect dates',
    proofBody:
      'For service companies, booking often overlaps with qualification, dispatch, pricing, and follow-up. A custom system can collect the context the team needs before a request becomes operational work.',
    ctaTitle: 'If booking requests still require too much manual sorting, start with that path.',
    ctaCopy:
      'Send the current booking process, what the team needs before confirmation, and what the first phase should make easier.',
    relatedServiceSlug: 'client-portals-estimator-tools',
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
          'The better question is not "can SaaS do this?" The better question is "how much operational friction are we still carrying because the software does not match how the business actually works?"',
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
  {
    slug: 'custom-business-system-vs-spreadsheet-workflow',
    category: 'Comparison',
    title: 'Custom Business System vs Spreadsheet Workflow',
    summary:
      'Spreadsheets are useful until the workflow needs permissions, reliable reporting, structured handoffs, and fewer manual edits.',
    readingTime: '4 min read',
    audience: 'For teams deciding whether a spreadsheet-heavy operation needs a custom system.',
    takeaways: [
      'A spreadsheet is flexible, but it rarely protects workflow quality by itself',
      'Custom systems make sense when roles, rules, and reporting need structure',
      'The right first build should replace the highest-friction part of the workflow',
    ],
    intro:
      'A spreadsheet workflow is often the honest beginning of an internal system. It captures the fields, statuses, exceptions, and reporting needs before anyone formalizes the process. The issue starts when the spreadsheet becomes responsible for too much.',
    sections: [
      {
        title: 'Where spreadsheets still win',
        paragraphs: [
          'Spreadsheets are fast, familiar, and easy to change. For early experiments, low-volume tracking, or simple lists, they are often the right tool.',
          'The mistake is treating that early flexibility as proof that the spreadsheet can keep carrying the workflow as more people, rules, and handoffs depend on it.',
        ],
      },
      {
        title: 'Where the workflow starts breaking',
        paragraphs: [
          'The signal is not just that the sheet is messy. The signal is that staff need different permissions, managers need trustworthy status, records need history, and reporting cannot depend on manual cleanup.',
          'At that point, the business does not just need cleaner rows. It needs a system that shapes how information enters, moves, and gets reviewed.',
        ],
      },
      {
        title: 'How to scope the first replacement',
        paragraphs: [
          'A custom system does not need to replace everything at once. The best first phase usually targets the workflow where errors, delay, or reporting pain create the most operational drag.',
          'That could be a job tracker, records system, approval queue, dashboard, or intake process. The key is choosing the part where structure creates immediate usefulness.',
        ],
      },
    ],
  },
  {
    slug: 'client-portal-vs-basic-contact-form',
    category: 'Comparison',
    title: 'Client Portal vs Basic Contact Form',
    summary:
      'A basic form captures a message. A client portal can structure requests, records, uploads, and follow-up around the workflow your team needs.',
    readingTime: '3 min read',
    audience: 'For service companies deciding whether intake needs a stronger customer-facing system.',
    takeaways: [
      'A form is enough only when the next step is simple',
      'A portal helps when customer information needs review, history, or repeat access',
      'The portal should reduce coordination work for both customer and staff',
    ],
    intro:
      'A contact form is useful when the only goal is to start a conversation. But many service workflows need more than a name, email, and open-ended message.',
    sections: [
      {
        title: 'What a contact form is good at',
        paragraphs: [
          'A basic form is quick to publish and easy for visitors to understand. It is often enough for simple inquiries, short messages, or low-complexity service requests.',
          'The limitation is that it usually hands the hard work to the office team after submission.',
        ],
      },
      {
        title: 'What a portal changes',
        paragraphs: [
          'A portal can collect structured requests, preserve customer records, handle uploads, show status, and give staff a clearer review workflow.',
          'That makes sense when customer interaction is recurring, information-heavy, or tied to internal follow-up that should not live in scattered inbox threads.',
        ],
      },
      {
        title: 'The buying question',
        paragraphs: [
          'The useful question is not whether a portal sounds impressive. The useful question is whether the current customer handoff creates repeated admin work or missing context.',
          'If it does, a focused portal or intake tool may be a better first phase than another generic form.',
        ],
      },
    ],
  },
  {
    slug: 'when-to-build-a-custom-estimator-tool',
    category: 'Lead Flow',
    title: 'When to Build a Custom Estimator Tool',
    summary:
      'A custom estimator tool makes sense when quote requests need guided questions, structured job details, and better qualification before follow-up.',
    readingTime: '4 min read',
    audience: 'For service businesses that want stronger quote requests from their website.',
    takeaways: [
      'Estimator tools work best when they improve both buyer clarity and staff follow-up',
      'The tool should collect job context before asking for contact information',
      'Pricing logic should support qualification without creating a brittle black box',
    ],
    intro:
      'A custom estimator tool is not just a prettier quote form. Done well, it becomes a structured intake path that helps the customer understand the next step and gives the team better information before follow-up.',
    sections: [
      {
        title: 'The strongest signal is repeated discovery',
        paragraphs: [
          'If every quote request forces the team to ask the same questions about service type, size, urgency, location, photos, or budget fit, the website is not doing enough intake work.',
          'An estimator can collect that context in a guided way before a staff member spends time on the request.',
        ],
      },
      {
        title: 'A useful estimator supports the office team',
        paragraphs: [
          'The customer-facing flow matters, but the internal handoff matters just as much. Submissions should be stored clearly, routed properly, and easy for the team to review.',
          'That is where a custom tool can outperform a generic form builder: it can be designed around the actual follow-up process.',
        ],
      },
      {
        title: 'Start with a focused first phase',
        paragraphs: [
          'The first version should usually handle one high-value estimate path, capture the important details, notify the right people, and create a useful admin view.',
          'Once that works, the tool can expand into more services, deeper pricing logic, or portal functionality.',
        ],
      },
    ],
  },
  {
    slug: 'internal-tool-vs-off-the-shelf-saas',
    category: 'Comparison',
    title: 'Internal Tool vs Off-the-Shelf SaaS',
    summary:
      'Off-the-shelf SaaS is often the right starting point, but custom internal tools make sense when the workflow mismatch becomes expensive.',
    readingTime: '4 min read',
    audience: 'For operators comparing a custom internal build with another subscription tool.',
    takeaways: [
      'SaaS wins when the workflow is common and the fit is close',
      'Custom tools win when process mismatch creates ongoing admin cost',
      'The decision should compare operational friction, not just feature lists',
    ],
    intro:
      'Buying software is usually the right first move. It is faster, cheaper, and lower risk than building custom. But that does not mean another SaaS subscription is always the answer.',
    sections: [
      {
        title: 'When SaaS is the better choice',
        paragraphs: [
          'If the workflow is standard, the team can adapt without much friction, and the tool already handles the important reporting and permission needs, buying is usually sensible.',
          'A custom build should not exist just because the business wants something unique.',
        ],
      },
      {
        title: 'When custom starts to make sense',
        paragraphs: [
          'The case changes when staff keep building side spreadsheets, duplicate entry becomes normal, or managers still cannot see the right status without manual checking.',
          'That means the company is paying for the subscription and for the workaround layer around it.',
        ],
      },
      {
        title: 'How to decide responsibly',
        paragraphs: [
          'Start by listing the recurring manual work created by the mismatch. Then compare that cost with a focused first phase that removes the most painful handoff.',
          'If the custom tool can stay small and directly reduce that friction, it may be a better investment than forcing the workflow into another generic product.',
        ],
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => servicePages.find((service) => service.slug === slug);

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((study) => study.slug === slug);

export const getIntentLandingPageBySlug = (slug: string) =>
  intentLandingPages.find((page) => page.slug === slug);
