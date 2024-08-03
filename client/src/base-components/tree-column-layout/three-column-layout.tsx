import { Grid, GridProps } from '@mui/material';

const variationMap = [
  [4, 4, 4],
  [3, 3, 6],
  [6, 3, 3],
];

export type ThreeColumnLayoutProps = GridProps & {
  leftChildren?: JSX.Element[] | JSX.Element[];
  middleChildren?: JSX.Element[] | JSX.Element[];
  rightChildren?: JSX.Element[] | JSX.Element[];
  variation?: 0 | 1 | 2;
};

export type ThreeColumnLayoutComponent = (
  props: ThreeColumnLayoutProps,
) => React.JSX.Element;

const ThreeColumnLayout: ThreeColumnLayoutComponent = (
  props: ThreeColumnLayoutProps,
) => {
  const {
    rightChildren,
    middleChildren,
    leftChildren,
    variation = 0,
    ...other
  } = props;

  const [xs1, xs2, xs3] = variationMap[variation];
  const gridProps: GridProps = { ...other };

  return (
    <Grid container {...gridProps}>
      <Grid xs={xs1}>{leftChildren}</Grid>
      <Grid xs={xs2}>{middleChildren}</Grid>
      <Grid xs={xs3}>{rightChildren}</Grid>
    </Grid>
  );
};

export default ThreeColumnLayout;
