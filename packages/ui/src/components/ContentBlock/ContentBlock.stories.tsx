import type { Meta, StoryObj } from '@storybook/react';
import { ContentBlock } from './ContentBlock';

const meta: Meta<typeof ContentBlock> = {
  title: 'Content/ContentBlock',
  component: ContentBlock,
};

export default meta;
type Story = StoryObj<typeof ContentBlock>;

export const Default: Story = {
  args: {
    title: 'Overview',
    tint: 'tint-1',
    children: (
      <p>
        Finity’s product strength lies in its payroll engine: fast, powerful and reliable. But
        before they get there, a few things need to happen.
      </p>
    ),
  },
};

export const Outlined: Story = {
  args: {
    title: 'The approach required',
    tint: 'tint-2',
    outlined: true,
    children: <p>Outlined cards are used for less-emphasised intros.</p>,
  },
};

export const LargeHeadline: Story = {
  args: {
    title: 'Reducing pension uncertainty through a re-design of critical flow',
    eyebrow: 'Case study',
    headlineSize: 'lg',
    tint: 'tint-4',
    outlined: true,
  },
};
