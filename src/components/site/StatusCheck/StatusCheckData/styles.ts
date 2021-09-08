import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mt1: {
    marginTop: '1rem',
  },
  mt2: {
    marginTop: '2rem',
  },
  statusContainerTitle: {
    fontSize: 28,
    color: '#848484',
    fontWeight: 500,
  },
  bgBlue: {
    backgroundColor: '#73c2cf',
  },
  bgYellow: {
    backgroundColor: '#b7ba1b',
  },
  bgGreen: {
    backgroundColor: '#83bb72',
  },
  bgRed: {
    backgroundColor: '#cf1312',
  },
  statusContainer: {
    padding: '0 1rem 0.5rem',
  },
  statusText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 700,
  },
  statusHelperText: {
    color: '#fff',
    fontWeight: 500,
  },
  statusMessage: {
    fontSize: 24,
    fontWeight: 700,
    color: '#777',
    lineHeight: 1.25,
  },
}));

export default useStyles;
