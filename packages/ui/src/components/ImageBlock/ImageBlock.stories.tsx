import type { Meta, StoryObj } from '@storybook/react';
import { ImageBlock } from './ImageBlock';

const meta: Meta<typeof ImageBlock> = {
  title: 'Content/ImageBlock',
  component: ImageBlock,
};

export default meta;
type Story = StoryObj<typeof ImageBlock>;

export const Default: Story = {
  args: {
    src: '/assets/finity/admin-1.png',
    alt: 'Finity admin screen',
    tint: 'tint-1',
  },
};
