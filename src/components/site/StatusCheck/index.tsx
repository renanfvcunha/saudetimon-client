import { FC, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from '@material-ui/core';

import useStyles from './styles';

import masks from '~/utils/masks';

import { StatusCheck as StatusCheckType } from '~/interfaces';

import { statusCheckReq } from '~/services/api';

import catchHandler, { Err } from '~/utils/catchHandler';

import StatusCheckData from './StatusCheckData';

const StatusCheck: FC = () => {
  const classes = useStyles();

  const [cpf, setCpf] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusCheck, setStatusCheck] = useState<StatusCheckType>();

  const getStatus = async () => {
    try {
      setLoading(true);

      const data = await statusCheckReq(masks.numberMask(cpf));

      setStatusCheck(data);
    } catch (err) {
      catchHandler(
        err as Err,
        'Não foi possível buscar o status. Tente novamente ou contate o suporte.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" className={classes.padVert1}>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={6} md={4} xl={3}>
          <TextField
            label="CPF"
            fullWidth
            value={cpf}
            onChange={(e) => setCpf(masks.cpfMask(e.target.value))}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.mt1}>
        <Grid item xs={10} sm={6} md={4} xl={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={getStatus}
          >
            Consultar
          </Button>
        </Grid>
      </Grid>

      {statusCheck ? (
        <StatusCheckData statusCheck={statusCheck} />
      ) : (
        loading && (
          <Grid container justifyContent="center" className={classes.mt2}>
            <CircularProgress />
          </Grid>
        )
      )}
    </Box>
  );
};

export default StatusCheck;
