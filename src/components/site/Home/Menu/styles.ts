import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  tdNone: {
    textDecoration: 'none',
  },
  menuItem: {
    backgroundColor: '#35458f',
    borderRadius: '0.5rem',
    marginTop: '1rem',
  },
  pl15: {
    paddingLeft: '1.5rem',
  },
  avatar: {
    width: '3rem',
    height: '3rem',
    margin: '0.25rem 0',
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: 500,
    color: '#fff',
    textTransform: 'uppercase',
  },
}));

export default useStyles;
