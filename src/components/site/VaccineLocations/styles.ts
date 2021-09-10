import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem 0',
  },
  cardContainer: {
    padding: '0 0.5rem',
  },
  cardItem: {
    padding: '0.5rem',
  },
  fullHeight: {
    height: '100%',
  },
  textUpper: {
    textTransform: 'uppercase',
  },
}));

export default useStyles;
