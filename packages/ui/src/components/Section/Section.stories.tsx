import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: { spacing: 'md' },
  render: (args) => (
    <Section {...args}>
      <p>Section contents.</p>
    </Section>
  ),
};

export const Tinted: Story = {
  args: { spacing: 'lg', background: 'var(--color-tint-1)' },
  render: (args) => (
    <Section {...args}>
      <p>Section with a tinted background.</p>
    </Section>
  ),
};
