import { Box, Grid } from '@material-ui/core';

import RegisterImage from '~/components/site/RegisterImage';
import RegistrationForm from '../RegistrationForm';

export default function Registration() {
  return (
    <Box component="section">
      <RegisterImage />

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ marginBottom: '1rem', padding: '0 1rem' }}
      >
        <Grid
          item
          container
          xs={12}
          sm={9}
          xl={6}
          style={{ backgroundColor: '#d0cece', borderRadius: 8 }}
        >
          <RegistrationForm title="Cadastro Geral" />
        </Grid>
      </Grid>
    </Box>
  );
}
