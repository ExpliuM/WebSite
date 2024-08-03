import { Grid, GridProps } from '@mui/material';

const variationMap = [
  [6, 6],
  [4, 8],
  [8, 4],
];

export type TwoColumnLayoutProps = GridProps & {
  leftChildren?: JSX.Element[] | JSX.Element[];
  rightChildren?: JSX.Element[] | JSX.Element[];
  variation?: 0 | 1 | 2;
};

export type TwoColumnLayoutComponent = (
  props: TwoColumnLayoutProps,
) => React.JSX.Element;

const TwoColumnLayout: TwoColumnLayoutComponent = (
  props: TwoColumnLayoutProps,
) => {
  const { rightChildren, leftChildren, variation = 0, ...other } = props;

  const [xs1, xs2] = variationMap[variation];

  const gridProps: GridProps = { ...other };

  return (
    <Grid container {...gridProps}>
      <Grid xs={xs1}>{leftChildren}</Grid>
      <Grid xs={xs2}>{rightChildren}</Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
