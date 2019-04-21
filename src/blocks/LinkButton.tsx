import React from 'react';

import Button, { ButtonProps } from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

interface linkButtonProps extends ButtonProps {
  to: string;
  replace?: boolean;
}

const LinkButton: React.SFC<linkButtonProps> = (props: linkButtonProps) => (
  <Button {...props} component={Link as any} />
)

export default LinkButton;