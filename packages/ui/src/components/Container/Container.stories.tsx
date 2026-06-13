import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: { size: 'xl' },
  render: (args) => (
    <Container {...args}>
      <div style={{ background: 'var(--color-tint-1)', padding: 24, borderRadius: 16 }}>
        Container size: {args.size}
      </div>
    </Container>
  ),
};
