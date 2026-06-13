import type { Meta, StoryObj } from '@storybook/react';
import { PhoneStrip } from './PhoneStrip';

const meta: Meta<typeof PhoneStrip> = {
  title: 'Content/PhoneStrip',
  component: PhoneStrip,
};

export default meta;
type Story = StoryObj<typeof PhoneStrip>;

export const Default: Story = {
  args: {
    tint: 'tint-1-strong' as never,
    screens: [
      { src: '/assets/script-assist/checkin-1.png', alt: 'Check-in 1' },
      { src: '/assets/script-assist/checkin-2.png', alt: 'Check-in 2' },
      { src: '/assets/script-assist/checkin-3.png', alt: 'Check-in 3' },
      { src: '/assets/script-assist/checkin-4.png', alt: 'Check-in 4' },
    ],
  },
};
