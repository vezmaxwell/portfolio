import type { Meta, StoryObj } from '@storybook/react';
import { Browser } from './Browser';

const meta: Meta<typeof Browser> = {
  title: 'Layout/Browser',
  component: Browser,
};

export default meta;
type Story = StoryObj<typeof Browser>;

export const Default: Story = {
  args: {
    url: 'admin.finity.io/workers/onboarding',
    children: (
      <div style={{ padding: '24px', fontFamily: 'monospace' }}>
        Browser content area
      </div>
    ),
  },
};
