import { Grid } from '@material-ui/core';

import useStyles from './styles';

export default function RegisterImage() {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.container}
    >
      <img
        src="assets/images/registerImage.png"
        alt="Figurinha de uma pessoa sendo vacinada e ao lado escrito 'Cadastro de vacinação contra covid-19'"
        className={classes.image}
      />
    </Grid>
  );
}
