import { ReactNode } from 'react';

import useStyles from './styles';

type Props = {
  children: ReactNode;
};

export default function Background({ children }: Props) {
  const classes = useStyles();

  return <div className={classes.background}>{children}</div>;
}
