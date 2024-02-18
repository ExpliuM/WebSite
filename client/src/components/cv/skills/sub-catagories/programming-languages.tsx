import { BiCode } from 'react-icons/bi';
import { Typography } from '@mui/material';
import IconBox, { IconBoxProps } from '../../../icon-box/icon-box';

export type ProgrammingLanguagesProps = IconBoxProps & {
  programmingLanguages: string[];
};

const ProgrammingLanguages = (props: ProgrammingLanguagesProps) => {
  const { programmingLanguages, ...otherProps } = props;

  return (
    <IconBox Icon={BiCode} {...otherProps}>
      <Typography color="text.primary" variant="subtitle1">
        Programming Languages:
      </Typography>{' '}
      <Typography color="text.primary" variant="body1">
        {programmingLanguages.join(', ')}.
      </Typography>
    </IconBox>
  );
};

export default ProgrammingLanguages;
