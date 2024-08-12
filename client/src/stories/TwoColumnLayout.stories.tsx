import type { Meta, StoryObj } from '@storybook/react';

import { store } from '../app/store';
import { Box, BoxProps } from '@mui/material';
import TwoColumnLayout from '../base-components/two-column-layout/two-column-layout';
import { getRandomColor } from '../utils';
import { cloneDeep } from 'lodash';
import { Provider } from 'react-redux';

const meta = {
  title: 'TwoColumnLayout',
  component: TwoColumnLayout,
  tags: ['autodocs'],
  decorators: [(story) => <Provider store={store}> {story()} </Provider>],
} satisfies Meta<typeof TwoColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const childrenBoxProps: BoxProps = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  sx: {
    backgroundColor: 'white',
    border: '1px solid black',
    width: '100%',
    height: '3rem',
  },
};

const children = [...Array(3).keys()].map((key) => {
  const localChildrenBoxProps = cloneDeep(childrenBoxProps);
  if (localChildrenBoxProps.bgcolor) {
    localChildrenBoxProps.bgcolor = getRandomColor();
  }
  return <Box {...localChildrenBoxProps}> {key} </Box>;
});

export const Primary: Story = {
  args: {
    leftChildren: children.slice(0, 1),
    rightChildren: children.slice(1, 2),
  },
};

export const Variation0: Story = {
  args: {
    leftChildren: children.slice(0, 1),
    rightChildren: children.slice(1, 2),
    variation: 0,
  },
};

export const Variation1: Story = {
  args: {
    leftChildren: children.slice(0, 1),
    rightChildren: children.slice(1, 2),
    variation: 1,
  },
};
export const Variation2: Story = {
  args: {
    leftChildren: children.slice(0, 1),
    rightChildren: children.slice(1, 2),
    variation: 2,
  },
};
