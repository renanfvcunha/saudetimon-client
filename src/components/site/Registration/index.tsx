import { Box, Grid } from '@material-ui/core';
import { FC } from 'react';

import RegisterImage from '~/components/site/RegisterImage';
import RegistrationForm from '~/components/site/RegistrationForm';

import { IComorbidity, IGroup, PatientSelf } from '~/interfaces';

type Props = {
  title: string;
  groups: IGroup[];
  comorbidities: IComorbidity[];
  idCategory?: string;
  patientData?: PatientSelf;
};

const Registration: FC<Props> = ({
  title,
  groups,
  comorbidities,
  idCategory,
  patientData,
}) => {
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
            title={title}
            groups={groups}
            comorbidities={comorbidities}
            idCategory={idCategory}
            patientData={patientData}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Registration;
