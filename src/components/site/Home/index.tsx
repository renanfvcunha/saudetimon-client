import { Box, Grid } from '@material-ui/core';

import RegisterImage from '~/components/site/RegisterImage';
import Infos from './Infos';
import Menu from './Menu';

import useStyles from './styles';

export default function Home() {
  const classes = useStyles();

  return (
    <Box component="section">
      <RegisterImage />
      <Grid container className={classes.mb1}>
        <Grid item container xs={12} md={6} className={classes.padVert1}>
          <Grid item xs={false} md={4} />
          <Grid item xs={12} md={8}>
            <Infos />
          </Grid>
        </Grid>
        <Grid item container xs={12} md={6} className={classes.padVert1}>
          <Grid item xs={12} md={8}>
            <Menu />
          </Grid>
          <Grid item xs={false} md={4} />
        </Grid>
      </Grid>
    </Box>
  );
}
