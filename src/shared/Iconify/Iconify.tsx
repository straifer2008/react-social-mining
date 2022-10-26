import React from 'react';
import { Icon } from '@iconify/react';
import { Box, BoxProps, SxProps, Theme } from "@mui/material";

interface IIconifyProps extends BoxProps {
    icon: string;
    sx?: SxProps<Theme>;
}

export const Iconify: React.FC<IIconifyProps> = ({
  icon,
  sx = {},
  ...other
}): JSX.Element => (
  <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />
);
