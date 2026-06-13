import type { ComponentType } from 'react';
import { MdtReviewsBody } from './mdt-reviews';
import { PensionClarityBody } from './pension-clarity';
import { SymptomMonitoringBody } from './symptom-monitoring';
import { WorkerOnboardingBody } from './worker-onboarding';

type CaseStudyKey = `${string}:${string}`;

const REGISTRY: Record<CaseStudyKey, ComponentType> = {
  'script-assist:symptom-monitoring': SymptomMonitoringBody,
  'script-assist:mdt-reviews': MdtReviewsBody,
  'finity:worker-onboarding': WorkerOnboardingBody,
  'finity:pension-clarity': PensionClarityBody,
};

export function getCaseStudyBody(projectSlug: string, caseSlug: string) {
  return REGISTRY[`${projectSlug}:${caseSlug}` as CaseStudyKey];
}
