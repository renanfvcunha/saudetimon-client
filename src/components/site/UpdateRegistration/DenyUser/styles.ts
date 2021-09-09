import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '3rem',
  },
  alert: {
    backgroundColor: '#180605',
    padding: '0.5rem',
    borderRadius: '0.5rem',
  },
  alertIcon: {
    color: '#f44336',
    width: 48,
    height: 48,
  },
  alertText: {
    color: '#fab3ae',
    fontSize: '1.25rem',
    fontWeight: 500,
  },
}));

export default useStyles;
