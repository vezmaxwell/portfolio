import type { Meta, StoryObj } from '@storybook/react';
import { BalloonCard } from './BalloonCard';

const meta: Meta<typeof BalloonCard> = {
  title: 'Layout/BalloonCard',
  component: BalloonCard,
  parameters: { layout: 'centered' },
  argTypes: {
    tint: { control: 'inline-radio', options: ['tint-1', 'tint-2', 'tint-3', 'tint-4'] },
  },
};

export default meta;
type Story = StoryObj<typeof BalloonCard>;

export const Default: Story = {
  args: {
    tint: 'tint-1',
    title: 'Developing trust for doctors by building with empathy for patients.',
    subtitle: 'Symptom monitoring with the Script Assist patient app.',
    tags: ['Healthtech', 'Telehealth', 'SaaS', 'B2B'],
    href: '#',
    // eslint-disable-next-line no-alert
    onActivate: () => window.alert('Pop! → navigate'),
  },
  render: (args) => (
    <div style={{ width: 480, maxWidth: '100%' }}>
      <BalloonCard {...args} />
    </div>
  ),
};
