import type { Meta, StoryObj } from '@storybook/react';
import { Phone } from '@vez/ui';
import { AdhocWorkout } from './AdhocWorkout';
import { DoWorkout } from './DoWorkout';

const meta: Meta = {
  title: 'Prototypes/Runna/DoWorkout',
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

export const Overview: StoryObj = {
  render: () => (
    <Phone frameColor="var(--palette-charcoal)">
      <DoWorkout initialState="overview" />
    </Phone>
  ),
};

export const Tracking: StoryObj = {
  render: () => (
    <Phone frameColor="var(--palette-charcoal)">
      <DoWorkout initialState="running" />
    </Phone>
  ),
};

export const Finish: StoryObj = {
  render: () => (
    <Phone frameColor="var(--palette-charcoal)">
      <DoWorkout initialState="finish" />
    </Phone>
  ),
};

export const FreeWorkoutToday: StoryObj = {
  render: () => (
    <Phone frameColor="var(--palette-charcoal)">
      <AdhocWorkout initialState="today" />
    </Phone>
  ),
};

export const FreeWorkoutLogging: StoryObj = {
  render: () => (
    <Phone frameColor="var(--palette-charcoal)">
      <AdhocWorkout initialState="logging" />
    </Phone>
  ),
};
