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
}

export const PROJECTS: Project[] = [
  {
    slug: 'pictures',
    name: 'Pictures',
    tagline: 'Case study coming soon.',
    status: 'placeholder',
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
  },
  {
    slug: 'finity',
    name: 'Finity',
    tagline: 'Payroll for the temporary recruitment market.',
    intro: [
      'I joined as Finity’s first permanent designer after 8 years of the product existing. Design had been treated as a service you called in when something needed to look nice — not a discipline that shaped what got built.',
      'Over my time there I rebuilt the practice from the ground up: introducing discovery, founding the design system, embedding design in planning, and shifting the culture from waterfall hand-offs to cross-functional collaboration.',
    ],
    heroImage: '/assets/finity/hero-character.png',
    heroTint: 'tint-2',
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
    name: 'Karehero',
    tagline: 'Case study coming soon.',
    status: 'placeholder',
  },
  {
    slug: 'runna',
    name: 'Runna',
    tagline: 'Case study coming soon.',
    status: 'placeholder',
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
    image: '/assets/script-assist/wireframe-1.png',
    imageTint: 'tint-1',
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
    image: '/assets/finity/hero-character.png',
    imageTint: 'tint-2',
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
  },
];

/** Cards shown on the home page (the ones the user has Figma-confirmed for now). */
export const HOME_CASE_STUDIES: CaseStudyCard[] = CASE_STUDIES;

export const HOME_OVERVIEW_LINKS: ProjectOverviewLink[] = [
  {
    projectSlug: 'finity',
    prefix: 'If you’d like to hear more about my ',
    emphasis: 'leadership experience',
    suffix: ', I’ve written about it outside of my case studies in an overview.',
    ctaLabel: 'Read it here',
    tint: 'tint-4',
    bordered: true,
  },
  {
    projectSlug: 'script-assist',
    prefix: 'If you’d like to get an overview of my time at ',
    emphasis: 'Script Assist',
    suffix: ', I’ve written about it outside of my case studies.',
    ctaLabel: 'Read it here',
    tint: 'tint-3',
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const getCaseStudiesForProject = (slug: string) =>
  CASE_STUDIES.filter((c) => c.projectSlug === slug);
export const getCaseStudy = (projectSlug: string, caseSlug: string) =>
  CASE_STUDIES.find((c) => c.projectSlug === projectSlug && c.slug === caseSlug);
