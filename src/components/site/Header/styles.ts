import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  rectangle: {
    width: '100%',
    height: '0.75rem',
  },
  bgYellow: {
    backgroundColor: '#ffc311',
  },
  bgLtBlue: {
    backgroundColor: '#73c2d0',
  },
  bgGreen: {
    backgroundColor: '#82bb71',
  },
  bgDkBlue: {
    backgroundColor: '#044f99',
  },
  images: {
    padding: '1rem 10% 1rem 5%',
  },
  logo: {
    '@media (max-width: 600px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
    },
  },
  image: {
    width: 'auto',
    height: 120,

    '@media (max-width: 600px)': {
      height: 100,
    },
  },
}));

export default useStyles;
