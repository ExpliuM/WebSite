import { Box, BoxProps, Card, CardProps } from '@mui/material';

import { IEducation } from '../data/cv.types';
import EducationCardContent, {
  EducationCardContentProps,
} from './cards/education-card-content';

export type EducationProps = BoxProps & {
  educations: IEducation[];
};

export type EducationComponent = (props: EducationProps) => React.JSX.Element;

const Education = (props: EducationProps) => {
  const { educations, ...otherProps } = props;

  const cardProps: CardProps = {
    sx: {
      backgroundColor: 'primary.light',
      borderRadius: '1rem',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
  };

  const educationCardContentProps: EducationCardContentProps = {
    educations,
    sx: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      margin: '0.5rem',
    },
  };

  return (
    <Box {...otherProps}>
      <Card {...cardProps}>
        <EducationCardContent {...educationCardContentProps} />
      </Card>
    </Box>
  );
};

export default Education;
