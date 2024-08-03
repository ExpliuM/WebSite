import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../app/store';
import { Box, BoxProps } from '@mui/material';
import FlexBox from '../base-components/flex-box/flex-box';

const meta = {
  title: 'FlexBox',
  component: FlexBox,
  tags: ['autodocs'],
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof FlexBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const childrenBoxProps: BoxProps = {
  display: 'flex',
  justifyContent: 'center',
  sx: { border: '1px solid black', backgroundColor: '#606060' },
  textAlign: 'center',
  width: '100%',
};

const children = [...Array(5).keys()].map((key) => (
  <Box {...childrenBoxProps}>{key}</Box>
));

export const Row: Story = { args: { children, direction: 'row' } };
export const Column: Story = { args: { children, direction: 'column' } };
