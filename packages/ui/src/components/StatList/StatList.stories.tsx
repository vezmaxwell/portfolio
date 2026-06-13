import type { Meta, StoryObj } from '@storybook/react';
import { StatList } from './StatList';

const meta: Meta<typeof StatList> = {
  title: 'Content/StatList',
  component: StatList,
};

export default meta;
type Story = StoryObj<typeof StatList>;

export const Team: Story = {
  args: {
    title: 'Team',
    items: [
      { label: 'Product', value: '1' },
      { label: 'Engineering', value: '2-3' },
      { label: 'Design', value: '1' },
    ],
  },
};
