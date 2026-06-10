import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Email address', placeholder: 'you@example.com' },
};

export const WithHint: Story = {
  args: { label: 'Username', placeholder: 'yourname', hint: 'This will be your public handle.' },
};

export const WithError: Story = {
  args: { label: 'Email address', value: 'notanemail', error: 'Please enter a valid email.' },
};

export const Required: Story = {
  args: { label: 'Full name', placeholder: 'Vez Maxwell', required: true },
};

export const Disabled: Story = {
  args: { label: 'Account ID', value: 'acc_abc123', disabled: true },
};
