import { Box, Grid } from '@material-ui/core';

import RegisterImage from '~/components/site/RegisterImage';
import Infos from './Infos';

export default function Home() {
  return (
    <Box component="section">
      <RegisterImage />
      <Grid container>
        <Grid item container xs={12} md={6} style={{ padding: '0 1rem' }}>
          <Grid item xs={false} md={5} />
          <Grid item xs={12} md={7}>
            <Infos />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          Menu
        </Grid>
      </Grid>
    </Box>
  );
}
