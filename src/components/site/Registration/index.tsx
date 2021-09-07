import { Box, Grid } from '@material-ui/core';

import RegisterImage from '~/components/site/RegisterImage';
import RegistrationForm from '~/components/site/RegistrationForm';

import { IComorbidity, IGroup } from '~/interfaces';

type Props = {
  groups: IGroup[];
  comorbidities: IComorbidity[];
};

export default function Registration({ groups, comorbidities }: Props) {
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
          <RegistrationForm
            title="Cadastro Geral"
            groups={groups}
            comorbidities={comorbidities}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
