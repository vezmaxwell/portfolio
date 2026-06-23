import type { Meta, StoryObj } from '@storybook/react';
import { Phone } from '@vez/ui';
import { WorkerOnboardingMobile } from './WorkerOnboardingMobile';

const meta: Meta<typeof WorkerOnboardingMobile> = {
  title: 'Prototypes/Finity/WorkerOnboardingMobile',
  component: WorkerOnboardingMobile,
  decorators: [
    (Story) => {
      document.documentElement.setAttribute('data-theme', 'finity');
      return (
        <div style={{ display: 'flex', gap: '24px', padding: '32px', flexWrap: 'wrap' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof WorkerOnboardingMobile>;

export const TaskHub: Story = {
  render: () => (
    <Phone>
      <WorkerOnboardingMobile initialScreen="hub" />
    </Phone>
  ),
};

export const PersonalAddress: Story = {
  render: () => (
    <Phone>
      <WorkerOnboardingMobile initialScreen="address" />
    </Phone>
  ),
};

export const RightToWork: Story = {
  render: () => (
    <Phone>
      <WorkerOnboardingMobile initialScreen="rtw" />
    </Phone>
  ),
};

export const HolidayChoice: Story = {
  render: () => (
    <Phone>
      <WorkerOnboardingMobile initialScreen="holiday" />
    </Phone>
  ),
};

export const AllTasksComplete: Story = {
  render: () => (
    <Phone>
      <WorkerOnboardingMobile
        initialScreen="hub"
        initialComplete={['personal', 'address', 'rtw', 'hmrc', 'holiday', 'payment']}
      />
    </Phone>
  ),
};
