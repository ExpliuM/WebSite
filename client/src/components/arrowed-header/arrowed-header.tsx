import {
  Box,
  BoxProps,
  Button,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from 'react-icons/hi';
import { ElementType, useState } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { PropsOf } from '@emotion/react';

export type Options = {
  text: string;
  Component: ElementType;
  componentProps: PropsOf<ElementType>;
};

export type ArrowedHeaderEventHandler = (selected: number) => void;

export type ArrowedHeaderProps = Omit<BoxProps, 'onClick'> & {
  dataArray: Array<Options>;
  iconProps?: IconBaseProps;
  onClick?: ArrowedHeaderEventHandler;
  value?: number | undefined;
};

const SELECTED_COLOR = 'primary.light';
const COLOR = 'primary.main';

const ArrowedHeader = (props: ArrowedHeaderProps) => {
  const { dataArray, iconProps, onClick, value, ...otherProps } = props;

  const [selected, setSelected] = useState<number>(value || 0);

  const dataLen = dataArray.length;

  const handleClicked = (selected: number) => () => {
    setSelected(selected);
    onClick && onClick(selected);
  };

  const handleLeftArrowClick = (): void => {
    if (value !== null) {
      setSelected((dataLen + selected - 1) % dataLen);
    }
    onClick && onClick((dataLen + selected - 1) % dataLen);
  };

  const handleRightArrowClick = (): void => {
    if (value !== null) {
      setSelected((selected + 1) % dataLen);
    }
    onClick && onClick((selected + 1) % dataLen);
  };

  return (
    <Box {...otherProps}>
      <IconButton aria-label="left" onClick={handleLeftArrowClick}>
        <HiOutlineArrowCircleLeft {...iconProps} />
      </IconButton>
      <Grid container justifyContent="center" spacing={0.5}>
        {dataArray.map(({ text, Component, componentProps }, index) => (
          <Grid item key={index}>
            <Button
              sx={{
                backgroundColor: value === index ? SELECTED_COLOR : COLOR,
              }}
              variant="contained"
              onClick={handleClicked(index)}
            >
              {text ? (
                <Typography variant="subtitle1">{text}</Typography>
              ) : (
                Component && <Component {...componentProps} />
              )}
            </Button>
          </Grid>
        ))}
      </Grid>
      <IconButton aria-label="right" onClick={handleRightArrowClick}>
        <HiOutlineArrowCircleRight {...iconProps} />
      </IconButton>
    </Box>
  );
};

export default ArrowedHeader;
