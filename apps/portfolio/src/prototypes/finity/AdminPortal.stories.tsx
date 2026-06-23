import type { Meta, StoryObj } from '@storybook/react';
import { AdminPortal } from './AdminPortal';

const meta: Meta<typeof AdminPortal> = {
  title: 'Prototypes/Finity/AdminPortal',
  component: AdminPortal,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      document.documentElement.setAttribute('data-theme', 'finity');
      return Story();
    },
  ],
};

export default meta;
type Story = StoryObj<typeof AdminPortal>;

export const Default: Story = {};
