import type { Meta, StoryObj } from '@storybook/react';
import { SiteNav } from './SiteNav';

const meta: Meta<typeof SiteNav> = {
  title: 'Navigation/SiteNav',
  component: SiteNav,
};

export default meta;
type Story = StoryObj<typeof SiteNav>;

export const Default: Story = {
  args: {
    items: [
      { label: 'work', href: '#work' },
      { label: 'blurb', href: '#blurb' },
      { label: 'me', href: '#me' },
      { label: 'hello', href: '#hello' },
    ],
  },
};
