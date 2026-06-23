export type TintKey = 'tint-1' | 'tint-2' | 'tint-3' | 'tint-4';

export interface CaseStudyCard {
  slug: string;
  projectSlug: string;
  title: string;
  subtitle: string;
  tags: string[];
  tint: TintKey;
  /** Visual position of the text card relative to the tag card. */
  textSide: 'left' | 'right';
  /** Optional rotation of the tag card's pill corner. */
  tagShape?: 'pill-top' | 'pill-left' | 'pill-right';
  /** Hero/preview image (path under /public). */
  image?: string;
  /** Background tint behind the hero image on the case study page. */
  imageTint?: TintKey;
  /** Render the preview image with no background panel (e.g. a bare illustration). */
  imageBare?: boolean;
}

export interface ProjectOverviewLink {
  projectSlug: string;
  prefix: string;
  emphasis: string;
  suffix: string;
  ctaLabel: string;
  tint: TintKey;
  bordered?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** Intro paragraphs shown on the project overview page. */
  intro?: string[];
  /** Optional pill nudging readers to a deeper overview. */
  overviewLink?: ProjectOverviewLink;
  /** Status badge for placeholder projects. */
  status?: 'placeholder';
  /** Hero image on the project overview page (path under /public). */
  heroImage?: string;
  /** Background tint behind the project hero image. */
  heroTint?: TintKey;
  /** Render the hero image with no background panel (e.g. a bare illustration). */
  heroBare?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: 'pictures',
    name: 'Pictures',
    tagline: 'A brutalist redesign for London’s repertory cinema guide.',
    intro: [
      'Pictures is James’s, not mine. He built a guide to every repertory and independent film screening in London, all pulled into one calendar, and it already had plenty of users. What it did not have, in his words, was soul.',
      'So he handed me the kind of brief most designers only dream of: make it brutalist, and care more about how it looks than whether it is strictly usable. I took that and ran.',
    ],
    heroImage: '/assets/pictures/popcorn.png',
    heroBare: true,
  },
  {
    slug: 'script-assist',
    name: 'Script Assist',
    tagline: 'Zero-to-one telehealth platform for UK medical cannabis prescribing.',
    intro: [
      'Script Assist was designed to bridge the gaps in medical cannabis prescribing, ensuring the patients who need it can access it and the doctors who prescribe it can remain confident and compliant.',
      'What started as software to enable prescriptions grew into a fully fledged tele-health platform used by private clinics around the UK, and then into a SaaS provider. Script Assist continues to ensure that the complexities surrounding medical cannabis prescribing are minimised for those who need it most.',
    ],
    heroImage: '/assets/script-assist/laptop-person.png',
    heroTint: 'tint-1',
    heroBare: true,
  },
  {
    slug: 'finity',
    name: 'Finity',
    tagline: 'Payroll for the temporary recruitment market.',
    intro: [
      'I joined as Finity’s first permanent designer after 8 years of the product existing. Design had been treated as a service you called in when something needed to look nice, not a discipline that shaped what got built.',
      'Over my time there I rebuilt the practice from the ground up: introducing discovery, founding the design system, embedding design in planning, and shifting the culture from waterfall hand-offs to cross-functional collaboration.',
    ],
    heroImage: '/assets/finity/hero-character.png',
    heroTint: 'tint-2',
    heroBare: true,
    overviewLink: {
      projectSlug: 'finity',
      prefix: 'If you’d like to hear more about my ',
      emphasis: 'leadership experience',
      suffix: ', I’ve written about it outside of my case studies in an overview.',
      ctaLabel: 'Read it here',
      tint: 'tint-4',
      bordered: true,
    },
  },
  {
    slug: 'karehero',
    name: 'KareHero',
    tagline: 'Helping family carers navigate care, with a real human in their corner.',
    intro: [
      'KareHero connects family carers with a real human, a care expert who helps them navigate one of the hardest stretches of their life.',
      'The care experts are the heart of the product, but they had nowhere good to work, running their whole workflow across spreadsheets and a handful of disconnected tools. This work pulls that back into the product.',
    ],
    heroImage: '/assets/karehero/hero.png',
    heroBare: true,
  },
  {
    slug: 'runna',
    name: 'Runna',
    tagline: 'My dream feature for my favourite running app.',
    intro: [
      'Runna is a personalised running coaching app used by hundreds of thousands of runners globally, and it might be my favourite app of all time. It got me from a 40-minute 5k to a half marathon.',
      'Coaches Corner is an imaginary feature I designed for it: a way to create, do and track custom gym workouts alongside your running plan, based on my user research of 1 (me).',
    ],
    heroImage: '/assets/runna/screens-grid.png',
    heroTint: 'tint-2',
  },
];

export const CASE_STUDIES: CaseStudyCard[] = [
  {
    slug: 'symptom-monitoring',
    projectSlug: 'script-assist',
    title: 'Developing trust for doctors by building with empathy for patients.',
    subtitle: 'Symptom monitoring with the Script Assist patient app.',
    tags: ['Healthtech', 'Telehealth', 'SaaS', 'B2B'],
    tint: 'tint-1',
    textSide: 'left',
    tagShape: 'pill-top',
    image: '/assets/script-assist/laptop-person.png',
    imageTint: 'tint-1',
    imageBare: true,
  },
  {
    slug: 'mdt-reviews',
    projectSlug: 'script-assist',
    title: 'Giving doctors visibility into their road to compliance for medical cannabis.',
    subtitle: 'Integrating MDT reviews into the prescribing flow.',
    tags: ['Healthtech', 'Compliance', 'SaaS', 'B2B'],
    tint: 'tint-3',
    textSide: 'right',
    tagShape: 'pill-left',
    image: '/assets/script-assist/wireframe-2.png',
    imageTint: 'tint-3',
  },
  {
    slug: 'worker-onboarding',
    projectSlug: 'finity',
    title: 'Reducing repetitive admin tasks for payroll administrators.',
    subtitle: 'Finity simplifies back-office tasks for the temporary recruitment market.',
    tags: ['Fintech', 'Payroll', 'SaaS', 'B2B'],
    tint: 'tint-2',
    textSide: 'left',
    tagShape: 'pill-top',
    image: '/assets/finity/flares-character.png',
    imageTint: 'tint-2',
    imageBare: true,
  },
  {
    slug: 'pension-clarity',
    projectSlug: 'finity',
    title: 'Designing clarity into chaos.',
    subtitle: 'Reducing pension uncertainty in a complicated flow.',
    tags: ['Fintech', 'Pensions', 'SaaS', 'B2B'],
    tint: 'tint-4',
    textSide: 'right',
    tagShape: 'pill-left',
    image: '/assets/finity/pension-character.png',
    imageTint: 'tint-4',
    imageBare: true,
  },
  {
    slug: 'workouts',
    projectSlug: 'runna',
    title: 'Designing my dream feature for the app that got me running.',
    subtitle: 'Coaches Corner: create, do and track custom workouts in Runna.',
    tags: ['Fitness', 'Mobile', 'Consumer', 'Concept'],
    tint: 'tint-1',
    textSide: 'left',
    tagShape: 'pill-top',
    image: '/assets/runna/coach-character.png',
    imageTint: 'tint-1',
    imageBare: true,
  },
  {
    slug: 'care-expert-screen',
    projectSlug: 'karehero',
    title: 'Giving care experts one screen to run a customer from.',
    subtitle: 'Actions, calls and key documents for those navigating care.',
    tags: ['Care tech', 'Mobile', 'SaaS', 'Product'],
    tint: 'tint-1',
    textSide: 'right',
    tagShape: 'pill-left',
    image: '/assets/karehero/hero.png',
    imageBare: true,
  },
  {
    slug: 'cinema-guide',
    projectSlug: 'pictures',
    title: 'Giving a much-loved cinema guide some soul.',
    subtitle: 'Every independent screening in London, with a brutalist point of view.',
    tags: ['Web app', 'Brutalist', 'Editorial', 'Design'],
    tint: 'tint-1',
    textSide: 'left',
    tagShape: 'pill-top',
    image: '/assets/pictures/popcorn.png',
    imageBare: true,
  },
];

/**
 * Canonical display order for the home-page previews and the case-study "Next"
 * cycle. `mdt-reviews` is intentionally excluded from both (no home preview, and
 * skipped when cycling Next). Keep these two in sync via this single source.
 */
export const NAV_ORDER = [
  'care-expert-screen',
  'worker-onboarding',
  'cinema-guide',
  'symptom-monitoring',
  'pension-clarity',
  'workouts',
] as const;

/** CASE_STUDIES resolved into NAV_ORDER, used by the home page and Next nav. */
export const ORDERED_CASE_STUDIES: CaseStudyCard[] = NAV_ORDER.map((slug) =>
  CASE_STUDIES.find((c) => c.slug === slug),
).filter((c): c is CaseStudyCard => Boolean(c));

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const getCaseStudiesForProject = (slug: string) =>
  CASE_STUDIES.filter((c) => c.projectSlug === slug);
export const getCaseStudy = (projectSlug: string, caseSlug: string) =>
  CASE_STUDIES.find((c) => c.projectSlug === projectSlug && c.slug === caseSlug);
