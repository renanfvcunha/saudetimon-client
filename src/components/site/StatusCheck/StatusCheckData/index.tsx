import { FC } from 'react';
import Link from 'next/link';
import { Button, Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './styles';

import { StatusCheck } from '~/interfaces';

type Props = {
  statusCheck: StatusCheck;
};

const StatusCheckData: FC<Props> = ({ statusCheck }) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.mt2}
      >
        <Grid item>
          <Typography component="h4" className={classes.statusContainerTitle}>
            Status:
          </Typography>
        </Grid>

        <Grid
          item
          xs={11}
          sm={8}
          md={6}
          container
          direction="column"
          alignItems="center"
          className={clsx(classes.statusContainer, {
            [classes.bgBlue]:
              statusCheck.patient.patientStatus.status.status === 'Em Análise',
            [classes.bgYellow]:
              statusCheck.patient.patientStatus.status.status ===
              'Pré-Aprovado',
            [classes.bgGreen]:
              statusCheck.patient.patientStatus.status.status === 'Aprovado',
            [classes.bgRed]:
              statusCheck.patient.patientStatus.status.status === 'Negado',
          })}
        >
          <Typography component="span" className={classes.statusText}>
            {statusCheck.patient.patientStatus.status.status}
          </Typography>

          <Typography component="span" className={classes.statusHelperText}>
            {statusCheck.patient.patientStatus.status.message}
          </Typography>
        </Grid>

        {statusCheck.patient.patientStatus.message && (
          <Grid item xs={11} sm={8} md={6} className={classes.mt1}>
            <Typography component="span" className={classes.statusMessage}>
              {statusCheck.patient.patientStatus.message}
            </Typography>
          </Grid>
        )}
      </Grid>

      {statusCheck.patient.patientStatus.status.status === 'Negado' && (
        <Link href={`/atualizar/${statusCheck.patient.cpf}`}>
          <a>
            <Grid container justifyContent="center" className={classes.mt1}>
              <Grid item xs={10} sm={6} md={4}>
                <Button variant="contained" color="primary" fullWidth>
                  Atualizar Cadastro
                </Button>
              </Grid>
            </Grid>
          </a>
        </Link>
      )}
    </>
  );
};

export default StatusCheckData;
