import type { ComponentType } from 'react';
import { KareheroCareExpertScreenBody } from './karehero-care-expert-screen';
import { KareheroDesignsDevBody } from './karehero-designs-dev';
import { MdtReviewsBody } from './mdt-reviews';
import { PensionClarityBody } from './pension-clarity';
import { PicturesCinemaGuideBody } from './pictures-cinema-guide';
import { RunnaWorkoutsBody } from './runna-workouts';
import { SymptomMonitoringBody } from './symptom-monitoring';
import { WorkerOnboardingBody } from './worker-onboarding';

type CaseStudyKey = `${string}:${string}`;

const REGISTRY: Record<CaseStudyKey, ComponentType> = {
  'script-assist:symptom-monitoring': SymptomMonitoringBody,
  'script-assist:mdt-reviews': MdtReviewsBody,
  'finity:worker-onboarding': WorkerOnboardingBody,
  'finity:pension-clarity': PensionClarityBody,
  'runna:workouts': RunnaWorkoutsBody,
  'karehero:care-expert-screen': KareheroCareExpertScreenBody,
  'karehero:designs-dev': KareheroDesignsDevBody,
  'pictures:cinema-guide': PicturesCinemaGuideBody,
};

export function getCaseStudyBody(projectSlug: string, caseSlug: string) {
  return REGISTRY[`${projectSlug}:${caseSlug}` as CaseStudyKey];
}
