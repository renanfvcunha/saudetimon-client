import { ChangeEvent, forwardRef } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import { CloseIcon } from '~/components/icons';
import useStyles from './styles';

type Props = {
  fieldName: string;
  fieldSlug: string;
  refClick: () => void;
  setFile: (e: ChangeEvent<HTMLInputElement>) => void;
  clearFile: (fieldSlug: string) => void;
  field?: File;
  mandatory?: boolean;
};

const AttachmentField = forwardRef<HTMLInputElement, Props>(
  (
    {
      fieldName,
      fieldSlug,
      refClick,
      setFile,
      clearFile,
      field,
      mandatory = false,
    },
    ref
  ) => {
    const classes = useStyles();

    return (
      <Grid item xs={12} sm={6} md={3} container direction="column">
        <Grid item className={classes.buttonContainer}>
          <input
            name={fieldSlug}
            type="file"
            accept="image/*, application/pdf"
            hidden
            ref={ref}
            onChange={setFile}
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

        {field && (
          <Grid item container className={classes.fileNameContainer}>
            <Grid item xs={11}>
              <Typography component="small" className={classes.fileName}>
                {field.name}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <CloseIcon
                className={classes.closeIcon}
                onClick={() => clearFile(fieldSlug)}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    );
  }
);

export default AttachmentField;
