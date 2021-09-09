import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { ErrorIcon } from '~/components/icons';

export default function DenyUser() {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid
        item
        xs={11}
        sm={8}
        md={8}
        container
        alignItems="center"
        className={classes.alert}
      >
        <Grid item xs={2} md={1}>
          <ErrorIcon className={classes.alertIcon} />
        </Grid>
        <Grid item xs={10} md={11}>
          <Typography component="h1" className={classes.alertText}>
            Somente pacientes negados podem atualizar o cadastro!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
