import type { Meta, StoryObj } from '@storybook/react';
import { Phone } from './Phone';

const meta: Meta<typeof Phone> = {
  title: 'Phone/Phone',
  component: Phone,
};

export default meta;
type Story = StoryObj<typeof Phone>;

const SampleScreen = () => (
  <div style={{ padding: 16, fontFamily: 'var(--font-family)' }}>
    <h2 style={{ fontFamily: 'var(--font-family-display)', margin: '8px 0 4px' }}>Hello</h2>
    <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 14 }}>
      Anything in here renders between the status bar and the home indicator.
    </p>
  </div>
);

export const Default: Story = {
  args: { children: <SampleScreen /> },
};

export const NoStatusBar: Story = {
  args: { hideStatusBar: true, children: <SampleScreen /> },
};

export const NoHomeIndicator: Story = {
  args: { hideHomeIndicator: true, children: <SampleScreen /> },
};
