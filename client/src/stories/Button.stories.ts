import type { Meta, StoryObj } from '@storybook/react';
import ResetButton from '../components/tic-tac-toe/components/reset-button';

const meta = {
  title: 'ResetButton',
  component: ResetButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ResetButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {};

export const Large: Story = {};

export const Small: Story = {};
