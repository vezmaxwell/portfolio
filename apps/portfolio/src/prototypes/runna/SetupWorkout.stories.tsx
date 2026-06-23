import type { Meta, StoryObj } from '@storybook/react';
import { Phone } from '@vez/ui';
import { SetupWorkout } from './SetupWorkout';

const meta: Meta<typeof SetupWorkout> = {
  title: 'Prototypes/Runna/CreateWorkout',
  component: SetupWorkout,
  decorators: [
    (Story) => {
      document.documentElement.setAttribute('data-theme', 'runna');
      return (
        <div style={{ display: 'flex', gap: '24px', padding: '32px', flexWrap: 'wrap' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof SetupWorkout>;

export const Empty: Story = {
  render: () => (
    <Phone frameColor="var(--palette-charcoal)">
      <SetupWorkout initialStep="empty" />
    </Phone>
  ),
};

export const ChooseStyle: Story = {
  render: () => (
    <Phone frameColor="var(--palette-charcoal)">
      <SetupWorkout initialStep="style" />
    </Phone>
  ),
};

export const SelectExercises: Story = {
  render: () => (
    <Phone frameColor="var(--palette-charcoal)">
      <SetupWorkout initialStep="exercises" />
    </Phone>
  ),
};

export const SetsAndReps: Story = {
  render: () => (
    <Phone frameColor="var(--palette-charcoal)">
      <SetupWorkout initialStep="setsreps" />
    </Phone>
  ),
};

export const Review: Story = {
  render: () => (
    <Phone frameColor="var(--palette-charcoal)">
      <SetupWorkout initialStep="review" />
    </Phone>
  ),
};
