import type { Meta, StoryObj } from '@storybook/react';
import { Quote } from './Quote';

const meta: Meta<typeof Quote> = {
  title: 'Content/Quote',
  component: Quote,
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Large: Story = {
  args: {
    children: 'Hella useful',
    attribution: 'A real user',
    tint: 'tint-2',
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    children: 'Doctors found the insights valuable, enabling them to confidently re-prescribe.',
    tint: 'tint-1',
    size: 'md',
  },
};
