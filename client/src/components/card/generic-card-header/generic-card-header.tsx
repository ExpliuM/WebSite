import Avatar, { AvatarProps } from '@mui/material/Avatar';
import CardHeader, { CardHeaderProps } from '@mui/material/CardHeader';
import React, {
  DetailedHTMLProps,
  ElementType,
  ImgHTMLAttributes,
} from 'react';

const LOGO_HEIGHT = '30px';
const LOGO_WIDTH = '30px';

export type GenericCardHeaderProps = CardHeaderProps & {
  horizontalSubHeader?: string;
  horizontalTitle?: string;
  Logo?: string;
  sideways: boolean;
  verticalSubHeader?: string;
  verticalTitle?: string;
};

const GenericCardHeader: ElementType = (props: GenericCardHeaderProps) => {
  const {
    horizontalSubHeader,
    horizontalTitle,
    Logo,
    sideways,
    sx,
    verticalSubHeader,
    verticalTitle,
    ...otherProps
  } = props;

  // Props
  const title = sideways ? verticalTitle : horizontalTitle;
  const subHeader = sideways ? verticalSubHeader : horizontalSubHeader;
  const titleTypographyProps = {
    sx: sideways
      ? {
          textOrientation: 'sideways',
          writingMode: 'vertical-lr',
        }
      : null,
  };

  const avatarProps: AvatarProps = {
    sx: {
      marginLeft: sideways ? '16px' : null,
      marginBottom: sideways ? '0.5rem' : null,
      backgroundColor: '#FFF',
    },
  };

  const imgProps: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > = {
    src: Logo,
    alt: 'Logo',
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
  };

  return (
    <CardHeader
      avatar={
        <Avatar {...avatarProps}>
          <img {...imgProps} />
        </Avatar>
      }
      subheader={subHeader}
      sx={{
        display: 'flex',
        flexDirection: sideways ? 'column' : 'row',
        ...sx,
      }}
      title={title}
      titleTypographyProps={titleTypographyProps}
      {...otherProps}
    />
  );
};

export default GenericCardHeader;
