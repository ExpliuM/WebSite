import { Box, BoxProps, Typography } from '@mui/material';

import { TbIcons } from 'react-icons/tb';
import IconBox from '../components/icon-box/icon-box';

const Components = (props: BoxProps) => (
  <Box alignItems="center" display="flex" flexDirection="column" {...props}>
    <Typography color="text.primary" variant="h3">
      Components
    </Typography>
    <Typography color="text.primary" variant="body1">
      <Typography color="text.primary" paragraph>
        This page will contain in the future a list of cool components I
        implemented
      </Typography>
      <Typography color="text.primary" paragraph>
        IconBox:
        <IconBox color="text.primary" Icon={TbIcons}>
          TbIcons
        </IconBox>
      </Typography>
    </Typography>
  </Box>
);

export default Components;
