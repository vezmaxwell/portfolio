import type { Meta, StoryObj } from '@storybook/react';
import { StatusBar } from './StatusBar';

const meta: Meta<typeof StatusBar> = {
  title: 'Phone/StatusBar',
  component: StatusBar,
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
type Story = StoryObj<typeof StatusBar>;

export const Default: Story = {
  args: { time: '9:41' },
};
