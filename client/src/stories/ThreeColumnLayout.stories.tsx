import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '../app/store';
import { Box, BoxProps } from '@mui/material';
import ThreeColumnLayout from '../base-components/tree-column-layout/three-column-layout';
import { getRandomColor } from '../utils';
import { cloneDeep } from 'lodash';

const meta = {
  title: 'ThreeColumnLayout',
  component: ThreeColumnLayout,
  tags: ['autodocs'],
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof ThreeColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const childrenBoxProps: BoxProps = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  bgcolor: 'white',
  sx: {
    border: '1px solid black',
    height: '3rem',
    verticalAlign: 'middle',
    width: '100%',
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
    middleChildren: children.slice(1, 2),
    rightChildren: children.slice(2, 3),
  },
};

export const Variation0: Story = {
  args: {
    leftChildren: children.slice(0, 1),
    middleChildren: children.slice(1, 2),
    rightChildren: children.slice(2, 3),
    variation: 0,
  },
};

export const Variation1: Story = {
  args: {
    leftChildren: children.slice(0, 1),
    middleChildren: children.slice(1, 2),
    rightChildren: children.slice(2, 3),
    variation: 1,
  },
};

export const Variation2: Story = {
  args: {
    leftChildren: children.slice(0, 1),
    middleChildren: children.slice(1, 2),
    rightChildren: children.slice(2, 3),
    variation: 2,
  },
};
