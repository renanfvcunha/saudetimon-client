import { forwardRef } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import { CloseIcon } from '~/components/icons';
import useStyles from './styles';

type Props = {
  fieldName: string;
  refClick: () => void;
  mandatory?: boolean;
};

const AttachmentField = forwardRef<HTMLInputElement, Props>(
  ({ fieldName, refClick, mandatory = false }, ref) => {
    const classes = useStyles();

    return (
      <Grid item xs={12} sm={6} md={3} container direction="column">
        <Grid item className={classes.buttonContainer}>
          <input
            type="file"
            accept="image/*, application/pdf"
            hidden
            ref={ref}
          />
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={refClick}
            className={classes.button}
            size="small"
          >
            {fieldName}
            {mandatory && <> *</>}
          </Button>
        </Grid>

        <Grid item container className={classes.fileNameContainer}>
          <Grid item xs={11}>
            <Typography component="small" className={classes.fileName}>
              Comprovante.png
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <CloseIcon
              className={classes.closeIcon}
              // eslint-disable-next-line no-console
              onClick={() => console.log(fieldName)}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
);

export default AttachmentField;
