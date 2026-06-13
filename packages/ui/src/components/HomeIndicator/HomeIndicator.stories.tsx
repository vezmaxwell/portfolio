import type { Meta, StoryObj } from '@storybook/react';
import { HomeIndicator } from './HomeIndicator';

const meta: Meta<typeof HomeIndicator> = {
  title: 'Phone/HomeIndicator',
  component: HomeIndicator,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ width: 375, background: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HomeIndicator>;

export const Default: Story = {};
