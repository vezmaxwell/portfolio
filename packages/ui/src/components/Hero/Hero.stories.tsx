import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Layout/Hero',
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    headline: 'Howdy',
    body: (
      <>
        <p>I'm Vez, and I'm a Product Designer. Led by curiosity, fuelled by coffee.</p>
        <p>Everything co-designed with my dog, Mango.</p>
      </>
    ),
    meta: 'Londoner temporarily in Northern Ireland',
    media: (
      <div
        style={{
          background: 'var(--color-tint-1)',
          borderRadius: 'var(--radius-lg)',
          height: 540,
          width: 400,
        }}
      />
    ),
  },
};
