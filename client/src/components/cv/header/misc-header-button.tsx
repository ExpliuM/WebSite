import { Typography, TypographyProps } from '@mui/material';
import { VscSymbolMisc } from 'react-icons/vsc';

import IconBox, { IconBoxProps } from '../../icon-box/icon-box';

export type MiscHeaderButtonProps = {
  iconBoxProps: IconBoxProps;
  typographyProps: TypographyProps;
};

const MiscHeaderButton = (props: MiscHeaderButtonProps) => {
  const { iconBoxProps, typographyProps } = props;
  return (
    <IconBox Icon={VscSymbolMisc} {...iconBoxProps}>
      <Typography {...typographyProps}>Misc</Typography>
    </IconBox>
  );
};

export default MiscHeaderButton;
