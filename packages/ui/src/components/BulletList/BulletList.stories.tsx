import type { Meta, StoryObj } from '@storybook/react';
import { BulletList } from './BulletList';

const meta: Meta<typeof BulletList> = {
  title: 'Content/BulletList',
  component: BulletList,
};

export default meta;
type Story = StoryObj<typeof BulletList>;

export const Default: Story = {
  args: {
    items: [
      { heading: 'Users didn’t understand batches:', body: 'and for most users, batches didn’t matter.' },
      { heading: 'The system told users there were errors but didn’t help them fix them:', body: 'no direct links to problematic workers, no clear guidance.' },
      { body: 'Users were leaving Finity constantly: checking pension provider systems, cross-referencing data.' },
    ],
  },
};
