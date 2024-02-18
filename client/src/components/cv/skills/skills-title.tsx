import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';
import { GiSkills } from 'react-icons/gi';

export type TitleProps = BoxProps & {
  typographyProps?: TypographyProps;
};

const SkillsTitle = (props: TitleProps) => {
  const { typographyProps, ...otherProps } = props;

  // TODO: use IconBox here
  return (
    <Box {...otherProps}>
      <GiSkills size="1.5rem" />
      <Typography color="text.primary" variant="h6" {...typographyProps}>
        Skills
      </Typography>
    </Box>
  );
};

export default SkillsTitle;
