import { Box, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

import { DotIcon } from '~/components/icons';

export default function Infos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="center">
        <Box className={classes.infoTitleBox}>
          <Typography component="span" className={classes.infoTitle}>
            Fique Atento
          </Typography>
        </Box>

        <Box className={classes.paragraphs}>
          <Typography className={classes.paragraph}>
            Bem-vindo ao cadastro para vacinação da COVID-19 de Timon.
          </Typography>
          <Typography className={classes.paragraph}>
            O novo sistema tem como objetivo ajudar a organizar e otimizar o
            plano de imunização da população com inovação e eficiência.
          </Typography>

          <br />

          <Typography className={classes.paragraph}>
            <DotIcon className={classes.icon} />
            Aqui você pode acompanhar o status do seu cadastro para vacinação na
            opção CHECAGEM.
          </Typography>

          <br />

          <Typography className={classes.paragraph}>
            <DotIcon className={classes.icon} />
            Saiba como chegar ao local de vacinação com apenas um clique.
          </Typography>

          <br />

          <Typography className={classes.paragraph}>
            Para o cidadão significa facilidade do cadastro através da ampliação
            dos canais online, além de mais informação e maior segurança na hora
            de receber a sua vacina.
          </Typography>
        </Box>
      </Grid>
    </div>
  );
}
