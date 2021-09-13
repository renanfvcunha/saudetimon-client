import { Grid } from '@material-ui/core';
import { FC } from 'react';

import useStyles from './styles';

const RegisterImage: FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.container}
    >
      <img
        src="/assets/images/registerImage.png"
        alt="Figurinha de uma pessoa sendo vacinada e ao lado escrito 'Cadastro de vacinação contra covid-19'"
        className={classes.image}
      />
    </Grid>
  );
};

export default RegisterImage;
