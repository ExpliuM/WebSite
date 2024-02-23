import type { Meta, StoryObj } from '@storybook/react';
import ResetButton from '../components/tic-tac-toe/components/reset-button';
import { Provider } from 'react-redux';
import { store } from '../app/store';

const meta = {
  title: 'ResetButton',
  component: ResetButton,
  tags: ['autodocs'],
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof ResetButton>;

// A super-simple mock of the state of the store
export const MockedState = {};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
