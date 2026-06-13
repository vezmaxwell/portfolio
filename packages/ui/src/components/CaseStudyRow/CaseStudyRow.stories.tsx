import type { Meta, StoryObj } from '@storybook/react';
import { CaseStudyRow, TagCard, TextCard } from './CaseStudyRow';

const meta: Meta<typeof CaseStudyRow> = {
  title: 'Layout/CaseStudyRow',
  component: CaseStudyRow,
};

export default meta;
type Story = StoryObj<typeof CaseStudyRow>;

const sampleTags = ['Fintech', 'Payroll', 'SaaS', 'B2B'];

export const TextLeft: Story = {
  render: () => (
    <CaseStudyRow>
      <TextCard
        tint="tint-1"
        title="Reducing repetitive admin tasks for payroll administrators."
        subtitle="Finity simplifies back-office tasks for the temporary recruitment market."
      />
      <TagCard tags={sampleTags} tint="tint-1-strong" shape="pill-top" />
    </CaseStudyRow>
  ),
};

export const TextRight: Story = {
  render: () => (
    <CaseStudyRow reverse>
      <TextCard
        tint="tint-2"
        title="Developing trust for doctors by building with empathy for patients."
        subtitle="Symptom monitoring with the Script Assist patient app."
      />
      <TagCard tags={sampleTags} tint="tint-2-strong" shape="pill-left" />
    </CaseStudyRow>
  ),
};
