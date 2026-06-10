import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: { control: 'select', options: ['default', 'elevated', 'flat'] },
    padding: { control: 'select', options: ['none', 'sm', 'md'] },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Simple: Story = {
  args: { variant: 'default', padding: 'md' },
  render: (args) => (
    <Card {...args}>
      <p style={{ margin: 0, fontFamily: 'system-ui', color: 'var(--color-text)' }}>
        A simple card with padding and a border.
      </p>
    </Card>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Card style={{ maxWidth: 400 } as any}>
      <CardHeader title="Card title" subtitle="Optional supporting text" />
      <CardBody>
        <p style={{ margin: 0, fontFamily: 'system-ui', fontSize: 14, color: 'var(--color-text)' }}>
          Card body content goes here. This area can hold any child elements.
        </p>
      </CardBody>
      <CardFooter>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button size="sm">Save</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" style={{ maxWidth: 360 } as any}>
      <CardHeader title="Elevated card" subtitle="No border, shadow only" />
      <CardBody>
        <p style={{ margin: 0, fontFamily: 'system-ui', fontSize: 14, color: 'var(--color-text)' }}>
          Uses box-shadow instead of a border for a floating appearance.
        </p>
      </CardBody>
    </Card>
  ),
};
