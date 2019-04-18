import React from 'react';

import Button, { ButtonProps } from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

interface LinkButtonProps extends ButtonProps {
  to: string;
  replace?: boolean;
}

const LinkButton = (props: LinkButtonProps) => (
  <Button {...props} component={Link as any} />
)

export default LinkButton;