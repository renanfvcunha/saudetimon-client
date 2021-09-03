import { ReactNode } from 'react';
import useStyles from './styles';

type Props = {
  children: ReactNode;
};

export default function Main({ children }: Props) {
  const classes = useStyles();

  return <main className={classes.main}>{children}</main>;
}
