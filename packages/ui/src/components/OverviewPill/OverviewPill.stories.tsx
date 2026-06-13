import type { Meta, StoryObj } from '@storybook/react';
import { OverviewPill } from './OverviewPill';

const meta: Meta<typeof OverviewPill> = {
  title: 'Layout/OverviewPill',
  component: OverviewPill,
};

export default meta;
type Story = StoryObj<typeof OverviewPill>;

export const Default: Story = {
  args: {
    bordered: true,
    tint: 'tint-4',
    cta: { label: 'Read it here', href: '#' },
    children: (
      <p>
        If you’d like to hear more about my <strong>leadership experience</strong>, I’ve written
        about it outside of my case studies in an overview.
      </p>
    ),
  },
};
