import { FC } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import { IVaccineLocation } from '~/interfaces';

import useStyles from './styles';

type Props = {
  vaccineLocations: IVaccineLocation[];
};

const VaccineLocations: FC<Props> = ({ vaccineLocations }) => {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Typography component="h1" variant="h4" align="center">
        Locais de Vacinação
      </Typography>

      <Grid container className={classes.cardContainer}>
        {vaccineLocations.map((vacLoc) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className={classes.cardItem}
            key={vacLoc.id.toString()}
          >
            <Card className={classes.fullHeight}>
              <CardActionArea onClick={() => window.open(vacLoc.url, '_blank')}>
                <CardMedia
                  component="img"
                  alt={vacLoc.name}
                  height="140"
                  image={`${process.env.NEXT_PUBLIC_API_URL}/uploads/vacLocPics/${vacLoc.picture}`}
                  title={vacLoc.name}
                />
              </CardActionArea>
              <CardContent>
                <Typography component="h2" variant="h5" gutterBottom>
                  {vacLoc.name}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                  className={classes.textUpper}
                >
                  {vacLoc.helperText}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VaccineLocations;
