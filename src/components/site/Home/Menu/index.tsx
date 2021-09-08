import { Avatar, Grid, Typography } from '@material-ui/core';
import Link from 'next/link';

import useStyles from './styles';

export default function Menu() {
  const classes = useStyles();

  return (
    <Grid component="nav" container direction="column">
      <Link href="/acamados">
        <a className={classes.tdNone}>
          <Grid item container alignItems="center" className={classes.menuItem}>
            <Grid item xs={3} className={classes.pl15}>
              <Avatar
                src="assets/images/acamado.png"
                alt="Figurinha de uma pessoa acamada"
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography component="span" className={classes.menuItemText}>
                Cadastro de pacientes acamados
              </Typography>
            </Grid>
          </Grid>
        </a>
      </Link>

      <Link href="/cadastro">
        <a className={classes.tdNone}>
          <Grid item container alignItems="center" className={classes.menuItem}>
            <Grid item xs={3} className={classes.pl15}>
              <Avatar
                src="assets/images/celular.png"
                alt="Figurinha de uma pessoa mexendo no celular"
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography component="span" className={classes.menuItemText}>
                Cadastro Geral por Grupos
              </Typography>
            </Grid>
          </Grid>
        </a>
      </Link>

      <Link href="/checagem">
        <a className={classes.tdNone}>
          <Grid item container alignItems="center" className={classes.menuItem}>
            <Grid item xs={3} className={classes.pl15}>
              <Avatar
                src="assets/images/checagem.png"
                alt="Figurinha de uma pessoa mexendo no celular com um ícone verde de checagem"
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography component="span" className={classes.menuItemText}>
                Verifique o status da sua solicitação
              </Typography>
            </Grid>
          </Grid>
        </a>
      </Link>

      <Grid item container alignItems="center" className={classes.menuItem}>
        <Grid item xs={3} className={classes.pl15}>
          <Avatar
            src="assets/images/localVac.png"
            alt="Figurinha de uma seringa e um balão de localização"
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography component="span" className={classes.menuItemText}>
            Locais de Vacinação - Como Chegar
          </Typography>
        </Grid>
      </Grid>

      <Grid item container alignItems="center" className={classes.menuItem}>
        <Grid item xs={3} className={classes.pl15}>
          <Avatar
            src="assets/images/duvidas.png"
            alt="Figurinha de uma pessoa rodeada de pontos de interrogação"
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography component="span" className={classes.menuItemText}>
            Dúvidas Frequentes
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
