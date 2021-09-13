import { FC } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

import { IDoubt } from '~/interfaces';

import nl2br from '~/utils/nl2br';

type Props = {
  frequentDoubts: IDoubt[];
};

const FrequentDoubts: FC<Props> = ({ frequentDoubts }) => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Typography component="h1" variant="h4" align="center">
        Dúvidas Frequentes
      </Typography>

      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.questionContainer}
      >
        {frequentDoubts.map((freqDbt, i) => (
          <Grid
            item
            xs={12}
            sm={9}
            md={6}
            className={classes.questionItem}
            key={freqDbt.id.toString()}
          >
            <Typography
              component="h4"
              variant="h5"
              className={classes.question}
            >
              {`${i + 1}. ${freqDbt.question}`}
            </Typography>

            {nl2br(freqDbt.answer, classes.answer)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FrequentDoubts;
