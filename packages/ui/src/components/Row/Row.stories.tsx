import type { Meta, StoryObj } from '@storybook/react';
import { Row } from './Row';

const meta: Meta<typeof Row> = {
  title: 'Layout/Row',
  component: Row,
};

export default meta;
type Story = StoryObj<typeof Row>;

const block = (label: string, tint: string) => (
  <div
    style={{
      background: `var(--color-${tint})`,
      borderRadius: 16,
      padding: 24,
    }}
  >
    {label}
  </div>
);

export const Default: Story = {
  render: () => (
    <Row>
      {block('Left', 'tint-1')}
      {block('Right', 'tint-2')}
    </Row>
  ),
};
