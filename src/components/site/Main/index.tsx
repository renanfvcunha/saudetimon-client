import { FC } from 'react';
import useStyles from './styles';

const Main: FC = ({ children }) => {
  const classes = useStyles();

  return <main className={classes.main}>{children}</main>;
};

export default Main;
