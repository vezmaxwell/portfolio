import type { Meta, StoryObj } from '@storybook/react';
import { SiteNav } from './SiteNav';

const meta: Meta<typeof SiteNav> = {
  title: 'Navigation/SiteNav',
  component: SiteNav,
};

export default meta;
type Story = StoryObj<typeof SiteNav>;

const ITEMS = [
  { label: 'work', href: '#work' },
  { label: 'blurb', href: '#blurb' },
  { label: 'me', href: '#me' },
  { label: 'hello', href: '#hello' },
];

export const Default: Story = {
  args: {
    items: ITEMS,
  },
};

/** Items in a single horizontal row with the brand centered between them. */
export const CenteredBrand: Story = {
  args: {
    items: ITEMS,
    brandPosition: 'center',
    brand: (
      <img
        src="/assets/shared/butterfly.png"
        alt="Vez Maxwell"
        className="vez-nav__logo"
      />
    ),
  },
};
