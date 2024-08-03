import { Provider } from 'react-redux';
import { store } from '../app/store';
import Header from '../components/header/header';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
