import { FC } from 'react';

import useStyles from './styles';

const Background: FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.background}>{children}</div>;
};

export default Background;
