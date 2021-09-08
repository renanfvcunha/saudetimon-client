import Link from 'next/link';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={3}
          className={clsx([classes.rectangle, classes.bgYellow])}
        />
        <Grid
          item
          xs={3}
          className={clsx([classes.rectangle, classes.bgLtBlue])}
        />
        <Grid
          item
          xs={3}
          className={clsx([classes.rectangle, classes.bgGreen])}
        />
        <Grid
          item
          xs={3}
          className={clsx([classes.rectangle, classes.bgDkBlue])}
        />
      </Grid>

      <Grid container className={classes.images}>
        <Grid item xs={12} sm={1} className={classes.logo}>
          <Link href="http://timon.ma.gov.br/site/">
            <a target="_blank" rel="external">
              <img
                src="/assets/images/brasaoTimon.png"
                alt="Brasão Timon"
                className={classes.image}
              />
            </a>
          </Link>
        </Grid>

        <Grid item xs={12} sm={11} container justifyContent="center">
          <Link href="/">
            <a>
              <img
                src="/assets/images/logo.png"
                alt="Logo Saúde Timon 24h"
                className={classes.image}
              />
            </a>
          </Link>
        </Grid>
      </Grid>
    </header>
  );
}
